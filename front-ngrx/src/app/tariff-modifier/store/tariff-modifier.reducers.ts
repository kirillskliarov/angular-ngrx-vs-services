import { ActionReducer, createReducer, on } from '@ngrx/store';
import { EntityStatus } from '../../models/entity-status';
import { tariffModifierInitialState, TariffModifierState } from './tariff-modifier.state';
import {
  deleteUserTariffModifierAction, deleteUserTariffModifierSuccessAction,
  loadAllTariffModifierListAction,
  loadAllTariffModifierListSuccessAction
} from './tariff-modifier.actions';

const _tariffModifierReducer: ActionReducer<TariffModifierState> = createReducer<TariffModifierState>(
  tariffModifierInitialState,
  on(loadAllTariffModifierListAction, (state: TariffModifierState): TariffModifierState => {
    return {
      ...state,
      allTariffModifierList: {
        ...state.allTariffModifierList,
        status: EntityStatus.LOADING,
      }
    };
  }),
  on(loadAllTariffModifierListSuccessAction, (state: TariffModifierState, { tariffModifierList }): TariffModifierState => {
    return {
      ...state,
      allTariffModifierList: {
        status: EntityStatus.SUCCESS,
        value: tariffModifierList,
      },
    };
  }),
  on(deleteUserTariffModifierAction, (state: TariffModifierState): TariffModifierState => {
    return {
      ...state,
      deleteTariffModifier: {
        ...state.deleteTariffModifier,
        status: EntityStatus.LOADING,
      }
    };
  }),
  on(deleteUserTariffModifierSuccessAction, (state: TariffModifierState): TariffModifierState => {
    return {
      ...state,
      deleteTariffModifier: {
        ...state.deleteTariffModifier,
        status: EntityStatus.SUCCESS,
      }
    };
  }),
);

export function tariffModifierReducer(state, action) {
  return _tariffModifierReducer(state, action);
}
