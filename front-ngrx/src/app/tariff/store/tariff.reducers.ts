import { ActionReducer, createReducer, on } from '@ngrx/store';
import { loadAllTariffList, loadAllTariffListSuccess } from './tariff.actions';
import { tariffInitialState, TariffState } from './tariff.state';
import { EntityStatus } from '../../models/entity-status';

const _tariffReducer: ActionReducer<TariffState> = createReducer<TariffState>(
  tariffInitialState,
  on(loadAllTariffList, (state: TariffState): TariffState => {
    return {
      ...state,
      allTariffList: {
        ...state.allTariffList,
        status: EntityStatus.LOADING,
      }
    };
  }),
  on(loadAllTariffListSuccess, (state: TariffState, { tariffList }): TariffState => {
    return {
      ...state,
      allTariffList: {
        status: EntityStatus.SUCCESS,
        value: tariffList,
      },
    };
  }),
);

export function tariffReducer(state, action) {
  return _tariffReducer(state, action);
}
