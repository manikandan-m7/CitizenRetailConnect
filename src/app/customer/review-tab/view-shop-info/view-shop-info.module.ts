import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewShopInfoPageRoutingModule } from './view-shop-info-routing.module';

import { ViewShopInfoPage } from './view-shop-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewShopInfoPageRoutingModule
  ],
  declarations: [ViewShopInfoPage]
})
export class ViewShopInfoPageModule {}
