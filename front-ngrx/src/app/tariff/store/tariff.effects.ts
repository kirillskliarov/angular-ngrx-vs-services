import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { loadTariffs, loadTariffsSuccess } from './tariff.actions';
import { TariffService } from '../services/tariff.service';
import { Tariff } from '../../models/tariff';

@Injectable()
export class TariffEffects {

  public loadTariffs$ = createEffect(() => this.actions$.pipe(
    ofType(loadTariffs),
    switchMap(() => this.tariffService.getTariffs().pipe(
      map((tariffs: Tariff[]) => loadTariffsSuccess({ tariffs })),
    ))
  ));

  constructor(
    private actions$: Actions,
    private tariffService: TariffService,
  ) {
  }
}
