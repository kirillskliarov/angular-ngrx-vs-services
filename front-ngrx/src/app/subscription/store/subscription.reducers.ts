import { ActionReducer, createReducer, on } from '@ngrx/store';
import { subscriptionInitialState, SubscriptionState } from './subscription.state';
import {
  loadAllSubscriptionListAction,
  loadAllSubscriptionListSuccessAction,
  loadUserSubscriptionListAction,
  loadUserSubscriptionListSuccessAction,
} from './subscription.actions';

const subscriptionActionReducer: ActionReducer<SubscriptionState> = createReducer<SubscriptionState>(
  subscriptionInitialState,
  on(loadUserSubscriptionListAction, (state: SubscriptionState): SubscriptionState => {
    return {
      ...state,
    };
  }),
  on(loadUserSubscriptionListSuccessAction, (state: SubscriptionState, { subscriptionList }): SubscriptionState => {
    return {
      ...state,
      userSubscriptionList: subscriptionList,
    };
  }),
  on(loadAllSubscriptionListAction, (state: SubscriptionState): SubscriptionState => {
    return {
      ...state,
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
