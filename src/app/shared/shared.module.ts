import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './error404-page/error404-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    Error404PageComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule

  ],
  exports:[
    Error404PageComponent,
    FooterComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }
