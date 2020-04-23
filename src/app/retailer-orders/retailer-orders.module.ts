import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetailerOrdersPageRoutingModule } from './retailer-orders-routing.module';

import { RetailerOrdersPage } from './retailer-orders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetailerOrdersPageRoutingModule
  ],
  declarations: [RetailerOrdersPage]
})
export class RetailerOrdersPageModule {}
