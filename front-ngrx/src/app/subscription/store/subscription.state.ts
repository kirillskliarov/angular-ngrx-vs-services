import { Subscription } from '../../models/subscription';

export interface SubscriptionState {
  userSubscriptionList: Subscription[] | null;
  allSubscriptionList: Subscription[] | null;
}

export const subscriptionInitialState: SubscriptionState = {
  userSubscriptionList: null,
  allSubscriptionList: null,
};
