import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TariffState } from '../store/tariff.state';
import { loadAllTariffListAction } from '../store/tariff.actions';
import { Observable } from 'rxjs';
import { Tariff } from '../../models/tariff';
import { allTariffListState } from '../store/tariff.selectors';
import { filter } from 'rxjs/operators';

@Injectable()
export class TariffFacadeService {

  public allTariffListValue$: Observable<Tariff[]> = this.store.select(allTariffListState).pipe(
    filter(value => value !== null),
  );

  constructor(private store: Store<TariffState>) {
  }

  public loadAllTariffList(): void {
    this.store.dispatch(loadAllTariffListAction());
  }
}
