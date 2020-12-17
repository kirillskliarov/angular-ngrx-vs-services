import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Subscription } from '../../models/subscription';
import { allSubscriptionListState, userSubscriptionListState } from '../store/subscription.selectors';
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

  public userSubscriptionListValue$: Observable<Subscription[]> = this.store.select(userSubscriptionListState).pipe(
    filter(value => value !== null),
  );
  public allSubscriptionListValue$: Observable<Subscription[]> = this.store.select(allSubscriptionListState).pipe(
    filter(value => value !== null),
  );
  public allSubscriptionListValueWithUserData$: Observable<UserSubscription[]> = combineLatest([
    this.allSubscriptionListValue$,
    this.userSubscriptionListValue$,
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

  constructor(
    private store: Store<SubscriptionState>,
  ) {
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
