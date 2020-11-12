import { StateEntity } from '../../models/state-entity';
import { EntityStatus } from '../../models/entity-status';
import { Tariff } from '../../models/tariff';

export interface TariffState {
  tariffs: StateEntity<Tariff[] | null>;
}

export const initialState: TariffState = {
  tariffs: {
    status: EntityStatus.INIT,
    value: null,
  },
};
