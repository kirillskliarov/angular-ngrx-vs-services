import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TariffState } from '../store/tariff.state';
import { changeUserTariffAction, loadAllTariffListAction } from '../store/tariff.actions';
import { Observable } from 'rxjs';
import { Tariff } from '../../models/tariff';
import { allTariffListSelector } from '../store/tariff.selectors';
import { filter } from 'rxjs/operators';

@Injectable()
export class TariffFacadeService {

  public allTariffList$: Observable<Tariff[]> = this.store.select(allTariffListSelector).pipe(
    filter(value => value !== null),
  );

  constructor(private store: Store<TariffState>) {
  }

  public loadAllTariffList(): void {
    this.store.dispatch(loadAllTariffListAction());
  }

  public changeUserTariff(id: string): void {
    this.store.dispatch(changeUserTariffAction({ id }));
  }
}
