import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import {
  changeUserTariffAction,
  changeUserTariffSuccessAction,
  loadAllTariffListAction,
  loadAllTariffListSuccessAction,
} from './tariff.actions';
import { TariffService } from '../services/tariff.service';
import { Tariff } from '../../models/tariff';
import { UserFacadeService } from '../../services/user-facade.service';
import { UserService } from '../../services/user.service';

@Injectable()
export class TariffEffects {

  public loadAllTariffListEffect$ = createEffect(() => this.actions$.pipe(
    ofType(loadAllTariffListAction),
    switchMap(() => {
      return this.tariffService.getAllTariffList().pipe(
        map((allTariffList: Tariff[]) => loadAllTariffListSuccessAction({ allTariffList })),
      );
    }),
  ));

  public changeUserTariffEffect$ = createEffect(() => this.actions$.pipe(
    ofType(changeUserTariffAction),
    withLatestFrom(
      this.userFacadeService.activePhone$,
    ),
    switchMap(([{ id }, activePhone]) => {
      return this.userService.changeUserTariff(activePhone, id).pipe(
        map(() => changeUserTariffSuccessAction()),
      );
    }),
  ));

  constructor(
    private actions$: Actions,
    private tariffService: TariffService,
    private userService: UserService,
    private userFacadeService: UserFacadeService,
  ) {
  }
}
