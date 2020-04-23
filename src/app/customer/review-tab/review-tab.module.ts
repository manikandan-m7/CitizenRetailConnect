import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewTabPageRoutingModule } from './review-tab-routing.module';

import { ReviewTabPage } from './review-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewTabPageRoutingModule
  ],
  declarations: [ReviewTabPage]
})
export class ReviewTabPageModule {}
