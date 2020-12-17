import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-tariff-modifier-modal',
  templateUrl: './delete-tariff-modifier-modal.component.html',
  styleUrls: ['./delete-tariff-modifier-modal.component.scss']
})
export class DeleteTariffModifierModalComponent implements OnInit {

  constructor(public modalRef: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

}
