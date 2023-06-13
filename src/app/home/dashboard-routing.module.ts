import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DashboardLayoutComponent } from './pages/dashboard-layout/dashboard-layout.component';

//Rutas hijas y nietas
const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {path: '', redirectTo: 'main-page', pathMatch: 'full'},
      {path: 'main-page', component: DashboardPageComponent},
      // {path: 'layout-page', component: LayoutPageComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
