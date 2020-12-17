import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { StateEntity } from '../../models/state-entity';
import { filter, map } from 'rxjs/operators';
import { EntityStatus } from '../../models/entity-status';
import { Subscription } from '../../models/subscription';
import { allSubscriptionListState, userSubscriptionListState } from '../store/subscription.selectors';
import {
  loadUserSubscriptionListAction,
  loadAllSubscriptionListAction,
  addUserSubscriptionAction, deleteUserSubscriptionAction
} from '../store/subscription.actions';
import { SubscriptionState } from '../store/subscription.state';
import { UserSubscription } from '../../models/user-subscription';
import { UserFacadeService } from '../../services/user-facade.service';

@Injectable()
export class SubscriptionFacadeService {

  public userSubscriptionListState$: Observable<StateEntity<Subscription[]>> = this.store.select(userSubscriptionListState);
  public userSubscriptionListValue$: Observable<Subscription[]> = this.userSubscriptionListState$.pipe(
    filter((state: StateEntity<Subscription[]>) => state.status === EntityStatus.SUCCESS),
    map((state: StateEntity<Subscription[]>) => state.value),
  );
  public allSubscriptionListState$: Observable<StateEntity<Subscription[]>> = this.store.select(allSubscriptionListState);
  public allSubscriptionListValue$: Observable<Subscription[]> = this.allSubscriptionListState$.pipe(
    filter((state: StateEntity<Subscription[]>) => state.status === EntityStatus.SUCCESS),
    map((state: StateEntity<Subscription[]>) => state.value),
  );
  public allSubscriptionListValueWithUserData$: Observable<UserSubscription[]> = combineLatest([
    this.allSubscriptionListValue$,
    this.userSubscriptionListValue$,
  ]).pipe(
    map(([subscriptionList, userSubscribtionList]): UserSubscription[] => {
      return subscriptionList.map((subsctibtion: Subscription): UserSubscription => {
        return {
          ...subsctibtion,
          isUser: userSubscribtionList.some((userSubscription: Subscription) => userSubscription.id === subsctibtion.id),
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
