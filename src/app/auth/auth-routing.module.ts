import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPage,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginPageModule),
      },
      {
        path: '**',
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginPageModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth/login',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
