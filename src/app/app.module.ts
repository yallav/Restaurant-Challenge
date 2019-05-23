import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RestaurantListModule } from './restaurant-list/restaurant-list.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { RouterModule } from '@angular/router';
import { routes } from './restaurant-routing.module';
import { NewRestaurantModule } from './new-restaurant/new-restaurant.module';
import { RestaurantModule } from './restaurant/restaurant.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    HeaderModule,
    FooterModule,
    RestaurantListModule,
    NewRestaurantModule,
    RestaurantModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
