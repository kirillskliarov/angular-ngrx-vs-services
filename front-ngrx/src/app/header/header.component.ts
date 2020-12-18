import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NAV_LINKS } from '../core/nav-links';
import { NavLink } from '../models/nav-link';

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
  public readonly navLinks: ReadonlyArray<NavLink> = NAV_LINKS;

  constructor() { }

  public ngOnInit(): void {
  }

  public onSelectPhone(phone: string): void {
    this.setUserActivePhoneEvent.emit(phone);
  }

}
