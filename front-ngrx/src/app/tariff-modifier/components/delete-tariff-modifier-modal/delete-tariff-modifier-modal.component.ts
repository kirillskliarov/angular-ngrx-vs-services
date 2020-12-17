import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseModalComponent } from '../../../core/base.modal.component';

@Component({
  selector: 'app-delete-tariff-modifier-modal',
  templateUrl: './delete-tariff-modifier-modal.component.html',
  styleUrls: ['./delete-tariff-modifier-modal.component.scss']
})
export class DeleteTariffModifierModalComponent extends BaseModalComponent implements OnInit {

  constructor(modalRef: NgbActiveModal) {
    super(modalRef);
  }

  ngOnInit(): void {
  }

}
