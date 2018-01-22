import { RouterTestingModule } from '@angular/router/testing';
import { CarouselComponent } from './../../carousel/carousel.component';
import { CarouselService } from './../../shared/services/carousel.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../shared/services/message.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Carousel } from '../../shared/models/carousel';

@Component({
  selector: 'app-admin-carousel',
  templateUrl: './admin-carousel.component.html',
  styleUrls: ['./admin-carousel.component.scss']
})
export class AdminCarouselComponent implements OnInit {
  private carousels: Carousel[] = [];
  private selectedCarousel: Carousel = {} as Carousel;

  constructor(
    private carouselService: CarouselService,
    private messageService: MessageService,
  ) {
    this.selectedCarousel = this.setCaoursel(this.selectedCarousel);
  }

  ngOnInit() {
    this.getCarousel();
  }
  setCaoursel(carousel: any) {
    if (typeof carousel.url == 'undefined')
      carousel.url = {};
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
  delete(carousel) {
    let self = this;
    this.carouselService.deleteCarousel(carousel._id).subscribe(
      data => {
        self.carousels = self.carousels.filter(function (item) {
          return item._id !== carousel._id;
        });
      },
      error => {
        console.log(error);
      }
    )
  }
  addCarousel() {
    delete this.selectedCarousel._id;
    this.carouselService.addCarousel(this.selectedCarousel).subscribe(
      data => {
        this.carousels.unshift(data);
        this.selectedCarousel = this.setCaoursel({});
      },
      error => {
        console.log(error);
      }

    )
    this.messageService.logInfo(`Add carosel fired`);
  }
  updateCarousel() {
    let self = this;
    this.carouselService.updateCarousel(this.selectedCarousel).subscribe(
      data => {
        for (let carousel of self.carousels) {
          if (carousel._id === self.selectedCarousel._id) {
            this.updateObject(carousel, data);
          }
        }
      },
      error => {
        console.log(error);
      }

    )
  }
  updateObject(obj, data) {
    for (var property in data) {
      if (data.hasOwnProperty(property)) {
        if (typeof obj[property] !== 'undefined') {
          obj[property] = data[property];
        }
      }
    }
  }
}

