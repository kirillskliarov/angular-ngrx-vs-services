import { createAction, props } from '@ngrx/store';
import { Tariff } from '../../models/tariff';

export const loadAllTariffList = createAction(
  '[Tariff] loadAllTariffList',
);

export const loadAllTariffListSuccess = createAction(
  '[Tariff] loadAllTariffListSuccess',
  props<{ tariffs: Tariff[] }>(),
);
