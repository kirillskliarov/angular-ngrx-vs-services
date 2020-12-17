import { ActionReducer, createReducer, on } from '@ngrx/store';
import { subscriptionInitialState, SubscriptionState } from './subscription.state';
import {
  loadAllSubscriptionListAction,
  loadAllSubscriptionListSuccessAction,
  loadUserSubscriptionListAction,
  loadUserSubscriptionListSuccessAction,
} from './subscription.actions';
import { EntityStatus } from '../../models/entity-status';

const subscriptionActionReducer: ActionReducer<SubscriptionState> = createReducer<SubscriptionState>(
  subscriptionInitialState,
  on(loadUserSubscriptionListAction, (state: SubscriptionState): SubscriptionState => {
    return {
      ...state,
      userSubscriptionList: {
        ...state.userSubscriptionList,
        status: EntityStatus.LOADING,
      }
    };
  }),
  on(loadUserSubscriptionListSuccessAction, (state: SubscriptionState, { subscriptionList }): SubscriptionState => {
    return {
      ...state,
      userSubscriptionList: {
        status: EntityStatus.SUCCESS,
        value: subscriptionList,
      },
    };
  }),
  on(loadAllSubscriptionListAction, (state: SubscriptionState): SubscriptionState => {
    return {
      ...state,
      allSubscriptionList: {
        ...state.allSubscriptionList,
        status: EntityStatus.LOADING,
      }
    };
  }),
  on(loadAllSubscriptionListSuccessAction, (state: SubscriptionState, { subscriptionList }): SubscriptionState => {
    return {
      ...state,
      allSubscriptionList: {
        status: EntityStatus.SUCCESS,
        value: subscriptionList,
      },
    };
  }),
);

export function subscriptionReducer(state, action): SubscriptionState {
  return subscriptionActionReducer(state, action);
}
