import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ApplicationState } from './application.state';

export const applicationSelector = createFeatureSelector<ApplicationState>('application');

export const userPhoneListSelector = createSelector(
  applicationSelector,
  ((state: ApplicationState) => state.userPhoneList),
);

export const userActivePhoneSelector = createSelector(
  applicationSelector,
  ((state: ApplicationState) => state.userActivePhone),
);

export const userTariffSelector = createSelector(
  applicationSelector,
  ((state: ApplicationState) => state.userTariff),
);

export const userTariffModifierListSelector = createSelector(
  applicationSelector,
  ((state: ApplicationState) => state.userTariffModifierList),
);
