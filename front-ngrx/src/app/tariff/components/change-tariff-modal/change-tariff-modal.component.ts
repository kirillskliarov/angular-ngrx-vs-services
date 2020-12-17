import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TariffModifier } from '../../../models/tariff-modifier';
import { BaseModalComponent } from '../../../core/base.modal.component';

@Component({
  selector: 'app-change-tariff-modal',
  templateUrl: './change-tariff-modal.component.html',
  styleUrls: ['./change-tariff-modal.component.scss']
})
export class ChangeTariffModalComponent extends BaseModalComponent implements OnInit {

  public conflictTariffModifierList: TariffModifier[];

  constructor(modalRef: NgbActiveModal) {
    super(modalRef);
  }

  ngOnInit(): void {
  }

}
