import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { Subscription } from '../../models/subscription';
import { map } from 'rxjs/operators';
import { filterNil } from '../../core/filter-nil';
import { NonUserSubscription } from '../../models/non-user-subscription';

@Injectable()
export class SubscriptionStoreService {

  private readonly userSubscriptionList$: BehaviorSubject<Subscription[]> = new BehaviorSubject<Subscription[]>(null);
  private readonly allSubscriptionList$: BehaviorSubject<Subscription[]> = new BehaviorSubject<Subscription[]>(null);

  constructor() {
  }

  public setUserSubscriptionList(userSubscriptionList: Subscription[]): void {
    this.userSubscriptionList$.next(userSubscriptionList);
  }

  public setAllSubscriptionList(allSubscriptionList: Subscription[]): void {
    this.allSubscriptionList$.next(allSubscriptionList);
  }

  public getUserSubscriptionList(): Observable<Subscription[] | null> {
    return this.userSubscriptionList$.asObservable().pipe(filterNil());
  }

  public getAllSubscriptionList(): Observable<Subscription[] | null> {
    return this.allSubscriptionList$.asObservable().pipe(filterNil());
  }

  public getAllSubscriptionListWithUserData(): Observable<NonUserSubscription[]> {
    return combineLatest([
      this.getAllSubscriptionList(),
      this.getUserSubscriptionList(),
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
  }
}
