import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TariffModifierState } from './tariff-modifier.state';

export const tariffModifierState = createFeatureSelector<TariffModifierState>('tariff-modifier');

export const allTariffModifierListState = createSelector(
  tariffModifierState,
  (state: TariffModifierState) => state.allTariffModifierList,
);
