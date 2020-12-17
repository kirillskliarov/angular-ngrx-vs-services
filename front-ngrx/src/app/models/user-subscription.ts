import { Subscription } from './subscription';

export interface UserSubscription extends Subscription {
  isUser: boolean;
}
