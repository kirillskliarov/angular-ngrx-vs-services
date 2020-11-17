import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TariffModifierComponent } from './tariff-modifier.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { tariffModifierReducer } from './store/tariff-modifier.reducers';
import { TariffModifierEffects } from './store/tariff-modifier.effects';
import { TariffModifierService } from './services/tariff-modifier.service';
import { TariffModifierFacadeService } from './services/tariff-modifier-facade.service';

const routes: Routes = [
  {
    path: '',
    component: TariffModifierComponent,
  },
];

@NgModule({
  declarations: [
    TariffModifierComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('tariff-modifier', tariffModifierReducer),
    EffectsModule.forFeature([
      TariffModifierEffects,
    ]),
  ],
  providers: [
    TariffModifierService,
    TariffModifierFacadeService,
  ],
  exports: [
    RouterModule,
  ],
})
export class TariffModifierModule { }
