import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../store/application.state';
import {
  loadUserPhoneListAction,
  setUserActivePhoneAction,
} from '../store/application.actions';
import {
  userActivePhoneSelector,
  userPhoneListSelector,
  userTariffModifierListSelector,
  userTariffSelector,
} from '../store/application.selectors';
import { Tariff } from '../models/tariff';
import { TariffModifier } from '../models/tariff-modifier';
import { filter, take } from 'rxjs/operators';
import { changeUserTariffAction } from '../tariff/store/tariff.actions';

@Injectable({
  providedIn: 'root'
})
export class UserFacadeService {

  public userPhoneList$: Observable<string[]> = this.store.select(userPhoneListSelector).pipe(
    filter(value => value !== null),
  );
  public userActivePhone$: Observable<string> = this.store.select(userActivePhoneSelector).pipe(
    filter(value => value !== null),
  );
  public userTariff$: Observable<Tariff> = this.store.select(userTariffSelector).pipe(
    filter(value => value !== null),
  );
  public userTariffModifierList$: Observable<TariffModifier[]> = this.store.select(userTariffModifierListSelector).pipe(
    filter(value => value !== null),
  );

  constructor(private store: Store<ApplicationState>) {
  }

  public loadUserPhoneList(): void {
    this.store.dispatch(loadUserPhoneListAction());
  }

  public setUserActivePhone(userActivePhone: string): void {
    this.store.dispatch(setUserActivePhoneAction({ userActivePhone }));
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
    let state: TariffModifier[];
    this.store.select(userTariffModifierListSelector).pipe(take(1)).subscribe(s => state = s);
    return state;
  }
}
