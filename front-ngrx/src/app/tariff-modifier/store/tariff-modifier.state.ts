import { TariffModifier } from '../../models/tariff-modifier';

export interface TariffModifierState {
  allTariffModifierList: TariffModifier[] | null;
}

export const tariffModifierInitialState: TariffModifierState = {
  allTariffModifierList: null,
};
