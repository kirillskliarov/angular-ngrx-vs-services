import { Injectable } from '@angular/core';
import { Tariff } from '../models/tariff';
import { TariffModifier } from '../models/tariff-modifier';
import { ApplicationEffectsService } from './application-effects.service';
import { ApplicationStoreService } from './application-store.service';

@Injectable({
  providedIn: 'root'
})
export class UserFacadeService {

  constructor(
    private applicationEffectsService: ApplicationEffectsService,
    private applicationStoreService: ApplicationStoreService,
    ) {
  }

  public loadUserPhoneList(): void {
    this.applicationEffectsService.loadUserPhoneList();
  }

  public setUserActivePhone(userActivePhone: string): void {
    this.applicationStoreService.setUserActivePhone(userActivePhone);
    this.applicationEffectsService.setUserActivePhone();
  }

  public getConflictTariffModifierList(tariff: Tariff): TariffModifier[] {
    const userTariffModifierList = this.applicationStoreService.getUserTariffModifierListSnapshot();

    const conflictTariffModifiersList: TariffModifier[] = [];

    userTariffModifierList.forEach((tariffModifier: TariffModifier) => {
      if (!tariffModifier.allowedOnTariffs.includes(tariff.id)) {
        conflictTariffModifiersList.push(tariffModifier);
      }
    });

    return conflictTariffModifiersList;
  }
}
