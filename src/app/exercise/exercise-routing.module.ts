import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExercisePage } from './exercise.page';

const routes: Routes = [
  {
    path: '',
    component: ExercisePage,
    children: [
      {
        path: 'exercise-detail/:id',
        loadChildren: () =>
          import('./exercise-detail/exercise-detail.module').then(
            (m) => m.ExerciseDetailPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExercisePageRoutingModule {}
