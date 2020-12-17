import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Subscription } from '../../models/subscription';
import {
  allSubscriptionListSelector,
  userSubscriptionListSelector,
} from '../store/subscription.selectors';
import {
  loadUserSubscriptionListAction,
  loadAllSubscriptionListAction,
  addUserSubscriptionAction,
  deleteUserSubscriptionAction,
} from '../store/subscription.actions';
import { SubscriptionState } from '../store/subscription.state';
import { UserSubscription } from '../../models/user-subscription';

@Injectable()
export class SubscriptionFacadeService {

  public userSubscriptionList$: Observable<Subscription[]> = this.store.select(userSubscriptionListSelector).pipe(
    filter(value => value !== null),
  );
  public allSubscriptionList$: Observable<Subscription[]> = this.store.select(allSubscriptionListSelector).pipe(
    filter(value => value !== null),
  );
  public allSubscriptionListWithUserData$: Observable<UserSubscription[]> = combineLatest([
    this.allSubscriptionList$,
    this.userSubscriptionList$,
  ]).pipe(
    map(([subscriptionList, userSubscribtionList]): UserSubscription[] => {
      return subscriptionList.map((subscription: Subscription): UserSubscription => {
        return {
          ...subscription,
          isUser: userSubscribtionList.some((userSubscription: Subscription) => userSubscription.id === subscription.id),
        };
      });
    }),
  );

  constructor(private store: Store<SubscriptionState>) {
  }

  public loadUserSubscriptionList(): void {
    this.store.dispatch(loadUserSubscriptionListAction());
  }

  public loadAllSubscriptionList(): void {
    this.store.dispatch(loadAllSubscriptionListAction());
  }

  public addUserSubscription(id: string): void {
    this.store.dispatch(addUserSubscriptionAction({ id }));
  }

  public deleteUserSubscription(id: string): void {
    this.store.dispatch(deleteUserSubscriptionAction({ id }));
  }
}
