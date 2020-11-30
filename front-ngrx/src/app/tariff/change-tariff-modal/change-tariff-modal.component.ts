import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TariffModifier } from '../../models/tariff-modifier';

@Component({
  selector: 'app-change-tariff-modal',
  templateUrl: './change-tariff-modal.component.html',
  styleUrls: ['./change-tariff-modal.component.scss']
})
export class ChangeTariffModalComponent implements OnInit {

  public conflictTariffModifierList: TariffModifier[];

  constructor(private modalRef: NgbActiveModal) { }

  ngOnInit(): void {
  }

  public onConfirm(): void {
    this.modalRef.close(true);
  }

  public onCancel(): void {
    this.modalRef.close();
  }

}
