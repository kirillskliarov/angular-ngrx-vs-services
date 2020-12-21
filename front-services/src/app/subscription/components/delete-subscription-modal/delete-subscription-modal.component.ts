import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from '../../../models/subscription';

@Component({
  selector: 'app-delete-subscription-modal',
  templateUrl: './delete-subscription-modal.component.html',
  styleUrls: ['./delete-subscription-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteSubscriptionModalComponent implements OnInit {

  public subscription: Subscription;
  public header: string;

  constructor(public modalRef: NgbActiveModal) {
  }

  ngOnInit(): void {
    this.header = `Are you sure to delete subscription "${this.subscription?.label}"?`;
  }

}
