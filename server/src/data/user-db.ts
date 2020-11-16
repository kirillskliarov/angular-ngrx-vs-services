import { PHONES } from './phones';
import { Account } from '../models/account';
import { TARIFF_LIST } from './tariff-list';
import { TARIFF_MODIFIERS_LIST } from './tariff-modifiers-list';
import { SUBSCRIPTION_LIST } from './subscription-list';

export const USER_DB: ReadonlyMap<string, Account> = (new Map<string, Account>())
  .set(PHONES[0], {
    tariff: TARIFF_LIST[0].id,
    tariffModifierList: [],
    subscriptionList: [],
  })
  .set(PHONES[1], {
    tariff: TARIFF_LIST[0].id,
    tariffModifierList: [
      TARIFF_MODIFIERS_LIST[4].id,
      TARIFF_MODIFIERS_LIST[0].id,
    ],
    subscriptionList: [],
  })
  .set(PHONES[2], {
    tariff: TARIFF_LIST[4].id,
    tariffModifierList: [],
    subscriptionList: [
      SUBSCRIPTION_LIST[0].id,
      SUBSCRIPTION_LIST[1].id,
    ],
  })
;
