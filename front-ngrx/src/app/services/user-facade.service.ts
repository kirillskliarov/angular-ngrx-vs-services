import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../store/application.state';
import { StateEntity } from '../models/state-entity';
import { loadUserActivePhone, loadUserPhones, loadUserTariff, loadUserTariffModifiers } from '../store/application.actions';
import {
  activePhoneState,
  phonesState,
  userTariffModifiersState,
  userTariffState
} from '../store/application.selectors';
import { Tariff } from '../models/tariff';
import { TariffModifier } from '../models/tariff-modifier';

@Injectable({
  providedIn: 'root'
})
export class UserFacadeService {

  public phonesState$: Observable<StateEntity<string[]>> = this.store.select(phonesState);
  public activePhoneState$: Observable<StateEntity<string>> = this.store.select(activePhoneState);
  public userTariff$: Observable<StateEntity<Tariff>> = this.store.select(userTariffState);
  public userTariffModifiers$: Observable<StateEntity<TariffModifier[]>> = this.store.select(userTariffModifiersState);

  constructor(private store: Store<ApplicationState>) {
  }

  public loadUserPhones(): void {
    this.store.dispatch(loadUserPhones());
  }

  public loadUserActivePhone(): void {
    this.store.dispatch(loadUserActivePhone());
  }

  public loadUserTariff(): void {
    this.store.dispatch(loadUserTariff());
  }

  public loadUserTariffModifiers(): void {
    this.store.dispatch(loadUserTariffModifiers());
  }
}
