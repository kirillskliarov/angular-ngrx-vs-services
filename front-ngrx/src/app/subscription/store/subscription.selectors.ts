import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SubscriptionState } from './subscription.state';

export const subscriptionState = createFeatureSelector<SubscriptionState>('subscription');

export const userSubscriptionListState = createSelector(
  subscriptionState,
  ((state: SubscriptionState) => state.userSubscriptionList),
);

export const allSubscriptionListState = createSelector(
  subscriptionState,
  ((state: SubscriptionState) => state.allSubscriptionList),
);
