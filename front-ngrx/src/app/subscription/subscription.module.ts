import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionComponent } from './subscription.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { subscriptionReducer } from './store/subscription.reducers';
import { SubscriptionEffects } from './store/subscription.effects';
import { SubscriptionService } from './services/subscription.service';
import { SubscriptionFacadeService } from './services/subscription-facade.service';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionComponent,
  },
];

@NgModule({
  declarations: [
    SubscriptionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('subscription', subscriptionReducer),
    EffectsModule.forFeature([
      SubscriptionEffects,
    ]),
  ],
  providers: [
    SubscriptionService,
    SubscriptionFacadeService,
  ],
  exports: [
    RouterModule,
  ],
})
export class SubscriptionModule { }
