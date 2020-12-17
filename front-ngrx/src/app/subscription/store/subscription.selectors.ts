import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SubscriptionState } from './subscription.state';

export const subscriptionSelector = createFeatureSelector<SubscriptionState>('subscription');

export const userSubscriptionListSelector = createSelector(
  subscriptionSelector,
  ((state: SubscriptionState) => state.userSubscriptionList),
);

export const allSubscriptionListSelector = createSelector(
  subscriptionSelector,
  ((state: SubscriptionState) => state.allSubscriptionList),
);
