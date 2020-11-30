import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output()
  public confirm: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  public cancel: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  public onConfirmClick(): void {
    this.confirm.emit();
  }

  public onCancelClick(): void {
    this.cancel.emit();
  }
}
