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
import { TooltipPipe } from './pipes/tooltip.pipe';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

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
    TooltipPipe,
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
