import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TariffModifier } from '../../models/tariff-modifier';
import { UserFacadeService } from '../../services/user-facade.service';
import { NonUserTariffModifier } from '../../models/non-user-tariff-modifier';
import { TariffModifierStoreService } from './tariff-modifier-store.service';
import { TariffModifierEffectsService } from './tariff-modifier-effects.service';

@Injectable()
export class TariffModifierFacadeService {

  public allTariffModifierList$: Observable<TariffModifier[]> = this.tariffModifierStoreService.getAllTariffModifierList();
  public allTariffModifierListWithUserData$: Observable<NonUserTariffModifier[]> = combineLatest(
    [
      this.allTariffModifierList$,
      this.userFacadeService.userTariffModifierList$,
      this.userFacadeService.userTariff$,
    ]
  ).pipe(
    map(([tariffModifiers, userTariffModifierList, userTariff]) => {
      return tariffModifiers.map((tariffModifier: TariffModifier): NonUserTariffModifier => {
        return {
          ...tariffModifier,
          isUser: userTariffModifierList.some((userTariffModifier: TariffModifier) => userTariffModifier.id === tariffModifier.id),
          compatibleWithTariff: tariffModifier.allowedOnTariffs.some((tariffId) => tariffId === userTariff.id),
        };
      });
    }),
  );

  constructor(
    private userFacadeService: UserFacadeService,
    private tariffModifierStoreService: TariffModifierStoreService,
    private tariffModifierEffectsService: TariffModifierEffectsService,
  ) {
  }

  public loadAllTariffModifierList(): void {
    this.tariffModifierEffectsService.loadAllTariffModifierList();
  }

  public deleteTariffModifier(id: string): void {
    this.tariffModifierEffectsService.deleteUserTariffModifier({ id });
  }

  public addTariffModifier(id: string): void {
    this.tariffModifierEffectsService.addUserTariffModifier({ id });
  }
}
