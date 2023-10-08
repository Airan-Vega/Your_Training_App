import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExercisePage } from './exercise.page';
import { MonitorGuard } from '../guards';

const routes: Routes = [
  {
    path: '',
    component: ExercisePage,
    children: [
      {
        path: 'list-exercise',
        loadChildren: () =>
          import('./list-exercise/list-exercise.module').then(
            (m) => m.ListExercisePageModule
          ),
        canActivate: [MonitorGuard],
      },
      {
        path: 'exercise-detail/:id',
        loadChildren: () =>
          import('./exercise-detail/exercise-detail.module').then(
            (m) => m.ExerciseDetailPageModule
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/exercise/list-exercise',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExercisePageRoutingModule {}
