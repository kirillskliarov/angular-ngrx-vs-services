import { createAction, props } from '@ngrx/store';
import { Tariff } from '../models/tariff';
import { TariffModifier } from '../models/tariff-modifier';

export const loadUserPhoneListAction = createAction(
  '[Application] loadUserPhoneListAction',
);

export const loadUserPhoneListSuccessAction = createAction(
  '[Application] loadUserPhoneListSuccessAction',
  props<{ phoneList: string[] }>(),
);

export const setUserActivePhoneAction = createAction(
  '[Application] setUserActivePhoneAction',
  props<{ phone: string }>(),
);

export const loadUserTariffAction = createAction(
  '[Application] loadUserTariffAction',
);

export const loadUserTariffSuccessAction = createAction(
  '[Application] loadUserTariffSuccessAction',
  props<{ userTariff: Tariff }>(),
);

export const loadUserTariffModifierListAction = createAction(
  '[Application] loadUserTariffModifierListAction',
);

export const loadUserTariffModifierListSuccessAction = createAction(
  '[Application] loadUserTariffModifierListSuccessAction',
  props<{ userTariffModifierList: TariffModifier[] }>(),
);
