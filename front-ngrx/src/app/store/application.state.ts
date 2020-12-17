import { Tariff } from '../models/tariff';
import { TariffModifier } from '../models/tariff-modifier';

export interface ApplicationState {
  phones: string[] | null;
  activePhone: string | null;
  userTariff: Tariff | null;
  userTariffModifiers: TariffModifier[] | null;
}

export const applicationInitialState: ApplicationState = {
  phones: null,
  activePhone: null,
  userTariff: null,
  userTariffModifiers: null,
};
