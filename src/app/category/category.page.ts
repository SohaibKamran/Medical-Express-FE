import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  constructor() { }

  sliderConfig = {
    initialSlide: 0,
    speed: 1000,
    slidesPerView: 2.4,
    direction: 'vertical'
  };
  
  ngOnInit() {
  }

}
