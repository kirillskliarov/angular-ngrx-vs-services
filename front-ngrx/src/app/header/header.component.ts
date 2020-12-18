import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  @Input() public userPhoneList: string[] | null = null;
  @Input() public userActivePhone: string | null = null;

  @Output() public setUserActivePhoneEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public ngOnInit(): void {
  }

  public onSelectPhone(phone: string): void {
    this.setUserActivePhoneEvent.emit(phone);
  }

}
