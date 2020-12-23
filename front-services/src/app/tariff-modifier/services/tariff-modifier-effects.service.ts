import { Injectable } from '@angular/core';
import { TariffModifierService } from './tariff-modifier.service';
import { TariffModifierStoreService } from './tariff-modifier-store.service';
import { TariffModifier } from '../../models/tariff-modifier';
import { ApplicationStoreService } from '../../services/application-store.service';
import { switchMap, take } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { ApplicationEffectsService } from '../../services/application-effects.service';

@Injectable()
export class TariffModifierEffectsService {

  constructor(
    private tariffModifierService: TariffModifierService,
    private userService: UserService,
    private tariffModifierStoreService: TariffModifierStoreService,
    private applicationStoreService: ApplicationStoreService,
    private applicationEffectsService: ApplicationEffectsService,
  ) {
  }

  public loadAllTariffModifierList(): void {
    this.tariffModifierService.getAllTariffModifierList()
      .pipe(take(1))
      .subscribe((allTariffModifierList: TariffModifier[]) => {
        this.tariffModifierStoreService.setAllTariffModifierList(allTariffModifierList);
      });
  }

  public deleteUserTariffModifier(id: string): void {
    this.applicationStoreService.getUserActivePhone()
      .pipe(
        take(1),
        switchMap((activePhone: string) => {
          return this.userService.deleteUserTariffModifier(activePhone, id);
        }),
      )
      .subscribe(() => {
        this.applicationEffectsService.loadUserTariffModifierList();
      });
  }

  public addUserTariffModifier(id: string): void {
    this.applicationStoreService.getUserActivePhone()
      .pipe(
        take(1),
        switchMap((activePhone: string) => {
          return this.userService.addUserTariffModifier(activePhone, id);
        }),
      )
      .subscribe(() => {
        this.applicationEffectsService.loadUserTariffModifierList();
      });
  }
}
