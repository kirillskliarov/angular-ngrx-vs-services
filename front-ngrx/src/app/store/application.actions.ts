import { createAction, props } from '@ngrx/store';
import { Tariff } from '../models/tariff';
import { TariffModifier } from '../models/tariff-modifier';

export const loadUserPhones = createAction(
  '[Application] loadUserPhones',
);

export const loadUserPhonesSuccess = createAction(
  '[Application] loadUserPhonesSuccess',
  props<{ phones: string[] }>(),
);

export const setUserActivePhone = createAction(
  '[Application] setUserActivePhone',
  props<{ activePhone: string }>(),
);

export const loadUserTariff = createAction(
  '[Application] loadUserTariff',
);

export const loadUserTariffSuccess = createAction(
  '[Application] loadUserTariffSuccess',
  props<{ userTariff: Tariff }>(),
);

export const loadUserTariffModifiers = createAction(
  '[Application] loadUserTariffModifiers',
);

export const loadUserTariffModifiersSuccess = createAction(
  '[Application] loadUserTariffModifiersSuccess',
  props<{ userTariffModifiers: TariffModifier[] }>(),
);
