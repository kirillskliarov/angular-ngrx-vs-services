import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tariff } from '../models/tariff';
import { TariffModifier } from '../models/tariff-modifier';
import { ApplicationEffectsService } from './application-effects.service';
import { ApplicationStoreService } from './application-store.service';

@Injectable({
  providedIn: 'root'
})
export class UserFacadeService {

  public userPhoneList$: Observable<string[]> = this.applicationStoreService.getUserPhoneList();
  public userActivePhone$: Observable<string> = this.applicationStoreService.getUserActivePhone();
  public userTariff$: Observable<Tariff> = this.applicationStoreService.getUserTariff();
  public userTariffModifierList$: Observable<TariffModifier[]> = this.applicationStoreService.getUserTariffModifierList()

  constructor(
    private applicationEffectsService: ApplicationEffectsService,
    private applicationStoreService: ApplicationStoreService,
    ) {
  }

  public loadUserPhoneList(): void {
    this.applicationEffectsService.loadUserPhoneList();
  }

  public setUserActivePhone(userActivePhone: string): void {
    this.applicationStoreService.setUserActivePhone({ userActivePhone });
    this.applicationEffectsService.setUserActivePhone();
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
    return this.applicationStoreService.getSnapshot().userTariffModifierList;
  }
}
