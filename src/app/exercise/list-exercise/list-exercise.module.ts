import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListExercisePageRoutingModule } from './list-exercise-routing.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

import { ListExercisePage } from './list-exercise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListExercisePageRoutingModule,
    SharedComponentsModule,
  ],
  declarations: [ListExercisePage],
})
export class ListExercisePageModule {}
