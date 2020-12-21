import { Subscription } from './subscription';

export interface NonUserSubscription extends Subscription {
  isUser: boolean;
}
