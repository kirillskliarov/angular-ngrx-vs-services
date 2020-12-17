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
  on(loadUserPhoneListSuccessAction, (state: ApplicationState, { phoneList }): ApplicationState => {
    return {
      ...state,
      phoneList,
    };
  }),
  on(setUserActivePhoneAction, (state: ApplicationState, { phone }): ApplicationState => {
    return {
      ...state,
      activePhone: phone,
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
