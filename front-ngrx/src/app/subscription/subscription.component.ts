import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Subscription } from '../models/subscription';
import { UserFacadeService } from '../services/user-facade.service';
import { SubscriptionFacadeService } from './services/subscription-facade.service';
import { filter, takeUntil } from 'rxjs/operators';
import { UserSubscription } from '../models/user-subscription';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddSubscriptionModalComponent } from './components/add-subscription-modal/add-subscription-modal.component';
import { DeleteSubscriptionModalComponent } from './components/delete-subscription-modal/delete-subscription-modal.component';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscriptionComponent implements OnInit, OnDestroy {

  public userSubscriptionList: Subscription[] | null = null;
  public allSubscriptionList: UserSubscription[] | null = null;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private cdr: ChangeDetectorRef,
    private userFacadeService: UserFacadeService,
    private subscriptionFacadeService: SubscriptionFacadeService,
    private modalService: NgbModal,
  ) {
  }

  ngOnInit(): void {
    this.subscriptionFacadeService.loadAllSubscriptionList();

    this.userFacadeService.activePhone$
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe((activePhone: string) => {
        this.subscriptionFacadeService.loadUserSubscriptionList();
        this.cdr.detectChanges();
      });

    this.subscriptionFacadeService.userSubscriptionListValue$
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe((userSubscriptionList: Subscription[]) => {
        this.userSubscriptionList = userSubscriptionList;
        this.cdr.detectChanges();
      });

    this.subscriptionFacadeService.allSubscriptionListValueWithUserData$
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe((allSubscriptionList: UserSubscription[]) => {
        this.allSubscriptionList = allSubscriptionList;
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onAddClick(subscription: Subscription): void {
    const modalRef = this.modalService.open(AddSubscriptionModalComponent);

    modalRef.closed.pipe(
      takeUntil(this.destroy$),
      filter(result => result === true),
    ).subscribe(() => {
      this.subscriptionFacadeService.addUserSubscription(subscription.id);
    });
  }

  public onDeleteClick(subscription: Subscription): void {
    const modalRef = this.modalService.open(DeleteSubscriptionModalComponent);

    modalRef.closed.pipe(
      takeUntil(this.destroy$),
      filter(result => result === true),
    ).subscribe(() => {
      this.subscriptionFacadeService.deleteUserSubscription(subscription.id);
    });
  }
}
