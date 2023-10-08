import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingPageRoutingModule } from './training-routing.module';
import { SharedComponentsModule } from '../shared/components/shared-components.module';

import { TrainingPage } from './training.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingPageRoutingModule,
    SharedComponentsModule,
  ],
  declarations: [TrainingPage],
})
export class TrainingPageModule {}
