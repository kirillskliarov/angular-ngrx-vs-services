import { StateEntity } from '../../models/state-entity';
import { EntityStatus } from '../../models/entity-status';
import { Tariff } from '../../models/tariff';

export interface TariffState {
  allTariffList: StateEntity<Tariff[] | null>;
}

export const tariffInitialState: TariffState = {
  allTariffList: {
    status: EntityStatus.INIT,
    value: null,
  },
};
