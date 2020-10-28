import { USER_DB } from '../data/user-db';
import { Account } from '../models/account';
import { TariffModifier } from '../models/tariff-modifier';
import { TARIFF_MODIFIERS_LIST, TARIFF_MODIFIERS_MAP } from '../data/tariff-modifiers-list';
import { removeElementFromArray } from '../unils/array';

export function setTariff(phone: string, newTariffId: string): string[] {
  const account: Account = (USER_DB.get(phone) as Account);
  const tariffModifierList: string[] = account.tariffModifierList;

  const removedTariffModifierList: string[] = [];

  tariffModifierList.forEach((tariffModifierId: string) => {
    const tariffModifier: TariffModifier = (TARIFF_MODIFIERS_MAP.get(tariffModifierId) as TariffModifier);
    const isNewTariffAllowed = tariffModifier.allowedOnTariffs
      .some((allowedTariffId: string) => allowedTariffId === newTariffId);
    if (!isNewTariffAllowed) {
      removedTariffModifierList.push(tariffModifierId);
    }
  });
  removeTariffModifiers(removedTariffModifierList, account.tariffModifierList);
  account.tariff = newTariffId;

  return removedTariffModifierList;
}

function removeTariffModifiers(tariffModifierListToRemove: string[], tariffModifierList: string[]) {
  tariffModifierListToRemove.forEach((id: string) => removeElementFromArray<string>(tariffModifierList, id));
}

