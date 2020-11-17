import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { TariffModifier } from '../models/tariff-modifier';
import { Subject } from 'rxjs';
import { Subscription } from '../models/subscription';
import { UserFacadeService } from '../services/user-facade.service';
import { SubscriptionFacadeService } from './services/subscription-facade.service';
import { takeUntil } from 'rxjs/operators';
import { activePhone } from '../store/application.selectors';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit, OnDestroy {

  public userSubscriptionList: Subscription[] | null = null;
  public allSubscriptionList: Subscription[] | null = null;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private cdr: ChangeDetectorRef,
    private userFacadeService: UserFacadeService,
    private subscriptionFacadeService: SubscriptionFacadeService,
  ) {
  }

  ngOnInit(): void {
    this.subscriptionFacadeService.loadUserSubscriptionList();
    this.subscriptionFacadeService.loadAllSubscriptionList();

    this.userFacadeService.activePhone$
      .pipe(
        takeUntil(this.destroy$),
      ).subscribe((activePhone: string) => {
        this.subscriptionFacadeService.loadUserSubscriptionList();
    });

    this.subscriptionFacadeService.userSubscriptionListValue$
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe((userSubscriptionList: Subscription[]) => {
        this.userSubscriptionList = userSubscriptionList;
        this.cdr.detectChanges();
      });

    this.subscriptionFacadeService.allSubscriptionListValue$
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe((allSubscriptionList: Subscription[]) => {
        this.allSubscriptionList = allSubscriptionList;
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
