import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard, IsLoginGuard } from './guards';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthPageModule),
    canActivate: [IsLoginGuard],
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((m) => m.UserPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'exercise',
    loadChildren: () =>
      import('./exercise/exercise.module').then((m) => m.ExercisePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'training',
    loadChildren: () =>
      import('./training/training.module').then((m) => m.TrainingPageModule),
  },
  {
    path: '**',
    redirectTo: 'auth/login',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth/login',
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
