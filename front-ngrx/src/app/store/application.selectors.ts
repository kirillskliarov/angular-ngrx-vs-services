import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { ApplicationState } from './application.state';

export const applicationState = createFeatureSelector<ApplicationState>('application');

export const phonesState = createSelector(
  applicationState,
  ((state: ApplicationState) => state.phones),
);

export const activePhoneValue = createSelector(
  applicationState,
  ((state: ApplicationState) => state.activePhone),
);

export const userTariffState = createSelector(
  applicationState,
  ((state: ApplicationState) => state.userTariff),
);

export const userTariffModifiersState = createSelector(
  applicationState,
  ((state: ApplicationState) => state.userTariffModifiers),
);
