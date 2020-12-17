import { createAction, props } from '@ngrx/store';
import { Subscription } from '../../models/subscription';

export const loadUserSubscriptionListAction = createAction(
  '[Subscription] loadUserSubscriptionListAction',
);

export const loadUserSubscriptionListSuccessAction = createAction(
  '[Subscription] loadUserSubscriptionListSuccessAction',
  props<{ subscriptionList: Subscription[] }>(),
);

export const loadAllSubscriptionListAction = createAction(
  '[Subscription] loadAllSubscriptionListAction',
);

export const loadAllSubscriptionListSuccessAction = createAction(
  '[Subscription] loadAllSubscriptionListSuccessAction',
  props<{ subscriptionList: Subscription[] }>(),
);

export const addUserSubscriptionAction = createAction(
  '[Subscription] addUserSubscriptionAction',
  props<{id: string}>()
);

export const addUserSubscriptionSuccessAction = createAction(
  '[Subscription] addUserSubscriptionSuccessAction',
);

export const deleteUserSubscriptionAction = createAction(
  '[Subscription] deleteUserSubscriptionAction',
  props<{id: string}>()
);

export const deleteUserSubscriptionSuccessAction = createAction(
  '[Subscription] deleteUserSubscriptionSuccessAction',
);
