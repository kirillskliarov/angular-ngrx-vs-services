import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { subscriptionInitialState, SubscriptionState } from '../store/subscription.state';
import { Subscription } from '../../models/subscription';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { StoreService } from '../../core/store.service';
import { filterNil } from '../../core/filter-nil';

@Injectable()
export class SubscriptionStoreService extends StoreService<SubscriptionState> {

  constructor() {
    super(subscriptionInitialState);
  }

  public setUserSubscriptionList(payload: { userSubscriptionList: Subscription[] }): void {
    this.store.next({
      ...this.store.getValue(),
      userSubscriptionList: payload.userSubscriptionList,
    });
  }

  public setAllSubscriptionList(payload: { allSubscriptionList: Subscription[] }): void {
    this.store.next({
      ...this.store.getValue(),
      allSubscriptionList: payload.allSubscriptionList,
    });
  }

  public getUserSubscriptionList(): Observable<Subscription[] | null> {
    return this.store.asObservable().pipe(
      map((store: SubscriptionState) => store.userSubscriptionList),
      filterNil(),
    );
  }

  public getAllSubscriptionList(): Observable<Subscription[] | null> {
    return this.store.asObservable().pipe(
      map((store: SubscriptionState) => store.allSubscriptionList),
      filterNil(),
    );
  }
}
