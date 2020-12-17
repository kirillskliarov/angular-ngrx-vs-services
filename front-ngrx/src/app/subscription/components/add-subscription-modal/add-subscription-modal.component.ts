import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-subscription-modal',
  templateUrl: './add-subscription-modal.component.html',
  styleUrls: ['./add-subscription-modal.component.scss']
})
export class AddSubscriptionModalComponent implements OnInit {

  constructor(public modalRef: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

}
