import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TariffModifier } from '../../../models/tariff-modifier';
import { Tariff } from '../../../models/tariff';

@Component({
  selector: 'app-change-tariff-modal',
  templateUrl: './change-tariff-modal.component.html',
  styleUrls: ['./change-tariff-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeTariffModalComponent implements OnInit {

  public tariff: Tariff;
  public header: string;
  public conflictTariffModifierList: TariffModifier[];

  constructor(public modalRef: NgbActiveModal) {
  }

  ngOnInit(): void {
    this.header = `Are you sure to set tariff "${this.tariff?.label}"?`;
  }

}
