import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { LayoutComponent } from '../auth/pages/layout/layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

//Rutas hijas y nietas
const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    children: [
      {path: 'layout-page', component: LayoutComponent},
      {path: 'dashboard', component: DashboardPageComponent},
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
