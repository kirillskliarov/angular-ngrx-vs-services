import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Tariff } from '../models/tariff';
import { UserFacadeService } from '../services/user-facade.service';
import { TariffFacadeService } from './services/tariff-facade.service';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChangeTariffModalComponent } from './change-tariff-modal/change-tariff-modal.component';

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
    private modalService: NgbModal,
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
        this.allTariffList = allTariffList;
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public openModal(tariff: Tariff): void {
    const modalRef = this.modalService.open(ChangeTariffModalComponent);
    const conflictTariffModifierList = this.userFacadeService.getConflictTariffModifiersList(tariff);
    console.log(conflictTariffModifierList);
    (modalRef.componentInstance as ChangeTariffModalComponent).conflictTariffModifierList = conflictTariffModifierList;

    modalRef.closed.pipe(
      takeUntil(this.destroy$),
      filter(result => result === true),
    )
      .subscribe((() => {
        this.userFacadeService.changeUserTariff(tariff.id);
      }));
  }
}
