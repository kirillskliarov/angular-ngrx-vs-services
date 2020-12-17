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
  public phonesState: string[];
  public activePhone: string;

  constructor(
    private cdr: ChangeDetectorRef,
    private userFacadeService: UserFacadeService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.userFacadeService.loadUserPhoneList();

    this.userFacadeService.userPhoneList$
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe((phonesState: string[]) => {
        this.phonesState = phonesState;
        this.cdr.detectChanges();
      });

    this.userFacadeService.userActivePhone$
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe((activePhone: string) => {
        this.activePhone = activePhone;
        this.cdr.detectChanges();
      });
  }

  public onSetActivePhone(phone: string): void {
    this.userFacadeService.setUserActivePhone(phone);
  }
}
