import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tariff/tariff.module').then(m => m.TariffModule),
  },
  {
    path: 'tariff-modifiers',
    loadChildren: () => import('./tariff-modifier/tariff-modifier.module').then(m => m.TariffModifierModule),
  },
  {
    path: 'subscriptions',
    loadChildren: () => import('./subscription/subscription.module').then(m => m.SubscriptionModule),
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
