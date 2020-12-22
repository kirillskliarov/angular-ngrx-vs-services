import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TariffModifierComponent } from './tariff-modifier.component';
import { TariffModifierService } from './services/tariff-modifier.service';
import { TariffModifierFacadeService } from './services/tariff-modifier-facade.service';
import { DeleteTariffModifierModalComponent } from './components/delete-tariff-modifier-modal/delete-tariff-modifier-modal.component';
import { ModalModule } from '../shared/modal/modal.module';
import { TooltipPipe } from './pipes/tooltip.pipe';
import { AddTariffModifierModalComponent } from './components/add-tariff-modifier-modal/add-tariff-modifier-modal.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TariffModifierCardComponent } from './components/tariff-modifier-card/tariff-modifier-card.component';
import { UserTariffModifierCardComponent } from './components/user-tariff-modifier-card/user-tariff-modifier-card.component';
import { BillableCardModule } from '../shared/billable-card/billable-card.module';
import { TariffModifierStoreService } from './services/tariff-modifier-store.service';
import { TariffModifierEffectsService } from './services/tariff-modifier-effects.service';

const routes: Routes = [
  {
    path: '',
    component: TariffModifierComponent,
  },
];

@NgModule({
  declarations: [
    TariffModifierComponent,
    DeleteTariffModifierModalComponent,
    TooltipPipe,
    AddTariffModifierModalComponent,
    TariffModifierCardComponent,
    UserTariffModifierCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ModalModule,
    NgbTooltipModule,
    BillableCardModule,
  ],
  providers: [
    TariffModifierService,
    TariffModifierFacadeService,
    TariffModifierStoreService,
    TariffModifierEffectsService,
  ],
  exports: [
    RouterModule,
  ],
})
export class TariffModifierModule { }
