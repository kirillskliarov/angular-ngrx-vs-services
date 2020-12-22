import { Injectable } from '@angular/core';
import { StoreService } from '../../core/store.service';
import { tariffInitialState, TariffState } from '../store/tariff.state';
import { Observable } from 'rxjs';
import { Tariff } from '../../models/tariff';
import { map } from 'rxjs/operators';
import { filterNil } from '../../core/filter-nil';

@Injectable()
export class TariffStoreService extends StoreService<TariffState> {

  constructor() {
    super(tariffInitialState);
  }

  public setAllTariffList(payload: {allTariffList: Tariff[]}): void {
    this.store.next({
      ...this.store.getValue(),
      allTariffList: payload.allTariffList,
    });
  };

  public getAllTariffList(): Observable<Tariff[]> {
    return this.store.asObservable().pipe(
      map((store: TariffState) => store.allTariffList),
      filterNil(),
    );
  }
}
