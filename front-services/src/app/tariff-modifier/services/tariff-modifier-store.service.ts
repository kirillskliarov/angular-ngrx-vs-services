import { Injectable } from '@angular/core';
import { StoreService } from '../../core/store.service';
import { tariffModifierInitialState, TariffModifierState } from '../store/tariff-modifier.state';
import { Observable } from 'rxjs';
import { TariffModifier } from '../../models/tariff-modifier';
import { map } from 'rxjs/operators';
import { filterNil } from '../../core/filter-nil';

@Injectable()
export class TariffModifierStoreService extends StoreService<TariffModifierState> {

  constructor() {
    super(tariffModifierInitialState);
  }

  public setAllTariffModifierList(payload: { allTariffModifierList: TariffModifier[] }): void {
    this.store.next({
      ...this.store.getValue(),
      allTariffModifierList: payload.allTariffModifierList,
    });
  }

  public getAllTariffModifierList(): Observable<TariffModifier[]> {
    return this.store.asObservable().pipe(
      map((store: TariffModifierState) => store.allTariffModifierList),
      filterNil(),
    );
  }
}
