import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROOT, SUBSCRIPTIONS, TARIFF_MODIFIERS } from './core/links';

const routes: Routes = [
  {
    path: ROOT,
    loadChildren: () => import('./tariff/tariff.module').then(m => m.TariffModule),
  },
  {
    path: TARIFF_MODIFIERS,
    loadChildren: () => import('./tariff-modifier/tariff-modifier.module').then(m => m.TariffModifierModule),
  },
  {
    path: SUBSCRIPTIONS,
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
