import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetailerRegistrationPage } from './retailer-registration.page';

const routes: Routes = [
  {
    path: '',
    component: RetailerRegistrationPage
  },
  {
    path: 'shop-details',
    loadChildren: () => import('./shop-details/shop-details.module').then( m => m.ShopDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetailerRegistrationPageRoutingModule {}
