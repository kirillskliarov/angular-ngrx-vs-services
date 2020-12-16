import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { StateEntity } from '../../models/state-entity';
import { filter, map } from 'rxjs/operators';
import { EntityStatus } from '../../models/entity-status';
import { allTariffModifierListState } from '../store/tariff-modifier.selectors';
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

  public allTariffModifierListState$: Observable<StateEntity<TariffModifier[]>> = this.store.select(allTariffModifierListState);
  public allTariffModifierListValue$: Observable<TariffModifier[]> = this.allTariffModifierListState$.pipe(
    filter((state: StateEntity<TariffModifier[]>) => state.status === EntityStatus.SUCCESS),
    map((state: StateEntity<TariffModifier[]>) => state.value),
  );
  public allTariffModifierListValueWithUserData$: Observable<UserTariffModifier[]> = combineLatest(
    [
      this.allTariffModifierListValue$,
      this.userFacadeService.userTariffModifiersValue$,
      this.userFacadeService.userTariffValue$,
    ]
  ).pipe(
    map(([tariffModifiers, userTariffModifierList, userTariff]) => {
      return tariffModifiers.map((tariffModifier: TariffModifier): UserTariffModifier => {
        return {
          ...tariffModifier,
          isUser: userTariffModifierList.some((userTariffModifier: TariffModifier) => userTariffModifier.id === tariffModifier.id),
          compatibleWithTariff: tariffModifier.allowedOnTariffs.some((tariffModifier) => tariffModifier === userTariff.id),
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
