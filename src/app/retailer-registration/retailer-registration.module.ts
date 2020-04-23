import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetailerRegistrationPageRoutingModule } from './retailer-registration-routing.module';

import { RetailerRegistrationPage } from './retailer-registration.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RetailerRegistrationPageRoutingModule
  ],
  declarations: [RetailerRegistrationPage]
})
export class RetailerRegistrationPageModule {}
