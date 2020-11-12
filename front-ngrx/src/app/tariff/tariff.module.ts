import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TariffComponent } from './tariff.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { tariffReducer } from './store/tariff.reducers';
import { TariffEffects } from './store/tariff.effects';

const routes: Routes = [
  {
    path: '',
    component: TariffComponent,
  },
];

@NgModule({
  declarations: [
    TariffComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('tariff', {
      tariff: tariffReducer,
    }),
    EffectsModule.forFeature([
      TariffEffects,
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class TariffModule {
}
