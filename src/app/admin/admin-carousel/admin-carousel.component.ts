import { CarouselComponent } from './../../carousel/carousel.component';
import { CarouselService } from './../../shared/services/carousel.service';
import { Component, OnInit } from '@angular/core';
import { Carousel } from './../../shared/models/carousel';

@Component({
  selector: 'app-admin-carousel',
  templateUrl: './admin-carousel.component.html',
  styleUrls: ['./admin-carousel.component.scss']
})
export class AdminCarouselComponent implements OnInit {
  private carousel: Carousel[] = [];
  constructor(
    private carouselService: CarouselService
  ) { }

  ngOnInit() {
    this.getCarousel();
  }
  getCarousel(): void {
    this.carouselService.getCarousel()
      .subscribe(c =>
        this.carousel = c
      );
  }
}
