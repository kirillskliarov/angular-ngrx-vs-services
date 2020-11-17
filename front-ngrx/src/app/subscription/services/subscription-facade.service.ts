import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StateEntity } from '../../models/state-entity';
import { filter, map } from 'rxjs/operators';
import { EntityStatus } from '../../models/entity-status';
import { Subscription } from '../../models/subscription';
import { allSubscriptionListState, userSubscriptionListState } from '../store/subscription.selectors';
import { loadUserSubscriptionList, loadAllSubscriptionList } from '../store/subscription.actions';
import { SubscriptionState } from '../store/subscription.state';

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

  constructor(private store: Store<SubscriptionState>) {
  }

  public loadUserSubscriptionList(): void {
    this.store.dispatch(loadUserSubscriptionList());
  }

  public loadAllSubscriptionList(): void {
    this.store.dispatch(loadAllSubscriptionList());
  }
}
