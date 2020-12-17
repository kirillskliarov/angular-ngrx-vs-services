import { Tariff } from '../models/tariff';
import { TariffModifier } from '../models/tariff-modifier';

export interface ApplicationState {
  userPhoneList: string[] | null;
  userActivePhone: string | null;
  userTariff: Tariff | null;
  userTariffModifierList: TariffModifier[] | null;
}

export const applicationInitialState: ApplicationState = {
  userPhoneList: null,
  userActivePhone: null,
  userTariff: null,
  userTariffModifierList: null,
};
