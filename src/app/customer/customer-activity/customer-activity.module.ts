import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerActivityPageRoutingModule } from './customer-activity-routing.module';

import { CustomerActivityPage } from './customer-activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerActivityPageRoutingModule
  ],
  declarations: [CustomerActivityPage]
})
export class CustomerActivityPageModule {}
