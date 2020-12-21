import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Tariff } from '../../../models/tariff';

@Component({
  selector: 'app-user-tariff-card',
  templateUrl: './user-tariff-card.component.html',
  styleUrls: ['./user-tariff-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserTariffCardComponent implements OnInit {

  @Input()
  public tariff: Tariff;

  constructor() { }

  ngOnInit(): void {
  }

}
