import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styles: []
})
export class DashboardPageComponent {


  status = false;
  addToggle() {
    this.status = !this.status;
  }
}
