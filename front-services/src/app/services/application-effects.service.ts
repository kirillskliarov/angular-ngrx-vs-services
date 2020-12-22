import { Injectable } from '@angular/core';
import { ApplicationStoreService } from './application-store.service';
import { UserService } from './user.service';
import { switchMap, take } from 'rxjs/operators';
import { Tariff } from '../models/tariff';
import { TariffModifier } from '../models/tariff-modifier';

@Injectable({
  providedIn: 'root'
})
export class ApplicationEffectsService {

  constructor(
    private applicationStoreService: ApplicationStoreService,
    private userService: UserService,
  ) {
  }

  public loadUserPhoneList(): void {
    this.userService.getUserPhoneList()
      .subscribe((userPhoneList: string[]) => {
        this.applicationStoreService.setUserPhoneList({ userPhoneList });
        this.applicationStoreService.setUserActivePhone({ userActivePhone: userPhoneList[0] });
        this.setUserActivePhone();
      });
  }

  public setUserActivePhone(): void {
    this.loadUserTariff();
    this.loadUserTariffModifierList();
  }

  public changeUserTariffSuccess(): void {
    this.loadUserTariff();
    this.loadUserTariffModifierList();
  }

  public loadUserTariff(): void {
    this.applicationStoreService.getUserActivePhone()
      .pipe(
        take(1),
        switchMap((userActivePhone: string) => this.userService.getUserTariff(userActivePhone))
      )
      .subscribe((userTariff: Tariff) => {
        this.applicationStoreService.setUserTariff({ userTariff });
      });
  }

  public loadUserTariffModifierList(): void {
    this.applicationStoreService.getUserActivePhone()
      .pipe(
        take(1),
        switchMap((userActivePhone) => this.userService.getUserTariffModifierList(userActivePhone))
      )
      .subscribe((userTariffModifierList: TariffModifier[]) => {
        this.applicationStoreService.setUserTariffModifierList({ userTariffModifierList });
      });
  }


}
