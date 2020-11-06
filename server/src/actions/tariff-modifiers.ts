import { USER_DB } from '../data/user-db';
import { Account } from '../models/account';
import { pushIfNotExists, removeElementFromArray } from '../unils/array';

export function addTariffModifier(phone: string, id: string): void {
  const tariffModifierList = (USER_DB.get(phone) as Account).tariffModifierList;
  pushIfNotExists(tariffModifierList, id);
}

export function removeTariffModifier(phone: string, id: string): void {
  const tariffModifierList = (USER_DB.get(phone) as Account).tariffModifierList;
  removeElementFromArray<string>(tariffModifierList, id);
}
