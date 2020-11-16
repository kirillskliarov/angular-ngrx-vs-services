import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadUserPhones,
  loadUserPhonesSuccess,
  loadUserTariff,
  loadUserTariffModifiers,
  loadUserTariffModifiersSuccess,
  loadUserTariffSuccess, setUserActivePhone,
} from './application.actions';
import { filter, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { Tariff } from '../models/tariff';
import { TariffModifier } from '../models/tariff-modifier';
import { UserFacadeService } from '../services/user-facade.service';

@Injectable()
export class ApplicationEffects {

  public loadPhones$ = createEffect(() => this.actions$.pipe(
    ofType(loadUserPhones),
    switchMap(() => this.userService.getPhones().pipe(
      map((phones: string[]) => loadUserPhonesSuccess({ phones })),
    )),
  ));

  public loadUserPhonesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(loadUserPhonesSuccess),
    filter(({ phones }) => !!phones),
    map(({ phones }) => setUserActivePhone({ activePhone: phones[0] })),
  ));

  public setUserActivePhoneLoadTariff$ = createEffect(() => this.actions$.pipe(
    ofType(setUserActivePhone),
    map(({ activePhone }) => loadUserTariff())
  ));

  public setUserActivePhoneloadUserTariffModifiers$ = createEffect(() => this.actions$.pipe(
    ofType(setUserActivePhone),
    map(({ activePhone }) => loadUserTariffModifiers())
  ));

  public loadUserTariff$ = createEffect(() => this.actions$.pipe(
    ofType(loadUserTariff),
    withLatestFrom(this.userFacadeService.activePhone$.pipe(
      filter((activePhone) => activePhone !== null),
    )),
    switchMap(([_, activePhone]) => {
      return this.userService.getUserTariff(activePhone).pipe(
        map((userTariff: Tariff) => loadUserTariffSuccess({ userTariff })),
      )
    }),
  ));

  public loadUserTariffModifiers$ = createEffect(() => this.actions$.pipe(
    ofType(loadUserTariffModifiers),
    withLatestFrom(this.userFacadeService.activePhone$.pipe(
      filter((activePhone) => activePhone !== null),
    )),
    switchMap(([_, activePhone]) => this.userService.getUserTariffModifiers(activePhone).pipe(
      map((userTariffModifiers: TariffModifier[]) => loadUserTariffModifiersSuccess({ userTariffModifiers }))
    )),
  ));

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private userFacadeService: UserFacadeService,
  ) {
  }
}
