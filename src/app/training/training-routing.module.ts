import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingPage } from './training.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingPage,
    children: [
      {
        path: 'list-training',
        loadChildren: () =>
          import('./list-training/list-training.module').then(
            (m) => m.ListTrainingPageModule
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/training/list-training',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingPageRoutingModule {}
