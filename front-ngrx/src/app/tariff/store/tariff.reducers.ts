import { ActionReducer, createReducer, on } from '@ngrx/store';
import {
  changeUserTariffAction,
  changeUserTariffSuccessAction,
  loadAllTariffListAction,
  loadAllTariffListSuccessAction
} from './tariff.actions';
import { tariffInitialState, TariffState } from './tariff.state';
import { EntityStatus } from '../../models/entity-status';

const _tariffReducer: ActionReducer<TariffState> = createReducer<TariffState>(
  tariffInitialState,
  on(loadAllTariffListAction, (state: TariffState): TariffState => {
    return {
      ...state,
      allTariffList: {
        ...state.allTariffList,
        status: EntityStatus.LOADING,
      }
    };
  }),
  on(loadAllTariffListSuccessAction, (state: TariffState, { tariffList }): TariffState => {
    return {
      ...state,
      allTariffList: {
        status: EntityStatus.SUCCESS,
        value: tariffList,
      },
    };
  }),
  on(changeUserTariffAction, (state: TariffState): TariffState => {
    return {
      ...state,
      changeUserTariff: {
        ...state.changeUserTariff,
        status: EntityStatus.LOADING,
      },
    };
  }),
  on(changeUserTariffSuccessAction, (state: TariffState): TariffState => {
    return {
      ...state,
      changeUserTariff: {
        ...state.changeUserTariff,
        status: EntityStatus.SUCCESS,
      },
    };
  }),
);

export function tariffReducer(state, action) {
  return _tariffReducer(state, action);
}
