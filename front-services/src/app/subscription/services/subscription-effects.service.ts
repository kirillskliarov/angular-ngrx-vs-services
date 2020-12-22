import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationStoreService } from '../../services/application-store.service';
import { switchMap, take } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { SubscriptionStoreService } from './subscription-store.service';
import { Subscription } from '../../models/subscription';
import { SubscriptionService } from './subscription.service';

@Injectable()
export class SubscriptionEffectsService {

  constructor(
    private userService: UserService,
    private subscriptionService: SubscriptionService,
    private subscriptionStoreService: SubscriptionStoreService,
    private applicationStoreService: ApplicationStoreService,
  ) {
  }

  public loadUserSubscriptionList(): void {
    // debugger;
    this.applicationStoreService.getUserActivePhone()
      .pipe(
        take(1),
        switchMap((activePhone: string) => {
          return this.userService.getUserSubscriptionList(activePhone);
        }),
      )
      .subscribe((userSubscriptionList: Subscription[]) => {
        this.subscriptionStoreService.setUserSubscriptionList({ userSubscriptionList });
      });
  }

  public loadAllSubscriptionList(): void {
    this.subscriptionService.getAllSubscriptionList()
      .pipe(take(1))
      .subscribe((allSubscriptionList: Subscription[]) => {
        this.subscriptionStoreService.setAllSubscriptionList({ allSubscriptionList });
      });
  }

  public addUserSubscription(payload: { id: string }): void {
    this.applicationStoreService.getUserActivePhone()
      .pipe(
        take(1),
        switchMap((activePhone: string) => {
          return this.userService.addUserSubscription(activePhone, payload.id);
        }),
      )
      .subscribe(() => {
        this.loadUserSubscriptionList();
      });
  }

  public deleteUserSubscription(payload: { id: string }): void {
    this.applicationStoreService.getUserActivePhone()
      .pipe(
        take(1),
        switchMap((activePhone: string) => {
          return this.userService.deleteUserSubscription(activePhone, payload.id);
        }),
      )
      .subscribe(() => {
        this.loadUserSubscriptionList();
      });
  }
}
