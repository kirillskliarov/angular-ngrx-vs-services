import { Injectable } from '@angular/core';
import { TariffModifierEffectsService } from './tariff-modifier-effects.service';

@Injectable()
export class TariffModifierFacadeService {

  constructor(
    private tariffModifierEffectsService: TariffModifierEffectsService,
  ) {
  }

  public loadAllTariffModifierList(): void {
    this.tariffModifierEffectsService.loadAllTariffModifierList();
  }

  public deleteTariffModifier(id: string): void {
    this.tariffModifierEffectsService.deleteUserTariffModifier(id);
  }

  public addTariffModifier(id: string): void {
    this.tariffModifierEffectsService.addUserTariffModifier(id);
  }
}
