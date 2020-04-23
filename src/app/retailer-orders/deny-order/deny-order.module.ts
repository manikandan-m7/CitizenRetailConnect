import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DenyOrderPageRoutingModule } from './deny-order-routing.module';

import { DenyOrderPage } from './deny-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DenyOrderPageRoutingModule
  ],
  declarations: [DenyOrderPage]
})
export class DenyOrderPageModule {}
