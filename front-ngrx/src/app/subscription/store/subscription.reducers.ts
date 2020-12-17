import { ActionReducer, createReducer, on } from '@ngrx/store';
import { subscriptionInitialState, SubscriptionState } from './subscription.state';
import {
  loadAllSubscriptionListSuccessAction,
  loadUserSubscriptionListSuccessAction,
} from './subscription.actions';

const subscriptionActionReducer: ActionReducer<SubscriptionState> = createReducer<SubscriptionState>(
  subscriptionInitialState,
  on(loadUserSubscriptionListSuccessAction, (state: SubscriptionState, { subscriptionList }): SubscriptionState => {
    return {
      ...state,
      userSubscriptionList: subscriptionList,
    };
  }),
  on(loadAllSubscriptionListSuccessAction, (state: SubscriptionState, { subscriptionList }): SubscriptionState => {
    return {
      ...state,
      allSubscriptionList: subscriptionList,
    };
  }),
);

export function subscriptionReducer(state, action): SubscriptionState {
  return subscriptionActionReducer(state, action);
}
