import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from '../models/subscription';
import { UserFacadeService } from '../services/user-facade.service';
import { SubscriptionFacadeService } from './services/subscription-facade.service';
import { filter, takeUntil } from 'rxjs/operators';
import { NonUserSubscription } from '../models/non-user-subscription';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddSubscriptionModalComponent } from './components/add-subscription-modal/add-subscription-modal.component';
import { DeleteSubscriptionModalComponent } from './components/delete-subscription-modal/delete-subscription-modal.component';
import { BaseComponent } from '../core/base.component';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscriptionComponent extends BaseComponent implements OnInit {

  public userSubscriptionList: Subscription[] | null = null;
  public allSubscriptionList: NonUserSubscription[] | null = null;

  constructor(
    private cdr: ChangeDetectorRef,
    private userFacadeService: UserFacadeService,
    private subscriptionFacadeService: SubscriptionFacadeService,
    private modalService: NgbModal,
  ) {
    super();
  }

  ngOnInit(): void {
    this.subscriptionFacadeService.loadAllSubscriptionList();

    this.userFacadeService.userActivePhone$
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe((activePhone: string) => {
        this.subscriptionFacadeService.loadUserSubscriptionList();
        this.cdr.detectChanges();
      });

    this.subscriptionFacadeService.userSubscriptionList$
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe((userSubscriptionList: Subscription[]) => {
        this.userSubscriptionList = userSubscriptionList;
        this.cdr.detectChanges();
      });

    this.subscriptionFacadeService.allSubscriptionListWithUserData$
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe((allSubscriptionList: NonUserSubscription[]) => {
        this.allSubscriptionList = allSubscriptionList;
        this.cdr.detectChanges();
      });
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
