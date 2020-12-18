import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from '../../../models/subscription';

@Component({
  selector: 'app-user-subscription-card',
  templateUrl: './user-subscription-card.component.html',
  styleUrls: ['./user-subscription-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSubscriptionCardComponent implements OnInit {

  @Input()
  public userSubscription: Subscription;

  @Output()
  public deleteEvent: EventEmitter<Subscription> = new EventEmitter<Subscription>();

  constructor() { }

  ngOnInit(): void {
  }

  public onDeleteClick(): void {
    this.deleteEvent.emit(this.userSubscription);
  }
}
