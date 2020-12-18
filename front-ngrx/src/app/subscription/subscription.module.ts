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
import { AddSubscriptionModalComponent } from './components/add-subscription-modal/add-subscription-modal.component';
import { DeleteSubscriptionModalComponent } from './components/delete-subscription-modal/delete-subscription-modal.component';
import { ModalModule } from '../shared/modal/modal.module';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { UserSubscriptionCardComponent } from './components/user-subscription-card/user-subscription-card.component';
import { SubscriptionCardComponent } from './components/subscription-card/subscription-card.component';
import { BillableCardModule } from '../shared/billable-card/billable-card.module';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionComponent,
  },
];

@NgModule({
  declarations: [
    SubscriptionComponent,
    AddSubscriptionModalComponent,
    DeleteSubscriptionModalComponent,
    UserSubscriptionCardComponent,
    SubscriptionCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('subscription', subscriptionReducer),
    EffectsModule.forFeature([
      SubscriptionEffects,
    ]),
    ModalModule,
    NgbTooltipModule,
    BillableCardModule,
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
