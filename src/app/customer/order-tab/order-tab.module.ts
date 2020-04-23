import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderTabPageRoutingModule } from './order-tab-routing.module';

import { OrderTabPage } from './order-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderTabPageRoutingModule
  ],
  declarations: [OrderTabPage]
})
export class OrderTabPageModule {}
