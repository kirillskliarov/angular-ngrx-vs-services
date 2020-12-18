import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Billable } from '../../models/billable';

@Component({
  selector: 'app-billable-card',
  templateUrl: './billable-card.component.html',
  styleUrls: ['./billable-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BillableCardComponent implements OnInit {

  @Input()
  public billable: Billable;

  constructor() { }

  ngOnInit(): void {
  }

}
