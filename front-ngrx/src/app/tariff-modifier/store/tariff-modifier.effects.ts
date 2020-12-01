import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { TariffModifierService } from '../services/tariff-modifier.service';
import {
  deleteUserTariffModifierAction, deleteUserTariffModifierSuccessAction,
  loadAllTariffModifierListAction,
  loadAllTariffModifierListSuccessAction
} from './tariff-modifier.actions';
import { TariffModifier } from '../../models/tariff-modifier';
import { UserService } from '../../services/user.service';
import { UserFacadeService } from '../../services/user-facade.service';

@Injectable()
export class TariffModifierEffects {

  public loadTariffModifierLList$ = createEffect(() => this.actions$.pipe(
    ofType(loadAllTariffModifierListAction),
    switchMap(() => this.tariffModifierService.getAllTariffModifierList().pipe(
      map((tariffModifierList: TariffModifier[]) => loadAllTariffModifierListSuccessAction({ tariffModifierList })),
    ))
  ));

  public deleteTariffModifier$ = createEffect(() => this.actions$.pipe(
    ofType(deleteUserTariffModifierAction),
    withLatestFrom(this.userFacadeService.activePhone$),
    switchMap(([{ id }, phone]) => {
      return this.userService.deleteUserTariffModifier(phone, id).pipe(
        map(() => deleteUserTariffModifierSuccessAction()),
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
