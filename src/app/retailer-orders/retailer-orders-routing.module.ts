import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetailerOrdersPage } from './retailer-orders.page';

const routes: Routes = [
  {
    path: '',
    component: RetailerOrdersPage
  },
  {
    path: 'order-details',
    loadChildren: () => import('./order-details/order-details.module').then( m => m.OrderDetailsPageModule)
  },
  {
    path: 'deny-order',
    loadChildren: () => import('./deny-order/deny-order.module').then( m => m.DenyOrderPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetailerOrdersPageRoutingModule {}
