import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetailerInventoryPage } from './retailer-inventory.page';

const routes: Routes = [
  {
    path: '',
    component: RetailerInventoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetailerInventoryPageRoutingModule {}
