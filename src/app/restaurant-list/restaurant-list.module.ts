import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RestaurantListComponent } from './restaurant-list.component';
import { RestaurantModule } from '../restaurant/restaurant.module';
import { NewRestaurantModule } from '../new-restaurant/new-restaurant.module';
import { NewRestaurantComponent } from '../new-restaurant/new-restaurant.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RestaurantModule,
    NewRestaurantModule,
    NgbModule
  ],
  declarations: [RestaurantListComponent],
  exports: [RestaurantListComponent,
            NewRestaurantComponent]
})
export class RestaurantListModule { }
