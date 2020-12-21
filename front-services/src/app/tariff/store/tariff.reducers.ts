import { ActionReducer, createReducer, on } from '@ngrx/store';
import {
  loadAllTariffListSuccessAction,
} from './tariff.actions';
import { tariffInitialState, TariffState } from './tariff.state';

const tariffActionReducer: ActionReducer<TariffState> = createReducer<TariffState>(
  tariffInitialState,
  on(loadAllTariffListSuccessAction, (state: TariffState, { allTariffList }): TariffState => {
    return {
      ...state,
      allTariffList,
    };
  }),
);

export function tariffReducer(state, action): TariffState {
  return tariffActionReducer(state, action);
}
