import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements OnInit {

  @Input()
  public modalRef: NgbActiveModal;
  @Input()
  public header: string;

  constructor() { }

  ngOnInit(): void {
  }

  public onConfirmClick(): void {
    this.modalRef.close(true);
  }

  public onCancelClick(): void {
    this.modalRef.close();
  }
}
