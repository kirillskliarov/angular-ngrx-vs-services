import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TariffModifierState } from './tariff-modifier.state';

export const tariffModifierSelector = createFeatureSelector<TariffModifierState>('tariff-modifier');

export const allTariffModifierListSelector = createSelector(
  tariffModifierSelector,
  (state: TariffModifierState) => state.allTariffModifierList,
);
