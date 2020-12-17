import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ApplicationState } from './application.state';

export const applicationSelector = createFeatureSelector<ApplicationState>('application');

export const phoneListSelector = createSelector(
  applicationSelector,
  ((state: ApplicationState) => state.phoneList),
);

export const activePhoneSelector = createSelector(
  applicationSelector,
  ((state: ApplicationState) => state.activePhone),
);

export const userTariffSelector = createSelector(
  applicationSelector,
  ((state: ApplicationState) => state.userTariff),
);

export const userTariffModifierListSelector = createSelector(
  applicationSelector,
  ((state: ApplicationState) => state.userTariffModifierList),
);
