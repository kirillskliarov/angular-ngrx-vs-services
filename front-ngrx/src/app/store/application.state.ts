import { StateEntity } from '../models/state-entity';
import { EntityStatus } from '../models/entity-status';
import { Tariff } from '../models/tariff';
import { TariffModifier } from '../models/tariff-modifier';

export interface ApplicationState {
  phones: StateEntity<string[] | null>;
  activePhone: string | null;
  userTariff: StateEntity<Tariff | null>;
  userTariffModifiers: StateEntity<TariffModifier[] | null>;
}

export const applicationInitialState: ApplicationState = {
  phones: {
    status: EntityStatus.INIT,
    value: null,
  },
  activePhone: null,
  userTariff: {
    status: EntityStatus.INIT,
    value: null,
  },
  userTariffModifiers: {
    status: EntityStatus.INIT,
    value: null,
  },
};
