import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewRestaurantComponent } from './new-restaurant.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  declarations: [NewRestaurantComponent],
  exports: [NewRestaurantComponent]
})
export class NewRestaurantModule { }
