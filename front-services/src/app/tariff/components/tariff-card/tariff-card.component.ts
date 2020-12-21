import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tariff } from '../../../models/tariff';

@Component({
  selector: 'app-tariff-card',
  templateUrl: './tariff-card.component.html',
  styleUrls: ['./tariff-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TariffCardComponent implements OnInit {

  @Input()
  public tariff: Tariff;
  @Input()
  public userTariff: Tariff;

  @Output()
  public setEvent: EventEmitter<Tariff> = new EventEmitter<Tariff>();

  public readonly alreadyActivated = 'You already have this tariff activated';

  constructor() { }

  ngOnInit(): void {
  }

  public onSetClick(): void {
    this.setEvent.emit(this.tariff);
  }

}
