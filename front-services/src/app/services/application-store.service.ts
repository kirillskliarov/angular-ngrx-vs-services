import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { applicationInitialState, ApplicationState } from '../store/application.state';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Tariff } from '../models/tariff';
import { TariffModifier } from '../models/tariff-modifier';
import { StoreService } from '../core/store.service';
import { filterNil } from '../core/filter-nil';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStoreService extends StoreService<ApplicationState> {

  constructor() {
    super(applicationInitialState);
  }

  public setUserPhoneList( payload: { userPhoneList: string[] }): void {
    this.store.next({
      ...this.store.getValue(),
      userPhoneList: payload.userPhoneList,
    });
  }

  public setUserActivePhone(payload: { userActivePhone: string }): void {
    this.store.next({
      ...this.store.getValue(),
      userActivePhone: payload.userActivePhone,
    });
  }

  public setUserTariff(payload: { userTariff: Tariff }): void {
    this.store.next({
      ...this.store.getValue(),
      userTariff: payload.userTariff,
    });
  }

  public setUserTariffModifierList(payload: { userTariffModifierList: TariffModifier[] }): void {
    this.store.next({
      ...this.store.getValue(),
      userTariffModifierList: payload.userTariffModifierList,
    });
  }

  public getUserPhoneList(): Observable<string[]> {
    return this.store.asObservable().pipe(
      map((store: ApplicationState) => store.userPhoneList),
      filterNil(),
    );
  }

  public getUserActivePhone(): Observable<string> {
    return this.store.asObservable().pipe(
      map((store: ApplicationState) => store.userActivePhone),
      filterNil(),
      distinctUntilChanged(),
    );
  }

  public getUserTariff(): Observable<Tariff> {
    return this.store.asObservable().pipe(
      map((store: ApplicationState) => store.userTariff),
      filterNil(),
    );
  }

  public getUserTariffModifierList(): Observable<TariffModifier[]> {
    return this.store.asObservable().pipe(
      map((store: ApplicationState) => store.userTariffModifierList),
      filterNil(),
    );
  }
}
