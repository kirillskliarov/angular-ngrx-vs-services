import { StateEntity } from '../../models/state-entity';
import { EntityStatus } from '../../models/entity-status';
import { TariffModifier } from '../../models/tariff-modifier';

export interface TariffModifierState {
  allTariffModifierList: StateEntity<TariffModifier[] | null>;
}

export const tariffModifierInitialState: TariffModifierState = {
  allTariffModifierList: {
    status: EntityStatus.INIT,
    value: null,
  },
};
