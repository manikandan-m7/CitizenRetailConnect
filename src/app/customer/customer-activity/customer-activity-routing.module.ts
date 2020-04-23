import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerActivityPage } from './customer-activity.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: CustomerActivityPage,
    children: [
      {
        path: 'orderHistory',
        children: [
          {
            path: '',
            loadChildren: () => import('./order-history/order-history.module').then(m => m.OrderHistoryPageModule)
          }/* ,
          {
            path: ':placeId',
            loadChildren: () => import('./discover/place-detail/place-detail.module').then(m => m.PlaceDetailPageModule)
          } */
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('./customer-profile/customer-profile.module').then(m => m.CustomerProfilePageModule)
          }/* ,
          {
            path: 'new',
            loadChildren: () => import('./offers/new-offer/new-offer.module').then(m => m.NewOfferPageModule)
          },
          {
            path: 'edit/:placeId',
            loadChildren: () => import('./offers/edit-offer/edit-offer.module').then(m => m.EditOfferPageModule)
          },
          {
            path: ':placeId',
            loadChildren: () => import('./offers/offer-bookings/offer-bookings.module').then(m => m.OfferBookingsPageModule)
          } */
        ]
      },
      {
        path: '',
        redirectTo: '/customer-activity/tabs/orderHistory',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/customer-activity/tabs/orderHistory',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerActivityPageRoutingModule {}
