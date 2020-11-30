import { ActionReducer, createReducer, on } from '@ngrx/store';
import {
  loadUserPhones,
  loadUserPhonesSuccessAction,
  loadUserTariffAction,
  loadUserTariffModifiersAction,
  loadUserTariffModifiersSuccessAction,
  loadUserTariffSuccessAction, setUserActivePhoneAction,
} from './application.actions';
import { EntityStatus } from '../models/entity-status';
import { ApplicationState, applicationInitialState } from './application.state';
import { activePhone } from './application.selectors';

const _applicationReducer: ActionReducer<ApplicationState> = createReducer<ApplicationState>(
  applicationInitialState,
  on(loadUserPhones, (state: ApplicationState): ApplicationState => {
    return {
      ...state,
      phones: {
        ...state.phones,
        status: EntityStatus.LOADING,
      }
    };
  }),
  on(loadUserPhonesSuccessAction, (state: ApplicationState, { phones }): ApplicationState => {
    return {
      ...state,
      phones: {
        status: EntityStatus.SUCCESS,
        value: phones,
      },
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
      userTariff: {
        ...state.userTariff,
        status: EntityStatus.LOADING,
      },
    };
  }),
  on(loadUserTariffSuccessAction, (state: ApplicationState, { userTariff }) => {
    return {
      ...state,
      userTariff: {
        status: EntityStatus.SUCCESS,
        value: userTariff,
      },
    };
  }),
  on(loadUserTariffModifiersAction, (state: ApplicationState): ApplicationState => {
    return {
      ...state,
      userTariffModifiers: {
        ...state.userTariffModifiers,
        status: EntityStatus.LOADING,
      },
    };
  }),
  on(loadUserTariffModifiersSuccessAction, (state: ApplicationState, { userTariffModifiers }): ApplicationState => {
    return {
      ...state,
      userTariffModifiers: {
        status: EntityStatus.SUCCESS,
        value: userTariffModifiers,
      },
    };
  }),
);

export function applicationReducer(state, action) {
  return _applicationReducer(state, action);
}
