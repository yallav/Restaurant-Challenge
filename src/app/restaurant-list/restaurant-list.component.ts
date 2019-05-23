/***
 * Restaurnats list component serves the homepage for this application. It also has the below two functionalities.
 * 
 * Add New Restaurant => This functionality lunaches the user on adding new restaurant to the list
 * 
 * Filter Restaurant => This functionality filters the list of the restaurants as per given day 
 */

import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RestaurantUtilService } from '../services/restaurant-util.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  filteredRestaurants: any = [];
  displayalert: boolean = false;
  alertMsg: any;

  searchForm = new FormGroup({
    srchText: new FormControl('')
  });
  
  constructor(private rservice : RestaurantService, 
              private utilService: RestaurantUtilService, 
              private router: Router) { }

  ngOnInit() {
    this.rservice.loadRestaurants();
  }

  addNewRestaurant(): void {
    this.router.navigate(['newrestaurant']);
  }

  filterRestaurant(): void{

    let filterText = this.searchForm.get("srchText").value;

    let filterObject = {"fDay":filterText};
  
    if((filterText === null) || (filterText === "")) return;

    this.filteredRestaurants = this.rservice.restaurantsList.filter(function(restaurant) {
      let tempOpening_hoursArr = restaurant.pOpening_hours.filter(function(opening_hour){
        let temppOpening_hourObj = opening_hour.filter(function(pOpening_hour) {
          return pOpening_hour.day.toLowerCase() === filterObject.fDay.toLowerCase();          
        });
        return temppOpening_hourObj.length > 0;
      });
      return tempOpening_hoursArr.length > 0;
    });

    if(this.filteredRestaurants.length != 0){
      this.rservice.restaurantsList = this.filteredRestaurants;
    }else {
      this.alertMsg = "Please enter valid day between Sunday to Saturday. Click proceed to filter restaurants";
      this.displayalert = true;
    }
  } 

  close(pyload: any): void{
    this.displayalert = false;
  }
}
