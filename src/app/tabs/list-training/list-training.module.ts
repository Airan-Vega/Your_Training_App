import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListTrainingPageRoutingModule } from './list-training-routing.module';

import { ListTrainingPage } from './list-training.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListTrainingPageRoutingModule
  ],
  declarations: [ListTrainingPage]
})
export class ListTrainingPageModule {}
