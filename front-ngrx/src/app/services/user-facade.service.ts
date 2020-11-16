import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../store/application.state';
import { StateEntity } from '../models/state-entity';
import {
  loadUserPhones,
  loadUserTariff,
  loadUserTariffModifiers,
  setUserActivePhone,
} from '../store/application.actions';
import { activePhone, phonesState, userTariffModifiersState, userTariffState } from '../store/application.selectors';
import { Tariff } from '../models/tariff';
import { TariffModifier } from '../models/tariff-modifier';
import { filter, map } from 'rxjs/operators';
import { EntityStatus } from '../models/entity-status';

@Injectable({
  providedIn: 'root'
})
export class UserFacadeService {

  public phonesState$: Observable<StateEntity<string[]>> = this.store.select(phonesState);
  public phonesValue$: Observable<string[]> = this.phonesState$.pipe(
    filter((phonesState: StateEntity<string[]>) => phonesState.status === EntityStatus.SUCCESS),
    map((phonesState: StateEntity<string[]>) => phonesState.value),
  );
  public activePhone$: Observable<string> = this.store.select(activePhone);
  public userTariffState$: Observable<StateEntity<Tariff>> = this.store.select(userTariffState);
  public userTariffValue$: Observable<Tariff> = this.userTariffState$.pipe(
    filter((userTariffState: StateEntity<Tariff>) => userTariffState.status === EntityStatus.SUCCESS),
    map((userTariffState: StateEntity<Tariff>) => userTariffState.value),
  );
  public userTariffModifiersState$: Observable<StateEntity<TariffModifier[]>> = this.store.select(userTariffModifiersState);
  public userTariffModifiersValue$: Observable<TariffModifier[]> = this.userTariffModifiersState$.pipe(
    filter((userTariffModifiersState: StateEntity<TariffModifier[]>) => userTariffModifiersState.status === EntityStatus.SUCCESS),
    map((userTariffModifiersState: StateEntity<TariffModifier[]>) => userTariffModifiersState.value),
  );

  constructor(private store: Store<ApplicationState>) {
  }

  public loadUserPhones(): void {
    this.store.dispatch(loadUserPhones());
  }

  public setActivePhone(activePhone: string): void {
    this.store.dispatch(setUserActivePhone({ activePhone }));
  }

  public loadUserTariff(): void {
    this.store.dispatch(loadUserTariff());
  }

  public loadUserTariffModifiers(): void {
    this.store.dispatch(loadUserTariffModifiers());
  }
}
