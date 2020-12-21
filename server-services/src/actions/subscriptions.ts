import { USER_DB } from '../data/user-db';
import { Account } from '../models/account';
import { pushIfNotExists, removeElementFromArray } from '../unils/array';

export function addSubscription(phone: string, id: string): void {
  const subscriptionList = (USER_DB.get(phone) as Account).subscriptionList;
  pushIfNotExists<string>(subscriptionList, id);
}

export function removeSubscription(phone: string, id: string): void {
  const subscriptionList = (USER_DB.get(phone) as Account).subscriptionList;
  removeElementFromArray<string>(subscriptionList, id);
}
