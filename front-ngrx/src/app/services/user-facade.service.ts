import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../store/application.state';
import {
  loadUserPhones,
  loadUserTariffAction,
  loadUserTariffModifiersAction,
  setUserActivePhoneAction,
} from '../store/application.actions';
import { activePhoneValue, phonesState, userTariffModifiersState, userTariffState } from '../store/application.selectors';
import { Tariff } from '../models/tariff';
import { TariffModifier } from '../models/tariff-modifier';
import { filter, take } from 'rxjs/operators';
import { changeUserTariffAction } from '../tariff/store/tariff.actions';

@Injectable({
  providedIn: 'root'
})
export class UserFacadeService {

  public phonesState$: Observable<string[]> = this.store.select(phonesState).pipe(
    filter(value => value !== null),
  );
  public activePhone$: Observable<string> = this.store.select(activePhoneValue).pipe(
    filter(value => value !== null),
  );
  public userTariffValue$: Observable<Tariff> = this.store.select(userTariffState).pipe(
    filter(value => value !== null),
  );
  public userTariffModifiersValue$: Observable<TariffModifier[]> = this.store.select(userTariffModifiersState).pipe(
    filter(value => value !== null),
  );

  constructor(private store: Store<ApplicationState>) {
  }

  public loadUserPhones(): void {
    this.store.dispatch(loadUserPhones());
  }

  public setActivePhone(activePhone: string): void {
    this.store.dispatch(setUserActivePhoneAction({ activePhone }));
  }

  public loadUserTariff(): void {
    this.store.dispatch(loadUserTariffAction());
  }

  public loadUserTariffModifiers(): void {
    this.store.dispatch(loadUserTariffModifiersAction());
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
    this.store.select(userTariffModifiersState).pipe(take(1)).subscribe(s => state = s);
    return state;
  }
}
