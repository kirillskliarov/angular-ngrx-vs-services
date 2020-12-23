import { Injectable } from '@angular/core';
import { TariffEffectsService } from './tariff-effects.service';

@Injectable()
export class TariffFacadeService {

  constructor(
    private tariffEffectsService: TariffEffectsService,
  ) {
  }

  public loadAllTariffList(): void {
    this.tariffEffectsService.loadAllTariffList();
  }

  public changeUserTariff(id: string): void {
    this.tariffEffectsService.changeUserTariff(id);
  }
}
