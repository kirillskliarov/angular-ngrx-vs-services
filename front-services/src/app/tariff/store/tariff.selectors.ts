import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TariffState } from './tariff.state';

export const tariffSelector = createFeatureSelector<TariffState>('tariff');

export const allTariffListSelector = createSelector(
  tariffSelector,
  (state: TariffState) => state.allTariffList,
);
