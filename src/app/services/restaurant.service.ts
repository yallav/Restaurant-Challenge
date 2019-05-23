/**
 * Service reads the JSON file and returns the list of restaurant objects. 
 * This also takes care of accepting the JSON objcet from user form and adds it 
 * to the existed restaurant objects list.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestaurantFormModel } from '../models/restaurant-form.model';
import { RestaurantUtilService } from './restaurant-util.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  restaurantsList: RestaurantFormModel[] = [];
  
  constructor(private http : HttpClient, 
              private utilService: RestaurantUtilService) { }

  loadRestaurants() : void {
     if (this.restaurantsList.length === 0) {
     this.http.get("../assets/mock-data/restaurant-mock-data.json")
      .toPromise()
      .then((data: RestaurantFormModel[]) => {
        data = data.map(item => this.utilService.processRestaurantData(item))
        this.restaurantsList.push(...data);
      });
    }
  }

  addRestaurant(item: RestaurantFormModel) {
    this.restaurantsList.push(item);
  }
}
