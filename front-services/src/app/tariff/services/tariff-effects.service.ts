import { Injectable } from '@angular/core';
import { TariffStoreService } from './tariff-store.service';
import { TariffService } from './tariff.service';
import { Tariff } from '../../models/tariff';
import { ApplicationStoreService } from '../../services/application-store.service';
import { switchMap, take } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { ApplicationEffectsService } from '../../services/application-effects.service';

@Injectable()
export class TariffEffectsService {

  constructor(
    private tariffService: TariffService,
    private userService: UserService,
    private tariffStoreService: TariffStoreService,
    private applicationStoreService: ApplicationStoreService,
    private applicationEffectsService: ApplicationEffectsService,
  ) {
  }

  public loadAllTariffList(): void {
    this.tariffService.getAllTariffList()
      .pipe(take(1))
      .subscribe((allTariffList: Tariff[]) => {
        this.tariffStoreService.setAllTariffList(allTariffList);
      });
  }

  public changeUserTariff(id: string): void {
    this.applicationStoreService.getUserActivePhone()
      .pipe(
        take(1),
        switchMap((activePhone: string) => {
          return this.userService.changeUserTariff(activePhone, id);
        }),
      )
      .subscribe(() => {
        this.applicationEffectsService.loadUserTariff();
        this.applicationEffectsService.loadUserTariffModifierList();
      });
  }
}
