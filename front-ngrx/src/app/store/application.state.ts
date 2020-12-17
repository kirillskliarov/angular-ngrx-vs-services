import { Tariff } from '../models/tariff';
import { TariffModifier } from '../models/tariff-modifier';

export interface ApplicationState {
  phoneList: string[] | null;
  activePhone: string | null;
  userTariff: Tariff | null;
  userTariffModifierList: TariffModifier[] | null;
}

export const applicationInitialState: ApplicationState = {
  phoneList: null,
  activePhone: null,
  userTariff: null,
  userTariffModifierList: null,
};
