import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../guards';
import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'user',
        loadChildren: () =>
          import('./user/list-user/list-user.module').then(
            (m) => m.ListUserPageModule
          ),
      },
      {
        path: 'exercise',
        loadChildren: () =>
          import('./exercise/list-exercise/list-exercise.module').then(
            (m) => m.ListExercisePageModule
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
  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
