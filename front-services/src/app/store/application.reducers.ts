import { ActionReducer, createReducer, on } from '@ngrx/store';
import {
  loadUserPhoneListSuccessAction,
  loadUserTariffModifierListSuccessAction,
  loadUserTariffSuccessAction,
  setUserActivePhoneAction,
} from './application.actions';
import { ApplicationState, applicationInitialState } from './application.state';

const applicationActionReducer: ActionReducer<ApplicationState> = createReducer<ApplicationState>(
  applicationInitialState,
  on(loadUserPhoneListSuccessAction, (state: ApplicationState, { userPhoneList }): ApplicationState => {
    return {
      ...state,
      userPhoneList,
    };
  }),
  on(setUserActivePhoneAction, (state: ApplicationState, { userActivePhone }): ApplicationState => {
    return {
      ...state,
      userActivePhone,
    };
  }),
  on(loadUserTariffSuccessAction, (state: ApplicationState, { userTariff }) => {
    return {
      ...state,
      userTariff,
    };
  }),
  on(loadUserTariffModifierListSuccessAction, (state: ApplicationState, { userTariffModifierList }): ApplicationState => {
    return {
      ...state,
      userTariffModifierList,
    };
  }),
);

export function applicationReducer(state, action): ApplicationState {
  return applicationActionReducer(state, action);
}
