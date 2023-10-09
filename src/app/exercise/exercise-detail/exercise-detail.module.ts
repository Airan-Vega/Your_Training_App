import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';

import { ExerciseDetailPageRoutingModule } from './exercise-detail-routing.module';

import { ExerciseDetailPage } from './exercise-detail.page';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { ExerciseService } from '../services/exercise.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExerciseDetailPageRoutingModule,
    SharedComponentsModule,
  ],
  declarations: [ExerciseDetailPage],
  providers: [ScreenOrientation, ExerciseService],
})
export class ExerciseDetailPageModule {}
