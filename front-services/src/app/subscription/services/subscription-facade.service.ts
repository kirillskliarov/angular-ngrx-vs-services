import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Subscription } from '../../models/subscription';
import { NonUserSubscription } from '../../models/non-user-subscription';
import { SubscriptionStoreService } from './subscription-store.service';
import { SubscriptionEffectsService } from './subscription-effects.service';

@Injectable()
export class SubscriptionFacadeService {

  public userSubscriptionList$: Observable<Subscription[]> = this.subscriptionStoreService.getUserSubscriptionList();
  public allSubscriptionList$: Observable<Subscription[]> = this.subscriptionStoreService.getAllSubscriptionList();
  public allSubscriptionListWithUserData$: Observable<NonUserSubscription[]> = combineLatest([
    this.allSubscriptionList$,
    this.userSubscriptionList$,
  ]).pipe(
    map(([subscriptionList, userSubscribtionList]): NonUserSubscription[] => {
      return subscriptionList.map((subscription: Subscription): NonUserSubscription => {
        return {
          ...subscription,
          isUser: userSubscribtionList.some((userSubscription: Subscription) => userSubscription.id === subscription.id),
        };
      });
    }),
  );

  constructor(
    private subscriptionStoreService: SubscriptionStoreService,
    private subscriptionEffectsService: SubscriptionEffectsService,
  ) {
  }

  public loadUserSubscriptionList(): void {
    this.subscriptionEffectsService.loadUserSubscriptionList();
  }

  public loadAllSubscriptionList(): void {
    this.subscriptionEffectsService.loadAllSubscriptionList();
  }

  public addUserSubscription(id: string): void {
    this.subscriptionEffectsService.addUserSubscription({ id });
  }

  public deleteUserSubscription(id: string): void {
    this.subscriptionEffectsService.deleteUserSubscription({ id });
  }
}
