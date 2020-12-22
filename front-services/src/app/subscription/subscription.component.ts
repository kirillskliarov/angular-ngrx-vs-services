import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from '../models/subscription';
import { SubscriptionFacadeService } from './services/subscription-facade.service';
import { filter, takeUntil } from 'rxjs/operators';
import { NonUserSubscription } from '../models/non-user-subscription';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddSubscriptionModalComponent } from './components/add-subscription-modal/add-subscription-modal.component';
import { DeleteSubscriptionModalComponent } from './components/delete-subscription-modal/delete-subscription-modal.component';
import { BaseComponent } from '../core/base.component';
import { ApplicationStoreService } from '../services/application-store.service';
import { SubscriptionStoreService } from './services/subscription-store.service';

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
    private applicationStoreService: ApplicationStoreService,
    private subscriptionStoreService: SubscriptionStoreService,
    private subscriptionFacadeService: SubscriptionFacadeService,
    private modalService: NgbModal,
  ) {
    super();
  }

  ngOnInit(): void {
    this.subscriptionFacadeService.loadAllSubscriptionList();

    this.applicationStoreService.getUserActivePhone()
      .pipe(takeUntil(this.destroy$))
      .subscribe((activePhone: string) => {
        this.subscriptionFacadeService.loadUserSubscriptionList();
        this.cdr.detectChanges();
      });

    this.subscriptionStoreService.getUserSubscriptionList()
      .pipe(takeUntil(this.destroy$))
      .subscribe((userSubscriptionList: Subscription[]) => {
        this.userSubscriptionList = userSubscriptionList;
        this.cdr.detectChanges();
      });

    this.subscriptionStoreService.getAllSubscriptionListWithUserData()
      .pipe(takeUntil(this.destroy$))
      .subscribe((allSubscriptionList: NonUserSubscription[]) => {
        this.allSubscriptionList = allSubscriptionList;
        this.cdr.detectChanges();
      });
  }

  public onAddEvent(subscription: Subscription): void {
    const modalRef = this.modalService.open(AddSubscriptionModalComponent);
    const componentInstance: AddSubscriptionModalComponent = modalRef.componentInstance;
    componentInstance.subscription = subscription;

    modalRef.closed
      .pipe(
        takeUntil(this.destroy$),
        filter(result => result === true),
      )
      .subscribe(() => {
        this.subscriptionFacadeService.addUserSubscription(subscription.id);
      });
  }

  public onDeleteEvent(subscription: Subscription): void {
    const modalRef = this.modalService.open(DeleteSubscriptionModalComponent);
    const componentInstance: DeleteSubscriptionModalComponent = modalRef.componentInstance;
    componentInstance.subscription = subscription;

    modalRef.closed
      .pipe(
        takeUntil(this.destroy$),
        filter(result => result === true),
      )
      .subscribe(() => {
        this.subscriptionFacadeService.deleteUserSubscription(subscription.id);
      });
  }
}
