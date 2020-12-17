import { ActionReducer, createReducer, on } from '@ngrx/store';
import { subscriptionInitialState, SubscriptionState } from './subscription.state';
import {
  loadAllSubscriptionListSuccessAction,
  loadUserSubscriptionListSuccessAction,
} from './subscription.actions';

const subscriptionActionReducer: ActionReducer<SubscriptionState> = createReducer<SubscriptionState>(
  subscriptionInitialState,
  on(loadUserSubscriptionListSuccessAction, (state: SubscriptionState, { userSubscriptionList }): SubscriptionState => {
    return {
      ...state,
      userSubscriptionList,
    };
  }),
  on(loadAllSubscriptionListSuccessAction, (state: SubscriptionState, { allSubscriptionList }): SubscriptionState => {
    return {
      ...state,
      allSubscriptionList,
    };
  }),
);

export function subscriptionReducer(state, action): SubscriptionState {
  return subscriptionActionReducer(state, action);
}
