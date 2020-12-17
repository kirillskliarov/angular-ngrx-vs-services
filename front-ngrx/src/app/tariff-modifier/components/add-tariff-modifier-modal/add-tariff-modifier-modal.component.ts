import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-tariff-modifier-modal',
  templateUrl: './add-tariff-modifier-modal.component.html',
  styleUrls: ['./add-tariff-modifier-modal.component.scss']
})
export class AddTariffModifierModalComponent implements OnInit {

  constructor(public modalRef: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

}
