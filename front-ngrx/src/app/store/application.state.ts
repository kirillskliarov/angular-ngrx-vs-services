import { StateEntity } from '../models/state-entity';
import { EntityStatus } from '../models/entity-status';
import { Tariff } from '../models/tariff';
import { TariffModifier } from '../models/tariff-modifier';

export interface ApplicationState {
  phones: StateEntity<string[]>;
  activePhone: string | null;
  userTariff: StateEntity<Tariff | null>;
  userTariffModifiers: StateEntity<TariffModifier[] | null>;
}

export const applicationInitialState: ApplicationState = {
  phones: {
    status: EntityStatus.SUCCESS,
    value: [],
  },
  activePhone: null,
  userTariff: {
    status: EntityStatus.SUCCESS,
    value: null,
  },
  userTariffModifiers: {
    status: EntityStatus.SUCCESS,
    value: null,
  },
};
