import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../store/application.state';
import { StateEntity } from '../models/state-entity';
import {
  loadUserPhones,
  loadUserTariffAction,
  loadUserTariffModifiersAction,
  setUserActivePhoneAction,
} from '../store/application.actions';
import { activePhoneValue, phonesState, userTariffModifiersState, userTariffState } from '../store/application.selectors';
import { Tariff } from '../models/tariff';
import { TariffModifier } from '../models/tariff-modifier';
import { filter, map, take } from 'rxjs/operators';
import { EntityStatus } from '../models/entity-status';
import { changeUserTariffAction } from '../tariff/store/tariff.actions';

@Injectable({
  providedIn: 'root'
})
export class UserFacadeService {

  public phonesState$: Observable<StateEntity<string[]>> = this.store.select(phonesState);
  public phonesValue$: Observable<string[]> = this.phonesState$.pipe(
    filter((phonesSt: StateEntity<string[]>) => phonesSt.status === EntityStatus.SUCCESS),
    map((phonesSt: StateEntity<string[]>) => phonesSt.value),
  );
  public activePhone$: Observable<string> = this.store.select(activePhoneValue);
  public userTariffState$: Observable<StateEntity<Tariff>> = this.store.select(userTariffState);
  public userTariffValue$: Observable<Tariff> = this.userTariffState$.pipe(
    filter((userTariffSt: StateEntity<Tariff>) => userTariffSt.status === EntityStatus.SUCCESS),
    map((userTariffSt: StateEntity<Tariff>) => userTariffSt.value),
  );
  public userTariffModifiersState$: Observable<StateEntity<TariffModifier[]>> = this.store.select(userTariffModifiersState);
  public userTariffModifiersValue$: Observable<TariffModifier[]> = this.userTariffModifiersState$.pipe(
    filter((userTariffModifiersSt: StateEntity<TariffModifier[]>) => userTariffModifiersSt.status === EntityStatus.SUCCESS),
    map((userTariffModifiersSt: StateEntity<TariffModifier[]>) => userTariffModifiersSt.value),
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
    const userTariffModifierList = this.getUserTariffModifierListSnapshot().value;

    const conflictTariffModifiersList: TariffModifier[] = [];

    userTariffModifierList.forEach((tariffModifier: TariffModifier) => {
      if (!tariffModifier.allowedOnTariffs.includes(tariff.id)) {
        conflictTariffModifiersList.push(tariffModifier);
      }
    });

    return conflictTariffModifiersList;
  }

  private getUserTariffSnapshot(): StateEntity<Tariff | null> {
    let state: StateEntity<Tariff | null>;
    this.store.select(userTariffState).pipe(take(1)).subscribe(s => state = s);
    return state;
  }

  private getUserTariffModifierListSnapshot(): StateEntity<TariffModifier[] | null> {
    let state: StateEntity<TariffModifier[] | null>;
    this.store.select(userTariffModifiersState).pipe(take(1)).subscribe(s => state = s);
    return state;
  }
}
