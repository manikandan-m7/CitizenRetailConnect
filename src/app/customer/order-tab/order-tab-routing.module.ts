import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderTabPage } from './order-tab.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: OrderTabPage,
    children: [
      {
        path: 'addToCart',
        children: [
          {
            path: '',
            loadChildren: () => import('./add-to-cart/add-to-cart.module').then(m => m.AddToCartPageModule)
          },
          {
            path: ':shopName',
            loadChildren: () => import('./add-to-cart/add-to-cart.module').then(m => m.AddToCartPageModule)
          }
        ]
      },
      {
        path: 'shopInfo',
        children: [
        /*   {
            path: '',
            loadChildren: () => import('./shop-info/shop-info.module').then(m => m.ShopInfoPageModule)
          }, */
          {
            path: ':shopName',
            loadChildren: () => import('./shop-info/shop-info.module').then(m => m.ShopInfoPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/order-tab/tabs/addToCart',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/order-tab/tabs/addToCart',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderTabPageRoutingModule {}
