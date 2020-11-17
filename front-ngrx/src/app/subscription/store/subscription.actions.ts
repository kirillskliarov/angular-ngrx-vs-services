import { createAction, props } from '@ngrx/store';
import { Subscription } from '../../models/subscription';

export const loadUserSubscriptionList = createAction(
  '[Subscription] loadUserSubscriptionList',
);

export const loadUserSubscriptionListSuccess = createAction(
  '[Subscription] loadUserSubscriptionListSuccess',
  props<{ subscriptionList: Subscription[] }>(),
);

export const loadAllSubscriptionList = createAction(
  '[Subscription] loadAllSubscriptionList',
);

export const loadAllSubscriptionListSuccess = createAction(
  '[Subscription] loadAllSubscriptionListSuccess',
  props<{ subscriptionList: Subscription[] }>(),
);
