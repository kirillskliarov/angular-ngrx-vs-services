import { Injectable } from '@angular/core';
import { StoreService } from '../../core/store.service';
import { tariffModifierInitialState, TariffModifierState } from '../store/tariff-modifier.state';
import { combineLatest, Observable } from 'rxjs';
import { TariffModifier } from '../../models/tariff-modifier';
import { map } from 'rxjs/operators';
import { filterNil } from '../../core/filter-nil';
import { NonUserTariffModifier } from '../../models/non-user-tariff-modifier';
import { ApplicationStoreService } from '../../services/application-store.service';

@Injectable()
export class TariffModifierStoreService extends StoreService<TariffModifierState> {

  constructor(
    private applicationStoreService: ApplicationStoreService,
  ) {
    super(tariffModifierInitialState);
  }

  public setAllTariffModifierList(payload: { allTariffModifierList: TariffModifier[] }): void {
    this.store.next({
      ...this.store.getValue(),
      allTariffModifierList: payload.allTariffModifierList,
    });
  }

  public getAllTariffModifierList(): Observable<TariffModifier[]> {
    return this.store.asObservable().pipe(
      map((store: TariffModifierState) => store.allTariffModifierList),
      filterNil(),
    );
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
