import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Tariff } from '../models/tariff';
import { TariffModifier } from '../models/tariff-modifier';
import { filterNil } from '../core/filter-nil';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStoreService {

  private readonly userPhoneList$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(null);
  private readonly userActivePhone$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  private readonly userTariff$: BehaviorSubject<Tariff> = new BehaviorSubject<Tariff>(null);
  private readonly userTariffModifierList$: BehaviorSubject<TariffModifier[]> = new BehaviorSubject<TariffModifier[]>(null);

  constructor() {
  }

  public setUserPhoneList(userPhoneList: string[]): void {
    this.userPhoneList$.next(userPhoneList);
  }

  public setUserActivePhone(userActivePhone: string): void {
    this.userActivePhone$.next(userActivePhone);
  }

  public setUserTariff(userTariff: Tariff): void {
    this.userTariff$.next(userTariff);
  }

  public setUserTariffModifierList(userTariffModifierList: TariffModifier[]): void {
    this.userTariffModifierList$.next(userTariffModifierList);
  }

  public getUserPhoneList(): Observable<string[]> {
    return this.userPhoneList$.asObservable().pipe(filterNil());
  }

  public getUserActivePhone(): Observable<string> {
    return this.userActivePhone$.asObservable().pipe(filterNil());
  }

  public getUserTariff(): Observable<Tariff> {
    return this.userTariff$.asObservable().pipe(filterNil());
  }

  public getUserTariffModifierList(): Observable<TariffModifier[]> {
    return this.userTariffModifierList$.asObservable().pipe(filterNil());
  }

  public getUserTariffModifierListSnapshot(): TariffModifier[] {
    return this.userTariffModifierList$.getValue();
  }
}
