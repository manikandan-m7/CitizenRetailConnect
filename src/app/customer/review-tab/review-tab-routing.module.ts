import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewTabPage } from './review-tab.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: ReviewTabPage,
    children: [
      {
        path: 'reviewOrder',
        children: [
          {
            path: '',
            loadChildren: () => import('./review-order/review-order.module').then( m => m.ReviewOrderPageModule)
          },
          {
            path: ':shopName',
            loadChildren: () => import('./review-order/review-order.module').then( m => m.ReviewOrderPageModule)
          }
        ]
      },
      {
        path: 'viewShopInfo',
        children: [
        {
            path: '',
             loadChildren: () => import('./view-shop-info/view-shop-info.module').then( m => m.ViewShopInfoPageModule)
          }, 
          {
            path: ':shopName',
            loadChildren: () => import('./view-shop-info/view-shop-info.module').then( m => m.ViewShopInfoPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/review-tab/tabs/reviewOrder',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/review-tab/tabs/reviewOrder',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewTabPageRoutingModule {}
