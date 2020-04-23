import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewShopInfoPage } from './view-shop-info.page';

const routes: Routes = [
  {
    path: '',
    component: ViewShopInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewShopInfoPageRoutingModule {}
