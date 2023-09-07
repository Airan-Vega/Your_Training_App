import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitorGuard } from 'src/app/guards';
import { ListExercisePage } from './list-exercise.page';

const routes: Routes = [
  {
    path: '',
    component: ListExercisePage,
    canActivate: [MonitorGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListExercisePageRoutingModule {}
