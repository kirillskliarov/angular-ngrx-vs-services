import { Tariff } from '../../models/tariff';

export interface TariffState {
  allTariffList: Tariff[] | null;
}

export const tariffInitialState: TariffState = {
  allTariffList: null,
};
