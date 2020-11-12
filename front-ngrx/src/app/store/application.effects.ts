import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadUserActivePhone,
  loadUserActivePhoneSuccess,
  loadUserPhones,
  loadUserPhonesSuccess,
  loadUserTariff,
  loadUserTariffModifiers,
  loadUserTariffModifiersSuccess,
  loadUserTariffSuccess,
} from './application.actions';
import { filter, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { Tariff } from '../models/tariff';
import { TariffModifier } from '../models/tariff-modifier';
import { UserFacadeService } from '../services/user-facade.service';
import { StateEntity } from '../models/state-entity';
import { EntityStatus } from '../models/entity-status';

@Injectable()
export class ApplicationEffects {

  public loadPhones$ = createEffect(() => this.actions$.pipe(
    ofType(loadUserPhones),
    switchMap(() => this.userService.getPhones().pipe(
      map((phones: string[]) => loadUserPhonesSuccess({ phones })),
    )),
  ));

  public loadActivePhone$ = createEffect(() => this.actions$.pipe(
    ofType(loadUserActivePhone),
    switchMap(() => this.userService.getActivePhone().pipe(
      map((activePhone: string) => loadUserActivePhoneSuccess({ activePhone })),
    ))
  ));

  public loadActivePhoneSuccessLoadUserTariff$ = createEffect(() => this.actions$.pipe(
    ofType(loadUserActivePhoneSuccess),
    map(() => loadUserTariff()),
  ));


  public loadActivePhoneSuccessLoadUserTariffModifiers$ = createEffect(() => this.actions$.pipe(
    ofType(loadUserActivePhoneSuccess),
    map(() => loadUserTariffModifiers()),
  ));

  public loadUserTariff$ = createEffect(() => this.actions$.pipe(
    ofType(loadUserTariff),
    withLatestFrom(this.userFacadeService.activePhoneState$.pipe(
      filter((stateEntity) => stateEntity.status === EntityStatus.SUCCESS),
    )),
    switchMap(([_, activePhoneState]) => {
      return this.userService.getUserTariff(activePhoneState.value).pipe(
        map((userTariff: Tariff) => loadUserTariffSuccess({ userTariff })),
      )
    }),
  ));

  public loadUserTariffModifiers$ = createEffect(() => this.actions$.pipe(
    ofType(loadUserTariffModifiers),
    withLatestFrom(this.userFacadeService.activePhoneState$.pipe(
      filter((stateEntity) => stateEntity.status === EntityStatus.SUCCESS),
    )),
    switchMap(([_, activePhoneState]) => this.userService.getUserTariffModifiers(activePhoneState.value).pipe(
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
