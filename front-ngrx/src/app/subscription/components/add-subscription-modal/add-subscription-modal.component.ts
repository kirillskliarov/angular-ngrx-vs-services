import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseModalComponent } from '../../../core/base.modal.component';

@Component({
  selector: 'app-add-subscription-modal',
  templateUrl: './add-subscription-modal.component.html',
  styleUrls: ['./add-subscription-modal.component.scss']
})
export class AddSubscriptionModalComponent extends BaseModalComponent implements OnInit {

  constructor(modalRef: NgbActiveModal) {
    super(modalRef);
  }

  ngOnInit(): void {
  }

}
