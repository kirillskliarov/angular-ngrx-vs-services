import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from '../../../models/subscription';

@Component({
  selector: 'app-add-subscription-modal',
  templateUrl: './add-subscription-modal.component.html',
  styleUrls: ['./add-subscription-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddSubscriptionModalComponent implements OnInit {

  public subscription: Subscription;
  public header: string;

  constructor(public modalRef: NgbActiveModal) {
  }

  ngOnInit(): void {
    this.header = `Are you sure to add subscription "${this.subscription?.label}"?`;
  }

}
