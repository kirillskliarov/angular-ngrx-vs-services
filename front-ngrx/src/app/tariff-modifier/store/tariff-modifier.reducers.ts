import { ActionReducer, createReducer, on } from '@ngrx/store';
import { EntityStatus } from '../../models/entity-status';
import { tariffModifierInitialState, TariffModifierState } from './tariff-modifier.state';
import { loadAllTariffModifierList, loadAllTariffModifierListSuccess } from './tariff-modifier.actions';

const _tariffModifierReducer: ActionReducer<TariffModifierState> = createReducer<TariffModifierState>(
  tariffModifierInitialState,
  on(loadAllTariffModifierList, (state: TariffModifierState): TariffModifierState => {
    return {
      ...state,
      allTariffModifierList: {
        ...state.allTariffModifierList,
        status: EntityStatus.LOADING,
      }
    };
  }),
  on(loadAllTariffModifierListSuccess, (state: TariffModifierState, { tariffModifierList }): TariffModifierState => {
    return {
      ...state,
      allTariffModifierList: {
        status: EntityStatus.SUCCESS,
        value: tariffModifierList,
      },
    };
  }),
);

export function tariffModifierReducer(state, action) {
  return _tariffModifierReducer(state, action);
}
