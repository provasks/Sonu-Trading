import { Globals } from './globals';
import { HttpClient } from '@angular/common/http';
import { CarouselService } from './carousel/carousel.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MessageService } from './services/message.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CarouselComponent,
    DashboardComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // LazyLoadImageModule 
  ],
  providers: [Globals, MessageService, CarouselService],
  bootstrap: [AppComponent]
})
export class AppModule { }
