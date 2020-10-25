import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public phones: string[] = [
    '+79001234567',
    '+79105551122',
  ];
  public activePhone: string = this.phones[0];

  public onSetActivePhone(phone: string): void {
    this.activePhone = phone;
  }
}
