import { Globals } from './globals';
import { CarouselService } from './shared/services/carousel.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UtilityService } from './shared/services/utility.service';

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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ReactiveFormsModule,
    FormsModule    // LazyLoadImageModule 
  ],
  providers: [
    Globals, 
    MessageService, 
    CarouselService, 
    UtilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}