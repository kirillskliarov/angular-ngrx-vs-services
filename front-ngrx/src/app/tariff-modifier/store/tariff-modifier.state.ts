import { StateEntity } from '../../models/state-entity';
import { EntityStatus } from '../../models/entity-status';
import { TariffModifier } from '../../models/tariff-modifier';

export interface TariffModifierState {
  allTariffModifierList: StateEntity<TariffModifier[]>;
  deleteTariffModifier: StateEntity<null>;
}

export const tariffModifierInitialState: TariffModifierState = {
  allTariffModifierList: {
    status: EntityStatus.SUCCESS,
    value: [],
  },
  deleteTariffModifier: {
    status: EntityStatus.SUCCESS,
    value: null,
  },
};
