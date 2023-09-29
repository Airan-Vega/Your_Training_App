import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListExercisePageRoutingModule } from './list-exercise-routing.module';

import { ListExercisePage } from './list-exercise.page';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListExercisePageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ListExercisePage],
})
export class ListExercisePageModule {}
