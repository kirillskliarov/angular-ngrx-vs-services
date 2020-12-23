import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { TariffModifier } from '../../models/tariff-modifier';
import { map } from 'rxjs/operators';
import { filterNil } from '../../core/filter-nil';
import { NonUserTariffModifier } from '../../models/non-user-tariff-modifier';
import { ApplicationStoreService } from '../../services/application-store.service';

@Injectable()
export class TariffModifierStoreService {

  private readonly allTariffModifierList$: BehaviorSubject<TariffModifier[]> = new BehaviorSubject<TariffModifier[]>(null);

  constructor(
    private applicationStoreService: ApplicationStoreService,
  ) {
  }

  public setAllTariffModifierList(allTariffModifierList: TariffModifier[]): void {
    this.allTariffModifierList$.next(allTariffModifierList);
  }

  public getAllTariffModifierList(): Observable<TariffModifier[]> {
    return this.allTariffModifierList$.asObservable().pipe(filterNil());
  }

  public getAllTariffModifierListWithUserData(): Observable<NonUserTariffModifier[]> {
    return combineLatest([
      this.getAllTariffModifierList(),
      this.applicationStoreService.getUserTariffModifierList(),
      this.applicationStoreService.getUserTariff(),
    ]).pipe(
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
  }
}
