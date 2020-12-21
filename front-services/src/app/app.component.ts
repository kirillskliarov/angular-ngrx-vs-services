import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserFacadeService } from './services/user-facade.service';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from './core/base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent extends BaseComponent implements OnInit {
  public userPhoneList: string[];
  public userActivePhone: string;

  constructor(
    private cdr: ChangeDetectorRef,
    private userFacadeService: UserFacadeService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.userFacadeService.loadUserPhoneList();

    this.userFacadeService.userPhoneList$
      .pipe(takeUntil(this.destroy$))
      .subscribe((userPhoneList: string[]) => {
        this.userPhoneList = userPhoneList;
        this.cdr.detectChanges();
      });

    this.userFacadeService.userActivePhone$
      .pipe(takeUntil(this.destroy$))
      .subscribe((userActivePhone: string) => {
        this.userActivePhone = userActivePhone;
        this.cdr.detectChanges();
      });
  }

  public onSetUserActivePhone(phone: string): void {
    this.userFacadeService.setUserActivePhone(phone);
  }
}
