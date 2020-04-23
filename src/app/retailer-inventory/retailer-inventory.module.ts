import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetailerInventoryPageRoutingModule } from './retailer-inventory-routing.module';

import { RetailerInventoryPage } from './retailer-inventory.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RetailerInventoryPageRoutingModule
  ],
  declarations: [RetailerInventoryPage]
})
export class RetailerInventoryPageModule {}
