import { TariffModifier } from '../models/tariff-modifier';
import { USER_DB } from '../data/user-db';
import { Account } from '../models/account';
import { TARIFF_MODIFIERS_MAP } from '../data/tariff-modifiers-list';

export function getUserTariffModifiers(phone: string): TariffModifier[] {
  return (USER_DB.get(phone) as Account).tariffModifierList
    .map((tariffModifierId: string) => TARIFF_MODIFIERS_MAP.get(tariffModifierId) as TariffModifier);
}
