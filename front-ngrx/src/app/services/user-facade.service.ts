import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../store/application.state';
import {
  loadUserPhoneListAction,
  loadUserTariffAction,
  loadUserTariffModifierListAction,
  setUserActivePhoneAction,
} from '../store/application.actions';
import { activePhoneSelector, phoneListSelector, userTariffModifierListSelector, userTariffSelector } from '../store/application.selectors';
import { Tariff } from '../models/tariff';
import { TariffModifier } from '../models/tariff-modifier';
import { filter, take } from 'rxjs/operators';
import { changeUserTariffAction } from '../tariff/store/tariff.actions';

@Injectable({
  providedIn: 'root'
})
export class UserFacadeService {

  public phonesState$: Observable<string[]> = this.store.select(phoneListSelector).pipe(
    filter(value => value !== null),
  );
  public activePhone$: Observable<string> = this.store.select(activePhoneSelector).pipe(
    filter(value => value !== null),
  );
  public userTariffValue$: Observable<Tariff> = this.store.select(userTariffSelector).pipe(
    filter(value => value !== null),
  );
  public userTariffModifiersValue$: Observable<TariffModifier[]> = this.store.select(userTariffModifierListSelector).pipe(
    filter(value => value !== null),
  );

  constructor(private store: Store<ApplicationState>) {
  }

  public loadUserPhones(): void {
    this.store.dispatch(loadUserPhoneListAction());
  }

  public setActivePhone(activePhone: string): void {
    this.store.dispatch(setUserActivePhoneAction({ phone: activePhone }));
  }

  public loadUserTariff(): void {
    this.store.dispatch(loadUserTariffAction());
  }

  public loadUserTariffModifiers(): void {
    this.store.dispatch(loadUserTariffModifierListAction());
  }

  public changeUserTariff(id: string): void {
    this.store.dispatch(changeUserTariffAction({ id }));
  }

  public getConflictTariffModifiersList(tariff: Tariff): TariffModifier[] {
    const userTariffModifierList = this.getUserTariffModifierListSnapshot();

    const conflictTariffModifiersList: TariffModifier[] = [];

    userTariffModifierList.forEach((tariffModifier: TariffModifier) => {
      if (!tariffModifier.allowedOnTariffs.includes(tariff.id)) {
        conflictTariffModifiersList.push(tariffModifier);
      }
    });

    return conflictTariffModifiersList;
  }

  private getUserTariffModifierListSnapshot(): TariffModifier[] | null {
    let state: TariffModifier[] | null;
    this.store.select(userTariffModifierListSelector).pipe(take(1)).subscribe(s => state = s);
    return state;
  }
}
