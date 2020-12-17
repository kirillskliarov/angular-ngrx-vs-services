import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadUserPhoneListAction,
  loadUserPhoneListSuccessAction,
  loadUserTariffAction,
  loadUserTariffModifierListAction,
  loadUserTariffModifierListSuccessAction,
  loadUserTariffSuccessAction,
  setUserActivePhoneAction,
} from './application.actions';
import { map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { Tariff } from '../models/tariff';
import { TariffModifier } from '../models/tariff-modifier';
import { UserFacadeService } from '../services/user-facade.service';
import { changeUserTariffSuccessAction } from '../tariff/store/tariff.actions';
import {
  addUserTariffModifierSuccessAction,
  deleteUserTariffModifierSuccessAction,
} from '../tariff-modifier/store/tariff-modifier.actions';

@Injectable()
export class ApplicationEffects {

  public loadUserPhoneListEffect$ = createEffect(() => this.actions$.pipe(
    ofType(loadUserPhoneListAction),
    switchMap(() => this.userService.getUserPhoneList().pipe(
      map((userPhoneList: string[]) => loadUserPhoneListSuccessAction({ userPhoneList })),
    )),
  ));

  public loadUserPhoneListSuccessEffect$ = createEffect(() => this.actions$.pipe(
    ofType(loadUserPhoneListSuccessAction),
    map(({ userPhoneList }) => setUserActivePhoneAction({ userActivePhone: userPhoneList[0] })),
  ));

  public setUserActivePhoneEffect$ = createEffect(() => this.actions$.pipe(
    ofType(setUserActivePhoneAction),
    mergeMap(() => {
      return [
        loadUserTariffAction(),
        loadUserTariffModifierListAction(),
      ];
    })
  ));

  public loadUserTariffEffect$ = createEffect(() => this.actions$.pipe(
    ofType(loadUserTariffAction),
    withLatestFrom(this.userFacadeService.userActivePhone$),
    switchMap(([, userActivePhone]) => {
      return this.userService.getUserTariff(userActivePhone).pipe(
        map((userTariff: Tariff) => loadUserTariffSuccessAction({ userTariff })),
      );
    }),
  ));

  public loadUserTariffModifierListEffect$ = createEffect(() => this.actions$.pipe(
    ofType(loadUserTariffModifierListAction),
    withLatestFrom(this.userFacadeService.userActivePhone$),
    switchMap(([, userActivePhone]) => this.userService.getUserTariffModifierList(userActivePhone).pipe(
      map((userTariffModifierList: TariffModifier[]) => loadUserTariffModifierListSuccessAction({ userTariffModifierList }))
    )),
  ));

  public changeUserTariffSuccessEffect$ = createEffect(() => this.actions$.pipe(
    ofType(changeUserTariffSuccessAction),
    mergeMap(() => {
      return [
        loadUserTariffAction(),
        loadUserTariffModifierListAction(),
      ];
    }),
  ));

  public deleteUserTariffModifierSuccessEffect$ = createEffect(() => this.actions$.pipe(
    ofType(deleteUserTariffModifierSuccessAction),
    map(() => loadUserTariffModifierListAction())
  ));

  public addUserTariffModifierSuccessEffect$ = createEffect(() => this.actions$.pipe(
    ofType(addUserTariffModifierSuccessAction),
    map(() => loadUserTariffModifierListAction())
  ));

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private userFacadeService: UserFacadeService,
  ) {
  }
}
