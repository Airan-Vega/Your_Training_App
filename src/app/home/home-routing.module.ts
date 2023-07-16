import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'user',
        loadChildren: () =>
          import('./user/pages/list-user/list-user.module').then(
            (m) => m.ListUserPageModule
          ),
      },
      {
        path: 'exercise',
        loadChildren: () =>
          import('./exercise/pages/list-exercise/list-exercise.module').then(
            (m) => m.ListExercisePageModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/pages/profile/profile.module').then(
            (m) => m.ProfilePageModule
          ),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home/user',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
