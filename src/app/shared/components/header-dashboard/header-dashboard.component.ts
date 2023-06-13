import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'


@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.css']
})
export class HeaderDashboardComponent {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  sidebarToggle() {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }
}
