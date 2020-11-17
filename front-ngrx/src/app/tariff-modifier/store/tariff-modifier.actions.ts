import { createAction, props } from '@ngrx/store';
import { Tariff } from '../../models/tariff';
import { TariffModifier } from '../../models/tariff-modifier';

export const loadAllTariffModifierList = createAction(
  '[Tariff Modifier] loadAllTariffModifierList',
);

export const loadAllTariffModifierListSuccess = createAction(
  '[Tariff Modifier] loadAllTariffModifierListSuccess',
  props<{ tariffModifierList: TariffModifier[] }>(),
);
