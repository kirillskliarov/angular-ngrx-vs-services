import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NonUserSubscription } from '../../../models/non-user-subscription';
import { Subscription } from '../../../models/subscription';

@Component({
  selector: 'app-subscription-card',
  templateUrl: './subscription-card.component.html',
  styleUrls: ['./subscription-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscriptionCardComponent implements OnInit {

  @Input()
  public subscription: NonUserSubscription;

  @Output()
  public addEvent: EventEmitter<Subscription> = new EventEmitter<Subscription>();

  public readonly alreadyActivated = 'You already have this subscription activated';

  constructor() { }

  ngOnInit(): void {
  }

  public onAddClick(): void {
    this.addEvent.emit(this.subscription);
  }

}
