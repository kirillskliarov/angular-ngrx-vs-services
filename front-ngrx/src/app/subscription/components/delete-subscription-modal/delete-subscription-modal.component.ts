import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-subscription-modal',
  templateUrl: './delete-subscription-modal.component.html',
  styleUrls: ['./delete-subscription-modal.component.scss']
})
export class DeleteSubscriptionModalComponent implements OnInit {

  constructor(private modalRef: NgbActiveModal) { }

  ngOnInit(): void {
  }

  public onConfirm(): void {
    this.modalRef.close(true);
  }

  public onCancel(): void {
    this.modalRef.close();
  }

}
