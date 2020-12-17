import { ActionReducer, createReducer, on } from '@ngrx/store';
import { tariffModifierInitialState, TariffModifierState } from './tariff-modifier.state';
import {
  loadAllTariffModifierListSuccessAction,
} from './tariff-modifier.actions';

const tariffModifierActionReducer: ActionReducer<TariffModifierState> = createReducer<TariffModifierState>(
  tariffModifierInitialState,
  on(loadAllTariffModifierListSuccessAction, (state: TariffModifierState, { tariffModifierList }): TariffModifierState => {
    return {
      ...state,
      allTariffModifierList: tariffModifierList,
    };
  }),
);

export function tariffModifierReducer(state, action): TariffModifierState {
  return tariffModifierActionReducer(state, action);
}
