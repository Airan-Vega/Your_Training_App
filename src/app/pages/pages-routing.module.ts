import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAndMonitorGuard, MonitorGuard } from '../guards';
import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage,
    children: [
      {
        path: 'user',
        loadChildren: () =>
          import('./user/list-user/list-user.module').then(
            (m) => m.ListUserPageModule
          ),
        canActivate: [AdminAndMonitorGuard],
      },
      {
        path: 'exercise',
        loadChildren: () =>
          import('./exercise/list-exercise/list-exercise.module').then(
            (m) => m.ListExercisePageModule
          ),
        canActivate: [MonitorGuard],
      },
      {
        path: 'exercise-detail/:id',
        loadChildren: () =>
          import('./exercise/exercise-detail/exercise-detail.module').then(
            (m) => m.ExerciseDetailPageModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile/profile.module').then(
            (m) => m.ProfilePageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
