import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { loadTariffs, loadTariffsSuccess } from './tariff.actions';
import { initialState, TariffState } from './tariff.state';
import { EntityStatus } from '../../models/entity-status';

const _tariffReducer: ActionReducer<TariffState> = createReducer<TariffState>(
  initialState,
  on(loadTariffs, (state: TariffState): TariffState => {
    return {
      ...state,
      tariffs: {
        ...state.tariffs,
        status: EntityStatus.LOADING,
      }
    };
  }),
  on(loadTariffsSuccess, (state: TariffState, { tariffs }): TariffState => {
    return {
      ...state,
      tariffs: {
        status: EntityStatus.SUCCESS,
        value: tariffs,
      },
    };
  }),
);

export function tariffReducer(state, action) {
  return _tariffReducer(state, action);
}
