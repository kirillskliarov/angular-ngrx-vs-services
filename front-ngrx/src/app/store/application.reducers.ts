import { ActionReducer, createReducer, on } from '@ngrx/store';
import {
  loadUserPhones,
  loadUserPhonesSuccessAction,
  loadUserTariffAction,
  loadUserTariffModifiersAction,
  loadUserTariffModifiersSuccessAction,
  loadUserTariffSuccessAction,
  setUserActivePhoneAction,
} from './application.actions';
import { ApplicationState, applicationInitialState } from './application.state';

const applicationActionReducer: ActionReducer<ApplicationState> = createReducer<ApplicationState>(
  applicationInitialState,
  on(loadUserPhones, (state: ApplicationState): ApplicationState => {
    return {
      ...state,
    };
  }),
  on(loadUserPhonesSuccessAction, (state: ApplicationState, { phones }): ApplicationState => {
    return {
      ...state,
      phones,
    };
  }),
  on(setUserActivePhoneAction, (state: ApplicationState, { activePhone }): ApplicationState => {
    return {
      ...state,
      activePhone,
    };
  }),
  on(loadUserTariffAction, (state: ApplicationState): ApplicationState => {
    return {
      ...state,
    };
  }),
  on(loadUserTariffSuccessAction, (state: ApplicationState, { userTariff }) => {
    return {
      ...state,
      userTariff,
    };
  }),
  on(loadUserTariffModifiersAction, (state: ApplicationState): ApplicationState => {
    return {
      ...state,
    };
  }),
  on(loadUserTariffModifiersSuccessAction, (state: ApplicationState, { userTariffModifiers }): ApplicationState => {
    return {
      ...state,
      userTariffModifiers,
    };
  }),
);

export function applicationReducer(state, action): ApplicationState {
  return applicationActionReducer(state, action);
}
