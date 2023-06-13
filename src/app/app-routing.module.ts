import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/error404-page/error404-page.component';

//Rutas padres
const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then (m => m.AuthModule ), 
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./home/dashboard.module').then (m => m.DashboardModule ), 
  },
  {
    path: '404',
    component: Error404PageComponent,
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
