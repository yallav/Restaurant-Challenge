import { Component, OnInit, Input } from '@angular/core';
import { RestaurantFormModel } from '../models/restaurant-form.model';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant: RestaurantFormModel;
  constructor() { }

  ngOnInit() {

  }

}
