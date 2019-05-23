import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RestaurantComponent],
  exports: [RestaurantComponent]
})
export class RestaurantModule { }
