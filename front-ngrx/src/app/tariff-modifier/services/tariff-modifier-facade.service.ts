import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StateEntity } from '../../models/state-entity';
import { filter, map } from 'rxjs/operators';
import { EntityStatus } from '../../models/entity-status';
import { allTariffModifierListState } from '../store/tariff-modifier.selectors';
import { TariffModifier } from '../../models/tariff-modifier';
import { loadAllTariffModifierList } from '../store/tariff-modifier.actions';

@Injectable()
export class TariffModifierFacadeService {

  public allTariffModifierListState$: Observable<StateEntity<TariffModifier[]>> = this.store.select(allTariffModifierListState);
  public allTariffModifierListValue$ = this.allTariffModifierListState$.pipe(
    filter((state: StateEntity<TariffModifier[]>) => state.status === EntityStatus.SUCCESS),
    map((state: StateEntity<TariffModifier[]>) => state.value),
  );

  constructor(private store: Store<TariffModifier>) {
  }

  public loadAllTariffModifierList(): void {
    this.store.dispatch(loadAllTariffModifierList());
  }
}
