import { ActionReducer, createReducer, on } from '@ngrx/store';
import { loadAllTariffList, loadAllTariffListSuccess } from './tariff.actions';
import { initialState, TariffState } from './tariff.state';
import { EntityStatus } from '../../models/entity-status';

const _tariffReducer: ActionReducer<TariffState> = createReducer<TariffState>(
  initialState,
  on(loadAllTariffList, (state: TariffState): TariffState => {
    return {
      ...state,
      allTariffList: {
        ...state.allTariffList,
        status: EntityStatus.LOADING,
      }
    };
  }),
  on(loadAllTariffListSuccess, (state: TariffState, { tariffs }): TariffState => {
    return {
      ...state,
      allTariffList: {
        status: EntityStatus.SUCCESS,
        value: tariffs,
      },
    };
  }),
);

export function tariffReducer(state, action) {
  return _tariffReducer(state, action);
}
