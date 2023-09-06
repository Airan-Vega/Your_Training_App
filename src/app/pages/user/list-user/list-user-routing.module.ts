import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListUserPage } from './list-user.page';
import { AdminAndMonitorGuard } from 'src/app/guards/admin-and-monitor.guard';

const routes: Routes = [
  {
    path: '',
    component: ListUserPage,
    canActivate: [AdminAndMonitorGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListUserPageRoutingModule {}
