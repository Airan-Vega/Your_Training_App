import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPage } from './user.page';
import { AdminAndMonitorGuard } from '../guards';

const routes: Routes = [
  {
    path: '',
    component: UserPage,
    children: [
      {
        path: 'list-user',
        loadChildren: () =>
          import('./list-user/list-user.module').then(
            (m) => m.ListUserPageModule
          ),
        canActivate: [AdminAndMonitorGuard],
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfilePageModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/user/list-user',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
