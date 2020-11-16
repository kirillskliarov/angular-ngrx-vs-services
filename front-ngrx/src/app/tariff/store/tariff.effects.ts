import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { loadAllTariffList, loadAllTariffListSuccess } from './tariff.actions';
import { TariffService } from '../services/tariff.service';
import { Tariff } from '../../models/tariff';

@Injectable()
export class TariffEffects {

  public loadTariffs$ = createEffect(() => this.actions$.pipe(
    ofType(loadAllTariffList),
    switchMap(() => this.tariffService.getTariffs().pipe(
      map((tariffs: Tariff[]) => loadAllTariffListSuccess({ tariffs })),
    ))
  ));

  constructor(
    private actions$: Actions,
    private tariffService: TariffService,
  ) {
  }
}
