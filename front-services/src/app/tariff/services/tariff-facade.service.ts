import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tariff } from '../../models/tariff';
import { TariffStoreService } from './tariff-store.service';
import { TariffEffectsService } from './tariff-effects.service';

@Injectable()
export class TariffFacadeService {

  public allTariffList$: Observable<Tariff[]> = this.tariffStoreService.getAllTariffList();

  constructor(
    private tariffStoreService: TariffStoreService,
    private tariffEffectsService: TariffEffectsService,
  ) {
  }

  public loadAllTariffList(): void {
    this.tariffEffectsService.loadAllTariffList();
  }

  public changeUserTariff(id: string): void {
    this.tariffEffectsService.changeUserTariff({ id });
  }
}
