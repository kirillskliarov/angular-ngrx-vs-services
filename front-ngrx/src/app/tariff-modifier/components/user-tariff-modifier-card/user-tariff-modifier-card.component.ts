import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TariffModifier } from '../../../models/tariff-modifier';

@Component({
  selector: 'app-user-tariff-modifier-card',
  templateUrl: './user-tariff-modifier-card.component.html',
  styleUrls: ['./user-tariff-modifier-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserTariffModifierCardComponent implements OnInit {

  @Input()
  public userTariffModifier: TariffModifier;

  @Output()
  public deleteEvent: EventEmitter<TariffModifier> = new EventEmitter<TariffModifier>();

  constructor() { }

  ngOnInit(): void {
  }

  public onDeleteClick(): void {
    this.deleteEvent.emit(this.userTariffModifier);
  }

}
