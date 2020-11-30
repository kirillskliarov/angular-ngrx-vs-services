import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TariffState } from './tariff.state';

export const tariffState = createFeatureSelector<TariffState>('tariff');

export const allTariffListState = createSelector(
  tariffState,
  (state: TariffState) => state.allTariffList,
);

export const changeUserTariffStatus = createSelector(
  tariffState,
  (state: TariffState) => state.changeUserTariff.status,
);

