import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TariffComponent } from './tariff.component';
import { TariffService } from './services/tariff.service';
import { TariffFacadeService } from './services/tariff-facade.service';
import { ChangeTariffModalComponent } from './components/change-tariff-modal/change-tariff-modal.component';
import { ModalModule } from '../shared/modal/modal.module';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { UserTariffCardComponent } from './components/user-tariff-card/user-tariff-card.component';
import { TariffCardComponent } from './components/tariff-card/tariff-card.component';
import { BillableCardModule } from '../shared/billable-card/billable-card.module';
import { TariffStoreService } from './services/tariff-store.service';
import { TariffEffectsService } from './services/tariff-effects.service';

const routes: Routes = [
  {
    path: '',
    component: TariffComponent,
  },
];

@NgModule({
  declarations: [
    TariffComponent,
    ChangeTariffModalComponent,
    UserTariffCardComponent,
    TariffCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ModalModule,
    NgbTooltipModule,
    BillableCardModule,
  ],
  providers: [
    TariffFacadeService,
    TariffService,
    TariffStoreService,
    TariffEffectsService,
  ],
  exports: [
    RouterModule,
  ],
})
export class TariffModule {
}
