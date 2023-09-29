import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  AdminAndMonitorGuard,
  MonitorAndUserGuard,
  MonitorGuard,
} from '../guards';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
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
        path: 'list-exercise',
        loadChildren: () =>
          import('./list-exercise/list-exercise.module').then(
            (m) => m.ListExercisePageModule
          ),
        canActivate: [MonitorGuard],
      },
      {
        path: 'list-training',
        loadChildren: () =>
          import('./list-training/list-training.module').then(
            (m) => m.ListTrainingPageModule
          ),
        canActivate: [MonitorAndUserGuard],
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfilePageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
