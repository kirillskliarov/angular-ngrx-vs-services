import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { StateEntity } from '../../models/state-entity';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { EntityStatus } from '../../models/entity-status';
import { allTariffModifierListState } from '../store/tariff-modifier.selectors';
import { TariffModifier } from '../../models/tariff-modifier';
import { loadAllTariffModifierList } from '../store/tariff-modifier.actions';
import { UserFacadeService } from '../../services/user-facade.service';
import { UserTariffModifier } from '../../models/user-tariff-modifier';

@Injectable()
export class TariffModifierFacadeService {

  public allTariffModifierListState$: Observable<StateEntity<TariffModifier[]>> = this.store.select(allTariffModifierListState);

  public allTariffModifierListValue$: Observable<UserTariffModifier[]> = combineLatest(
    [
      this.allTariffModifierListState$.pipe(
        filter((state: StateEntity<TariffModifier[]>) => state.status === EntityStatus.SUCCESS),
      ),
      this.userFacadeService.userTariffModifiersValue$,
    ]
  ).pipe(
    map(([state, userTariffModifierList]) => {
      return state.value.map((tariffModifier: TariffModifier): UserTariffModifier => {
        return {
          ...tariffModifier,
          isUser: userTariffModifierList.some((userTariffModifier: TariffModifier) => userTariffModifier.id === tariffModifier.id),
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
    this.store.dispatch(loadAllTariffModifierList());
  }
}
