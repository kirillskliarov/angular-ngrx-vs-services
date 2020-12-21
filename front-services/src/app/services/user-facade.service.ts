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
import { take } from 'rxjs/operators';
import { filterNil } from '../core/filter-nil';

@Injectable({
  providedIn: 'root'
})
export class UserFacadeService {

  public userPhoneList$: Observable<string[]> = this.store.select(userPhoneListSelector).pipe(filterNil());
  public userActivePhone$: Observable<string> = this.store.select(userActivePhoneSelector).pipe(filterNil());
  public userTariff$: Observable<Tariff> = this.store.select(userTariffSelector).pipe(filterNil());
  public userTariffModifierList$: Observable<TariffModifier[]> = this.store.select(userTariffModifierListSelector)
    .pipe(filterNil());

  constructor(private store: Store<ApplicationState>) {
  }

  public loadUserPhoneList(): void {
    this.store.dispatch(loadUserPhoneListAction());
  }

  public setUserActivePhone(userActivePhone: string): void {
    this.store.dispatch(setUserActivePhoneAction({ userActivePhone }));
  }

  public getConflictTariffModifierList(tariff: Tariff): TariffModifier[] {
    const userTariffModifierList = this.getUserTariffModifierListSnapshot();

    const conflictTariffModifiersList: TariffModifier[] = [];

    userTariffModifierList.forEach((tariffModifier: TariffModifier) => {
      if (!tariffModifier.allowedOnTariffs.includes(tariff.id)) {
        conflictTariffModifiersList.push(tariffModifier);
      }
    });

    return conflictTariffModifiersList;
  }

  private getUserTariffModifierListSnapshot(): TariffModifier[] {
    let userTariffModifierList: TariffModifier[];
    this.store.select(userTariffModifierListSelector)
      .pipe(take(1))
      .subscribe(list => userTariffModifierList = list);

    return userTariffModifierList;
  }
}
