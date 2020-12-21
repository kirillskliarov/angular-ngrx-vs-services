import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TariffModifier } from '../../../models/tariff-modifier';

@Component({
  selector: 'app-add-tariff-modifier-modal',
  templateUrl: './add-tariff-modifier-modal.component.html',
  styleUrls: ['./add-tariff-modifier-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTariffModifierModalComponent implements OnInit {

  public tariffModifier: TariffModifier;
  public header: string;

  constructor(public modalRef: NgbActiveModal) {
  }

  ngOnInit(): void {
    this.header = `Are you sure to add tariff modifier "${this.tariffModifier?.label}"?`;
  }

}
