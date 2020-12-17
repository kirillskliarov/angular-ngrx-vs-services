import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseModalComponent } from '../../../core/base.modal.component';

@Component({
  selector: 'app-add-tariff-modifier-modal',
  templateUrl: './add-tariff-modifier-modal.component.html',
  styleUrls: ['./add-tariff-modifier-modal.component.scss']
})
export class AddTariffModifierModalComponent extends BaseModalComponent implements OnInit {

  constructor(modalRef: NgbActiveModal) {
    super(modalRef);
  }

  ngOnInit(): void {
  }

}
