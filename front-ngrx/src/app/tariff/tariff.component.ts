import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Tariff } from '../models/tariff';
import { UserFacadeService } from '../services/user-facade.service';
import { TariffFacadeService } from './services/tariff-facade.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.scss']
})
export class TariffComponent implements OnInit, OnDestroy {

  public userTariff: Tariff | null = null;
  public allTariffList: Tariff[] | null = null;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private cdr: ChangeDetectorRef,
    private userFacadeService: UserFacadeService,
    private tariffFacadeService: TariffFacadeService,
  ) {
  }

  ngOnInit(): void {
    this.tariffFacadeService.loadAllTariffList();

    this.userFacadeService.userTariffValue$
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe((userTariff: Tariff) => {
        this.userTariff = userTariff;
        this.cdr.detectChanges();
      });

    this.tariffFacadeService.allTariffListValue$
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe((allTariffList: Tariff[]) => {
        console.log(allTariffList);
        this.allTariffList = allTariffList;
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
