import { StateEntity } from '../../models/state-entity';
import { EntityStatus } from '../../models/entity-status';
import { Tariff } from '../../models/tariff';

export interface TariffState {
  allTariffList: StateEntity<Tariff[] | null>;
  changeUserTariff: StateEntity<null>;
}

export const tariffInitialState: TariffState = {
  allTariffList: {
    status: EntityStatus.SUCCESS,
    value: null,
  },
  changeUserTariff: {
    status: EntityStatus.SUCCESS,
    value: null,
  },
};
