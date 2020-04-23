import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'customer-home',
    loadChildren: () => import('./customer/customer-home/customer-home.module').then(m => m.CustomerHomePageModule)
  },
  {
    path: 'customer-activity',
    loadChildren: () => import('./customer/customer-activity/customer-activity.module').then(m => m.CustomerActivityPageModule)
  },
  {
    path: 'order-details',
    children: [
      {
        path: ':orderId',
        loadChildren: () => import('./customer/customer-activity/order-history/order-details/order-details.module').then(m => m.OrderDetailsPageModule)
      }
    ]
  },
  {
    path: 'retailer-registration',
    children: [
      {
        path: '',
        loadChildren: () => import('./retailer-registration/retailer-registration.module').then( m => m.RetailerRegistrationPageModule)
      },
      {
        path: 'shop-details',
        loadChildren: () => import('./retailer-registration/shop-details/shop-details.module').then( m => m.ShopDetailsPageModule)
      }
    ]
  },
  {
    path: 'order-tab',
    children: [
      {
        path: '',
        loadChildren: () => import('./customer/order-tab/order-tab.module').then( m => m.OrderTabPageModule)
      },
      {
        path: ':shopName',
        loadChildren: () => import('./customer/order-tab/order-tab.module').then( m => m.OrderTabPageModule)
      }
    ]
  },
  {
    path: 'review-tab',
    children: [
      {
        path: '',
        loadChildren: () => import('./customer/review-tab/review-tab.module').then( m => m.ReviewTabPageModule)
      },
      {
        path: ':shopName',
        loadChildren: () => import('./customer/review-tab/review-tab.module').then( m => m.ReviewTabPageModule)
      }
    ]
  },
  {
    path: 'order-placed',
    loadChildren: () => import('./customer/order-placed/order-placed.module').then( m => m.OrderPlacedPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./customer/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./customer/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./customer/registration/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'confirm-registration',
    loadChildren: () => import('./customer/registration/confirm-registration/confirm-registration.module').then( m => m.ConfirmRegistrationPageModule)
  },
  {
    path: 'retailer-orders',
    children: [
      {
        path: '',
        loadChildren: () => import('./retailer-orders/retailer-orders.module').then( m => m.RetailerOrdersPageModule)
      },
      {
        path: 'order-details/:id',
        loadChildren: () => import('./retailer-orders/order-details/order-details.module').then( m => m.OrderDetailsPageModule)
      },
      {
        path: 'deny-order/:id',
        loadChildren: () => import('./retailer-orders/deny-order/deny-order.module').then( m => m.DenyOrderPageModule)
      }
    ]
  },
  {
    path: 'retailer-inventory',
    loadChildren: () => import('./retailer-inventory/retailer-inventory.module').then( m => m.RetailerInventoryPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
