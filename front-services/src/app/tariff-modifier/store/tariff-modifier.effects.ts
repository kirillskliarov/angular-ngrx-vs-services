import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { TariffModifierService } from '../services/tariff-modifier.service';
import {
  addUserTariffModifierAction,
  addUserTariffModifierSuccessAction,
  deleteUserTariffModifierAction,
  deleteUserTariffModifierSuccessAction,
  loadAllTariffModifierListAction,
  loadAllTariffModifierListSuccessAction,
} from './tariff-modifier.actions';
import { TariffModifier } from '../../models/tariff-modifier';
import { UserService } from '../../services/user.service';
import { UserFacadeService } from '../../services/user-facade.service';

@Injectable()
export class TariffModifierEffects {

  public loadAllTariffModifierListEffect$ = createEffect(() => this.actions$.pipe(
    ofType(loadAllTariffModifierListAction),
    switchMap(() => this.tariffModifierService.getAllTariffModifierList().pipe(
      map((allTariffModifierList: TariffModifier[]) => loadAllTariffModifierListSuccessAction({ allTariffModifierList })),
    ))
  ));

  public deleteUserTariffModifierEffect$ = createEffect(() => this.actions$.pipe(
    ofType(deleteUserTariffModifierAction),
    withLatestFrom(this.userFacadeService.userActivePhone$),
    switchMap(([{ id }, activePhone]) => {
      return this.userService.deleteUserTariffModifier(activePhone, id).pipe(
        map(() => deleteUserTariffModifierSuccessAction()),
      );
    }),
  ));

  public addUserTariffModifierEffect$ = createEffect(() => this.actions$.pipe(
    ofType(addUserTariffModifierAction),
    withLatestFrom(this.userFacadeService.userActivePhone$),
    switchMap(([{ id }, activePhone]) => {
      return this.userService.addUserTariffModifier(activePhone, id).pipe(
        map(() => addUserTariffModifierSuccessAction()),
      );
    }),
  ));

  constructor(
    private actions$: Actions,
    private tariffModifierService: TariffModifierService,
    private userFacadeService: UserFacadeService,
    private userService: UserService,
  ) {
  }
}
