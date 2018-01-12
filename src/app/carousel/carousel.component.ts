import { Globals } from './../globals';
import { CarouselService } from './../shared/services/carousel.service';
import { Component, OnInit } from '@angular/core';
import { Carousel } from './../shared/models/carousel';
import { global } from '@angular/core/src/util';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  carousel: Carousel[] = [];

  constructor(
    private carouselService: CarouselService,
    private global: Globals
  ) {
  }

  ngOnInit() {
    this.getCarousel();
    //   $(document).ready(function() {
    //     $("#myCarousel").swiperight(function() {
    //        $(this).carousel('prev');
    //      });
    //     $("#myCarousel").swipeleft(function() {
    //        $(this).carousel('next');
    //     });
    //  });
  }

  getCarousel(): void {
    this.carouselService.getCarousel()
      .subscribe(c => {
        this.carousel = c
      }
      );
  }
}
