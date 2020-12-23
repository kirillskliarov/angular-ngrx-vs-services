import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Tariff } from '../../models/tariff';
import { filterNil } from '../../core/filter-nil';

@Injectable()
export class TariffStoreService {

  private readonly allTariffList$: BehaviorSubject<Tariff[]> = new BehaviorSubject<Tariff[]>(null);

  constructor() {
  }

  public setAllTariffList(allTariffList: Tariff[]): void {
    this.allTariffList$.next(allTariffList);
  }

  public getAllTariffList(): Observable<Tariff[]> {
    return this.allTariffList$.asObservable().pipe(filterNil());
  }
}
