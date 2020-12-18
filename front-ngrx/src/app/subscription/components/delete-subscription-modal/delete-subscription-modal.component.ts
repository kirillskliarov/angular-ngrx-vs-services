import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-subscription-modal',
  templateUrl: './delete-subscription-modal.component.html',
  styleUrls: ['./delete-subscription-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteSubscriptionModalComponent implements OnInit {

  constructor(public modalRef: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

}
