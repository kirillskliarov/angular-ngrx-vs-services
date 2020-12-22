import { Injectable } from '@angular/core';
import { SubscriptionEffectsService } from './subscription-effects.service';

@Injectable()
export class SubscriptionFacadeService {

  constructor(
    private subscriptionEffectsService: SubscriptionEffectsService,
  ) {
  }

  public loadUserSubscriptionList(): void {
    this.subscriptionEffectsService.loadUserSubscriptionList();
  }

  public loadAllSubscriptionList(): void {
    this.subscriptionEffectsService.loadAllSubscriptionList();
  }

  public addUserSubscription(id: string): void {
    this.subscriptionEffectsService.addUserSubscription({ id });
  }

  public deleteUserSubscription(id: string): void {
    this.subscriptionEffectsService.deleteUserSubscription({ id });
  }
}
