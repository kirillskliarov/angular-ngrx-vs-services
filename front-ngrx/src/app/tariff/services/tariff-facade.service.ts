import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TariffState } from '../store/tariff.state';
import { loadAllTariffList } from '../store/tariff.actions';
import { Observable } from 'rxjs';
import { StateEntity } from '../../models/state-entity';
import { Tariff } from '../../models/tariff';
import { allTariffListState } from '../store/tariff.selectors';
import { filter, map } from 'rxjs/operators';
import { EntityStatus } from '../../models/entity-status';

@Injectable()
export class TariffFacadeService {

  public allTariffListState$: Observable<StateEntity<Tariff[]>> = this.store.select(allTariffListState);
  public allTariffListValue$ = this.allTariffListState$.pipe(
    filter((state: StateEntity<Tariff[]>) => state.status === EntityStatus.SUCCESS),
    map((state: StateEntity<Tariff[]>) => state.value),
  );

  constructor(private store: Store<TariffState>) {
  }

  public loadAllTariffList(): void {
    this.store.dispatch(loadAllTariffList());
  }
}
