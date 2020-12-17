import { ActionReducer, createReducer, on } from '@ngrx/store';
import {
  loadAllTariffListAction,
  loadAllTariffListSuccessAction,
} from './tariff.actions';
import { tariffInitialState, TariffState } from './tariff.state';

const tariffActionReducer: ActionReducer<TariffState> = createReducer<TariffState>(
  tariffInitialState,
  on(loadAllTariffListAction, (state: TariffState): TariffState => {
    return {
      ...state,
    };
  }),
  on(loadAllTariffListSuccessAction, (state: TariffState, { tariffList }): TariffState => {
    return {
      ...state,
      allTariffList: tariffList,
    };
  }),
);

export function tariffReducer(state, action): TariffState {
  return tariffActionReducer(state, action);
}
