import { createAction, props } from '@ngrx/store';
import { Tariff } from '../../models/tariff';

export const loadAllTariffListAction = createAction(
  '[Tariff] loadAllTariffListAction',
);

export const loadAllTariffListSuccessAction = createAction(
  '[Tariff] loadAllTariffListSuccessAction',
  props<{ allTariffList: Tariff[] }>(),
);

export const changeUserTariffAction = createAction(
  '[Tariff] changeUserTariffAction',
  props<{ id: string }>(),
);

export const changeUserTariffSuccessAction = createAction(
  '[Tariff] changeUserTariffSuccessAction',
);
