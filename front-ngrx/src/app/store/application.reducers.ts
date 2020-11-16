import { ActionReducer, createReducer, on } from '@ngrx/store';
import {
  loadUserPhones,
  loadUserPhonesSuccess,
  loadUserTariff,
  loadUserTariffModifiers,
  loadUserTariffModifiersSuccess,
  loadUserTariffSuccess, setUserActivePhone,
} from './application.actions';
import { EntityStatus } from '../models/entity-status';
import { ApplicationState, initialState } from './application.state';
import { activePhone } from './application.selectors';

const _applicationReducer: ActionReducer<ApplicationState> = createReducer<ApplicationState>(
  initialState,
  on(loadUserPhones, (state: ApplicationState): ApplicationState => {
    return {
      ...state,
      phones: {
        ...state.phones,
        status: EntityStatus.LOADING,
      }
    };
  }),
  on(loadUserPhonesSuccess, (state: ApplicationState, { phones }): ApplicationState => {
    return {
      ...state,
      phones: {
        status: EntityStatus.SUCCESS,
        value: phones,
      },
    };
  }),
  on(setUserActivePhone, (state: ApplicationState, { activePhone }): ApplicationState => {
    return {
      ...state,
      activePhone,
    };
  }),
  on(loadUserTariff, (state: ApplicationState): ApplicationState => {
    return {
      ...state,
      userTariff: {
        ...state.userTariff,
        status: EntityStatus.LOADING,
      },
    };
  }),
  on(loadUserTariffSuccess, (state: ApplicationState, { userTariff }) => {
    return {
      ...state,
      userTariff: {
        status: EntityStatus.SUCCESS,
        value: userTariff,
      },
    };
  }),
  on(loadUserTariffModifiers, (state: ApplicationState): ApplicationState => {
    return {
      ...state,
      userTariffModifiers: {
        ...state.userTariffModifiers,
        status: EntityStatus.LOADING,
      },
    };
  }),
  on(loadUserTariffModifiersSuccess, (state: ApplicationState, { userTariffModifiers }): ApplicationState => {
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
