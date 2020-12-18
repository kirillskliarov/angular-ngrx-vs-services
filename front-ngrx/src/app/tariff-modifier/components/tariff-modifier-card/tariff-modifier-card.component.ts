import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TariffModifier } from '../../../models/tariff-modifier';
import { NonUserTariffModifier } from '../../../models/non-user-tariff-modifier';

@Component({
  selector: 'app-tariff-modifier-card',
  templateUrl: './tariff-modifier-card.component.html',
  styleUrls: ['./tariff-modifier-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TariffModifierCardComponent implements OnInit {

  @Input()
  public tariffModifier: NonUserTariffModifier;

  @Output()
  public addEvent: EventEmitter<TariffModifier> = new EventEmitter<TariffModifier>();

  constructor() { }

  ngOnInit(): void {
  }

  public onAddClick(): void {
    this.addEvent.emit(this.tariffModifier);
  }

}
