import { createAction, props } from '@ngrx/store';
import { Tariff } from '../models/tariff';
import { TariffModifier } from '../models/tariff-modifier';

export const loadUserPhones = createAction(
  '[Application] loadUserPhones',
);

export const loadUserPhonesSuccessAction = createAction(
  '[Application] loadUserPhonesSuccessAction',
  props<{ phones: string[] }>(),
);

export const setUserActivePhoneAction = createAction(
  '[Application] setUserActivePhoneAction',
  props<{ activePhone: string }>(),
);

export const loadUserTariffAction = createAction(
  '[Application] loadUserTariffAction',
);

export const loadUserTariffSuccessAction = createAction(
  '[Application] loadUserTariffSuccessAction',
  props<{ userTariff: Tariff }>(),
);

export const loadUserTariffModifiersAction = createAction(
  '[Application] loadUserTariffModifiersAction',
);

export const loadUserTariffModifiersSuccessAction = createAction(
  '[Application] loadUserTariffModifiersSuccessAction',
  props<{ userTariffModifiers: TariffModifier[] }>(),
);
