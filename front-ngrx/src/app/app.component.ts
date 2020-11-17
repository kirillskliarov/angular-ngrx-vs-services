import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { UserFacadeService } from './services/user-facade.service';
import { StateEntity } from './models/state-entity';
import { Tariff } from './models/tariff';
import { TariffModifier } from './models/tariff-modifier';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  public phonesState: StateEntity<string[]>;
  public activePhone: string;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private cdr: ChangeDetectorRef,
    private userFacadeService: UserFacadeService,
  ) {
  }

  ngOnInit(): void {
    this.userFacadeService.loadUserPhones();

    this.userFacadeService.phonesState$
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe((phonesState: StateEntity<string[]>) => {
        this.phonesState = phonesState;
        this.cdr.detectChanges();
      });

    this.userFacadeService.activePhone$
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe((activePhone: string) => {
        this.activePhone = activePhone;
        this.cdr.detectChanges();
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onSetActivePhone(phone: string): void {
    this.userFacadeService.setActivePhone(phone);
  }
}
