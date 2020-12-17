import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Tariff } from '../models/tariff';
import { UserFacadeService } from '../services/user-facade.service';
import { TariffFacadeService } from './services/tariff-facade.service';
import { filter, takeUntil } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChangeTariffModalComponent } from './components/change-tariff-modal/change-tariff-modal.component';
import { BaseComponent } from '../core/base.component';

@Component({
  selector: 'app-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.scss']
})
export class TariffComponent extends BaseComponent implements OnInit {

  public userTariff: Tariff | null = null;
  public allTariffList: Tariff[] | null = null;

  constructor(
    private cdr: ChangeDetectorRef,
    private userFacadeService: UserFacadeService,
    private tariffFacadeService: TariffFacadeService,
    private modalService: NgbModal,
  ) {
    super();
  }

  ngOnInit(): void {
    this.tariffFacadeService.loadAllTariffList();

    this.userFacadeService.userTariff$
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe((userTariff: Tariff) => {
        this.userTariff = userTariff;
        this.cdr.detectChanges();
      });

    this.tariffFacadeService.allTariffList$
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe((allTariffList: Tariff[]) => {
        this.allTariffList = allTariffList;
        this.cdr.detectChanges();
      });
  }

  public openModal(tariff: Tariff): void {
    const modalRef = this.modalService.open(ChangeTariffModalComponent);
    (modalRef.componentInstance as ChangeTariffModalComponent)
      .conflictTariffModifierList = this.userFacadeService.getConflictTariffModifierList(tariff);

    modalRef.closed.pipe(
      takeUntil(this.destroy$),
      filter(result => result === true),
    )
      .subscribe(() => {
        this.tariffFacadeService.changeUserTariff(tariff.id);
      });
  }
}
