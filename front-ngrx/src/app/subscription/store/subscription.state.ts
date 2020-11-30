import { Subscription } from '../../models/subscription';
import { EntityStatus } from '../../models/entity-status';
import { StateEntity } from '../../models/state-entity';

export interface SubscriptionState {
  userSubscriptionList: StateEntity<Subscription[] | null>;
  allSubscriptionList: StateEntity<Subscription[] | null>;
}

export const subscriptionInitialState: SubscriptionState = {
  userSubscriptionList: {
    status: EntityStatus.SUCCESS,
    value: null,
  },
  allSubscriptionList: {
    status: EntityStatus.SUCCESS,
    value: null,
  },
};
