import { Subscription } from '../models/subscription';

export const SUBSCRIPTION_LIST: ReadonlyArray<Subscription> = [
  {
    id: '0',
    label: 'Change Beep',
  },
  {
    id: '1',
    label: 'Weather',
  },
];

export const SUBSCRIPTION_MAP: ReadonlyMap<string, Subscription> = new Map<string, Subscription>()
  .set('0', SUBSCRIPTION_LIST[0])
  .set('1', SUBSCRIPTION_LIST[1])
;
