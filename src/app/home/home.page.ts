import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  sliderConfig = {
    initialSlide: 0,
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true
  };
  SliderConfig = {
    initialSlide: 0,
    speed: 1000,
    slidesPerView: 1.4,
    spaceBetween: 0,
    centeredSlides: true
  };
  
  constructor() {}

}
