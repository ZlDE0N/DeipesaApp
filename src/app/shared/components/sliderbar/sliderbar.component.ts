import { Component } from '@angular/core';

@Component({
  selector: 'app-sliderbar',
  templateUrl: './sliderbar.component.html',
  styleUrls: ['./sliderbar.component.css']
})
export class SliderbarComponent {

  status = false;
  addToggle() {
    this.status = !this.status;
  }
}
