import { RouterTestingModule } from '@angular/router/testing';
import { CarouselComponent } from './../../carousel/carousel.component';
import { CarouselService } from './../../shared/services/carousel.service';
import { Component, OnInit } from '@angular/core';
import { Carousel } from './../../shared/models/carousel';
import { MessageService } from '../../shared/services/message.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-carousel',
  templateUrl: './admin-carousel.component.html',
  styleUrls: ['./admin-carousel.component.scss']
})
export class AdminCarouselComponent implements OnInit {
  private carousels: Carousel[] = [];
  private keys: any;
  private selectedCarousel: Carousel;

  constructor(
    private carouselService: CarouselService,
    private messageService: MessageService,
  ) {
    this.selectedCarousel = this.setCaoursel({url:{}});
  }

  ngOnInit() {
    this.getCarousel();
  }
  setCaoursel(carousel) {
    return {
      title: carousel.title || "",
      _id: carousel._id || "",
      subTitle: carousel.subTitle || "",
      url: {
        Desktop: carousel.url.Desktop || "",
        Tablet: carousel.url.Tablet || "",
        Mobile: carousel.url.Mobile || ""
      },
      alt: carousel.alt || "",
    }
  }
  getCarousel(): void {
    this.carouselService.getCarousel()
      .subscribe(resp =>
        this.carousels = resp
      );
  }
  edit(carousel) {
    this.selectedCarousel = this.setCaoursel(carousel);
  }
  delete(carosel) {
    this.messageService.logInfo(`Delete carosel ${carosel._id}`);
  }
  addCarousel() {
    this.messageService.logInfo(`Add carosel fired`);
  }
  updateCarousel() {
    this.messageService.logInfo(`update carosel fired`);
    console.log(this.selectedCarousel)
  }
}
