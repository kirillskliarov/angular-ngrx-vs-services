import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { TariffModifierService } from '../services/tariff-modifier.service';
import { loadAllTariffModifierList, loadAllTariffModifierListSuccess } from './tariff-modifier.actions';
import { TariffModifier } from '../../models/tariff-modifier';

@Injectable()
export class TariffModifierEffects {

  public loadTariffModifierLList$ = createEffect(() => this.actions$.pipe(
    ofType(loadAllTariffModifierList),
    switchMap(() => this.tariffModifierService.getAllTariffModifierList().pipe(
      map((tariffModifierList: TariffModifier[]) => loadAllTariffModifierListSuccess({ tariffModifierList })),
    ))
  ));

  constructor(
    private actions$: Actions,
    private tariffModifierService: TariffModifierService,
  ) {
  }
}
