import { Globals } from './globals';
import { HttpClient } from '@angular/common/http';
import { CarouselService } from './shared/services/carousel.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MessageService } from './shared/services/message.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { AdminCarouselComponent } from './admin/admin-carousel/admin-carousel.component';
import { SignupComponent } from './signup/signup.component';
import { SortPipe } from './filters/sort.pipe';
import { OrderByPipe } from './filters/order-by.pipe';
import { MenuItemDirective } from './directives/menu-item.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CarouselComponent,
    DashboardComponent,
    ProductComponent,
    LoginComponent,
    AdminCarouselComponent,
    SignupComponent,
    MenuItemDirective,
    SortPipe,
    OrderByPipe,
    MenuItemDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule    // LazyLoadImageModule 
  ],
  providers: [Globals, MessageService, CarouselService],
  bootstrap: [AppComponent]
})
export class AppModule { }
