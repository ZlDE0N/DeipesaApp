import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './error404-page/error404-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderHomeComponent } from './components/controles/slider-home/slider-home.component';
import { PrimaryBlockComponent } from './components/controles/primary-block/primary-block.component';
import { ServicesCompComponent } from './components/controles/services-comp/services-comp.component';
import { PortfolioCompComponent } from './components/controles/portfolio-comp/portfolio-comp.component';
import { ContactHomeCompComponent } from './components/controles/contact-home-comp/contact-home-comp.component';
import { SliderbarComponent } from './components/sliderbar/sliderbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { MaterialesTableComponent } from './components/controles/materiales-table/materiales-table.component';
import { AngularMaterialModule } from './modules/angular-material.module';
import { MaterialEditDialogComponent } from './components/controles/materiales-table/material-edit-dialog/material-edit-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Error404PageComponent,
    FooterComponent,
    HeaderComponent,
    SliderHomeComponent,
    PrimaryBlockComponent,
    ServicesCompComponent,
    PortfolioCompComponent,
    ContactHomeCompComponent,
    SliderbarComponent,
    SidebarComponent,
    DashboardHeaderComponent,
    MaterialesTableComponent,
    MaterialEditDialogComponent,
  ],
  imports: [CommonModule, AngularMaterialModule, ReactiveFormsModule],
  exports: [
    Error404PageComponent,
    FooterComponent,
    HeaderComponent,
    SliderHomeComponent,
    PrimaryBlockComponent,
    ServicesCompComponent,
    PortfolioCompComponent,
    ContactHomeCompComponent,
    SliderbarComponent,
    SidebarComponent,
    DashboardHeaderComponent,
    MaterialesTableComponent,
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
