import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { ContentDashboardPageComponent } from './pages/content-dashboard-page/content-dashboard-page.component';


@NgModule({
  declarations: [
    DashboardPageComponent,
    LayoutPageComponent,
    HomePageComponent,
    ContentDashboardPageComponent,
   
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ]
})
export class DashboardModule { }
