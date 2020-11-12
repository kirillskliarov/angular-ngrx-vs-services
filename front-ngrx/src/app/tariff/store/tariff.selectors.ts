import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TariffState } from './tariff.state';

export const tariffState = createFeatureSelector<TariffState>('tariff');

export const tariffsState = createSelector(
  tariffState,
  ((state: TariffState) => state.tariffs),
);
