import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TariffModifier } from '../../../models/tariff-modifier';

@Component({
  selector: 'app-change-tariff-modal',
  templateUrl: './change-tariff-modal.component.html',
  styleUrls: ['./change-tariff-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeTariffModalComponent implements OnInit {

  public conflictTariffModifierList: TariffModifier[];

  constructor(public modalRef: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

}
