import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseModalComponent } from '../../../core/base.modal.component';

@Component({
  selector: 'app-delete-subscription-modal',
  templateUrl: './delete-subscription-modal.component.html',
  styleUrls: ['./delete-subscription-modal.component.scss']
})
export class DeleteSubscriptionModalComponent extends BaseModalComponent implements OnInit {

  constructor(modalRef: NgbActiveModal) {
    super(modalRef);
  }

  ngOnInit(): void {
  }

}
