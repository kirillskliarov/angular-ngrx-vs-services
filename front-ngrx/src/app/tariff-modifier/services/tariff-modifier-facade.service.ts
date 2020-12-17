import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { allTariffModifierListSelector } from '../store/tariff-modifier.selectors';
import { TariffModifier } from '../../models/tariff-modifier';
import {
  addUserTariffModifierAction,
  deleteUserTariffModifierAction,
  loadAllTariffModifierListAction,
} from '../store/tariff-modifier.actions';
import { UserFacadeService } from '../../services/user-facade.service';
import { UserTariffModifier } from '../../models/user-tariff-modifier';

@Injectable()
export class TariffModifierFacadeService {

  public allTariffModifierListValue$: Observable<TariffModifier[]> = this.store.select(allTariffModifierListSelector).pipe(
    filter(value => value !== null),
  );
  public allTariffModifierListValueWithUserData$: Observable<UserTariffModifier[]> = combineLatest(
    [
      this.allTariffModifierListValue$,
      this.userFacadeService.userTariffModifierList$,
      this.userFacadeService.userTariff$,
    ]
  ).pipe(
    map(([tariffModifiers, userTariffModifierList, userTariff]) => {
      return tariffModifiers.map((tariffModifier: TariffModifier): UserTariffModifier => {
        return {
          ...tariffModifier,
          isUser: userTariffModifierList.some((userTariffModifier: TariffModifier) => userTariffModifier.id === tariffModifier.id),
          compatibleWithTariff: tariffModifier.allowedOnTariffs.some((tariffId) => tariffId === userTariff.id),
        };
      });
    }),
  );

  constructor(
    private store: Store<TariffModifier>,
    private userFacadeService: UserFacadeService,
  ) {
  }

  public loadAllTariffModifierList(): void {
    this.store.dispatch(loadAllTariffModifierListAction());
  }

  public deleteTariffModifier(id: string): void {
    this.store.dispatch(deleteUserTariffModifierAction({ id }));
  }

  public addTariffModifier(id: string): void {
    this.store.dispatch(addUserTariffModifierAction({ id }));
  }
}
