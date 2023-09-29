import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListTrainingPage } from './list-training.page';

const routes: Routes = [
  {
    path: '',
    component: ListTrainingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListTrainingPageRoutingModule {}
