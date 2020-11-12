import { createAction, props } from '@ngrx/store';
import { Tariff } from '../../models/tariff';

export const loadTariffs = createAction(
  '[Tariff] loadTariffs',
);

export const loadTariffsSuccess = createAction(
  '[Tariff] loadTariffsSuccess',
  props<{ tariffs: Tariff[] }>(),
);
