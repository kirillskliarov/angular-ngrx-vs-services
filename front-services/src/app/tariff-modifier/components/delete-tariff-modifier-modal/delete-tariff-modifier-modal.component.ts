import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TariffModifier } from '../../../models/tariff-modifier';

@Component({
  selector: 'app-delete-tariff-modifier-modal',
  templateUrl: './delete-tariff-modifier-modal.component.html',
  styleUrls: ['./delete-tariff-modifier-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteTariffModifierModalComponent implements OnInit {

  public tariffModifier: TariffModifier;
  public header: string;

  constructor(public modalRef: NgbActiveModal) {
  }

  ngOnInit(): void {
    this.header = `Are you sure to delete tariff modifier "${this.tariffModifier?.label}"?`;
  }

}
