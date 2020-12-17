import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadUserPhones,
  loadUserPhonesSuccessAction,
  loadUserTariffAction,
  loadUserTariffModifiersAction,
  loadUserTariffModifiersSuccessAction,
  loadUserTariffSuccessAction,
  setUserActivePhoneAction,
} from './application.actions';
import { filter, map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
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

  public loadPhones$ = createEffect(() => this.actions$.pipe(
    ofType(loadUserPhones),
    switchMap(() => this.userService.getPhones().pipe(
      map((phones: string[]) => loadUserPhonesSuccessAction({ phones })),
    )),
  ));

  public loadUserPhonesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(loadUserPhonesSuccessAction),
    filter(({ phones }) => !!phones),
    map(({ phones }) => setUserActivePhoneAction({ activePhone: phones[0] })),
  ));

  public setUserActivePhoneLoadUserTariff$ = createEffect(() => this.actions$.pipe(
    ofType(setUserActivePhoneAction),
    map(() => loadUserTariffAction())
  ));

  public setUserActivePhoneLoadUserTariffModifiers$ = createEffect(() => this.actions$.pipe(
    ofType(setUserActivePhoneAction),
    map(() => loadUserTariffModifiersAction())
  ));

  public loadUserTariff$ = createEffect(() => this.actions$.pipe(
    ofType(loadUserTariffAction),
    withLatestFrom(this.userFacadeService.activePhone$.pipe(
      filter((activePhone) => activePhone !== null),
    )),
    switchMap(([_, activePhone]) => {
      return this.userService.getUserTariff(activePhone).pipe(
        map((userTariff: Tariff) => loadUserTariffSuccessAction({ userTariff })),
      );
    }),
  ));

  public loadUserTariffModifiers$ = createEffect(() => this.actions$.pipe(
    ofType(loadUserTariffModifiersAction),
    withLatestFrom(this.userFacadeService.activePhone$.pipe(
      filter((activePhone) => activePhone !== null),
    )),
    switchMap(([_, activePhone]) => this.userService.getUserTariffModifiers(activePhone).pipe(
      map((userTariffModifiers: TariffModifier[]) => loadUserTariffModifiersSuccessAction({ userTariffModifiers }))
    )),
  ));

  public changeUserTariffSuccessAction$ = createEffect(() => this.actions$.pipe(
    ofType(changeUserTariffSuccessAction),
    mergeMap(() => {
      return [
        loadUserTariffAction(),
        loadUserTariffModifiersAction(),
      ];
    }),
  ));

  public deleteUserTariffModifierSuccessAction$ = createEffect(() => this.actions$.pipe(
    ofType(deleteUserTariffModifierSuccessAction),
    map(() => loadUserTariffModifiersAction())
  ));

  public addUserTariffModifierSuccessAction$ = createEffect(() => this.actions$.pipe(
    ofType(addUserTariffModifierSuccessAction),
    map(() => loadUserTariffModifiersAction())
  ));

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private userFacadeService: UserFacadeService,
  ) {
  }
}
