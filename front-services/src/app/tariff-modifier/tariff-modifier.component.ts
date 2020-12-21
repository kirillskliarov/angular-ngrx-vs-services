import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserFacadeService } from '../services/user-facade.service';
import { TariffModifierFacadeService } from './services/tariff-modifier-facade.service';
import { TariffModifier } from '../models/tariff-modifier';
import { filter, takeUntil } from 'rxjs/operators';
import { NonUserTariffModifier } from '../models/non-user-tariff-modifier';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteTariffModifierModalComponent } from './components/delete-tariff-modifier-modal/delete-tariff-modifier-modal.component';
import { AddTariffModifierModalComponent } from './components/add-tariff-modifier-modal/add-tariff-modifier-modal.component';
import { BaseComponent } from '../core/base.component';

@Component({
  selector: 'app-tariff-modifier',
  templateUrl: './tariff-modifier.component.html',
  styleUrls: ['./tariff-modifier.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TariffModifierComponent extends BaseComponent implements OnInit {

  public userTariffModifierList: TariffModifier[] | null = null;
  public allTariffModifierList: NonUserTariffModifier[] | null = null;

  constructor(
    private cdr: ChangeDetectorRef,
    private userFacadeService: UserFacadeService,
    private tariffModifierFacadeService: TariffModifierFacadeService,
    private modalService: NgbModal,
  ) {
    super();
  }

  ngOnInit(): void {
    this.tariffModifierFacadeService.loadAllTariffModifierList();

    this.userFacadeService.userTariffModifierList$
      .pipe(takeUntil(this.destroy$))
      .subscribe((userTariffModifierList: TariffModifier[]) => {
        this.userTariffModifierList = userTariffModifierList;
        this.cdr.detectChanges();
      });

    this.tariffModifierFacadeService.allTariffModifierListWithUserData$
      .pipe(takeUntil(this.destroy$))
      .subscribe((allTariffModifierList: NonUserTariffModifier[]) => {
        this.allTariffModifierList = allTariffModifierList;
        this.cdr.detectChanges();
      });

  }

  public onAddEvent(tariffModifier: TariffModifier): void {
    const modalRef = this.modalService.open(AddTariffModifierModalComponent);
    const componentInstance: AddTariffModifierModalComponent = modalRef.componentInstance;
    componentInstance.tariffModifier = tariffModifier;

    modalRef.closed
      .pipe(
        takeUntil(this.destroy$),
        filter(result => result === true),
      )
      .subscribe(() => {
        this.tariffModifierFacadeService.addTariffModifier(tariffModifier.id);
      });
  }

  public onDeleteEvent(tariffModifier: TariffModifier): void {
    const modalRef = this.modalService.open(DeleteTariffModifierModalComponent);
    const componentInstance: DeleteTariffModifierModalComponent = modalRef.componentInstance;
    componentInstance.tariffModifier = tariffModifier;

    modalRef.closed
      .pipe(
        takeUntil(this.destroy$),
        filter(result => result === true),
      )
      .subscribe(() => {
        this.tariffModifierFacadeService.deleteTariffModifier(tariffModifier.id);
      });
  }
}
