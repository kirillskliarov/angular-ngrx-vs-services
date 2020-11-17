import { ActionReducer, createReducer, on } from '@ngrx/store';
import { subscriptionInitialState, SubscriptionState } from './subscription.state';
import {
  loadAllSubscriptionList,
  loadAllSubscriptionListSuccess,
  loadUserSubscriptionList,
  loadUserSubscriptionListSuccess,
} from './subscription.actions';
import { EntityStatus } from '../../models/entity-status';

const _subscriptionReducer: ActionReducer<SubscriptionState> = createReducer<SubscriptionState>(
  subscriptionInitialState,
  on(loadUserSubscriptionList, (state: SubscriptionState): SubscriptionState => {
    return {
      ...state,
      userSubscriptionList: {
        ...state.userSubscriptionList,
        status: EntityStatus.LOADING,
      }
    };
  }),
  on(loadUserSubscriptionListSuccess, (state: SubscriptionState, { subscriptionList }): SubscriptionState => {
    return {
      ...state,
      userSubscriptionList: {
        status: EntityStatus.SUCCESS,
        value: subscriptionList,
      },
    };
  }),
  on(loadAllSubscriptionList, (state: SubscriptionState): SubscriptionState => {
    return {
      ...state,
      allSubscriptionList: {
        ...state.allSubscriptionList,
        status: EntityStatus.LOADING,
      }
    };
  }),
  on(loadAllSubscriptionListSuccess, (state: SubscriptionState, { subscriptionList }): SubscriptionState => {
    return {
      ...state,
      allSubscriptionList: {
        status: EntityStatus.SUCCESS,
        value: subscriptionList,
      },
    };
  }),
);

export function subscriptionReducer(state, action) {
  return _subscriptionReducer(state, action);
}
