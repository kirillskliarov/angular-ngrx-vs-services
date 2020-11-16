import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserFacadeService } from './services/user-facade.service';
import { StateEntity } from './models/state-entity';
import { Tariff } from './models/tariff';
import { TariffModifier } from './models/tariff-modifier';
import { activePhone } from './store/application.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public phonesState: StateEntity<string[]>;
  public activePhone: string;

  constructor(
    private cdr: ChangeDetectorRef,
    private userFacadeService: UserFacadeService,
  ) {
  }

  ngOnInit(): void {
    this.userFacadeService.loadUserPhones();

    this.userFacadeService.phonesState$.subscribe((phonesState: StateEntity<string[]>) => {
      this.phonesState = phonesState;
      this.cdr.detectChanges();
    });

    this.userFacadeService.activePhone$.subscribe((activePhone: string) => {
      this.activePhone = activePhone;
      this.cdr.detectChanges();
    });

    this.userFacadeService.userTariff$.subscribe((userTariff: StateEntity<Tariff>) => {
      console.log(userTariff);
    });

    this.userFacadeService.userTariffModifiers$.subscribe((userTariffModifiers: StateEntity<TariffModifier[]>) => {
      console.log(userTariffModifiers);
    });
  }

  public onSetActivePhone(phone: string): void {
  }
}
