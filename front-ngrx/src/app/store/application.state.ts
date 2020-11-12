import { StateEntity } from '../models/state-entity';
import { EntityStatus } from '../models/entity-status';
import { Tariff } from '../models/tariff';
import { TariffModifier } from '../models/tariff-modifier';

export interface ApplicationState {
  phones: StateEntity<string[] | null>;
  activePhone: StateEntity<string | null>;
  userTariff: StateEntity<Tariff | null>;
  userTariffModifiers: StateEntity<TariffModifier[] | null>;
}

export const initialState: ApplicationState = {
  phones: {
    status: EntityStatus.INIT,
    value: null,
  },
  activePhone: {
    status: EntityStatus.INIT,
    value: null,
  },
  userTariff: {
    status: EntityStatus.INIT,
    value: null,
  },
  userTariffModifiers: {
    status: EntityStatus.INIT,
    value: null,
  },
};
