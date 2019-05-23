import { Routes } from "@angular/router";
import { RestaurantListComponent } from "./restaurant-list/restaurant-list.component";
import { NewRestaurantComponent } from "./new-restaurant/new-restaurant.component";

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'restaurants'},
    {path: 'home', pathMatch: 'full', redirectTo: 'restaurants'},
    {path: 'restaurants', component: RestaurantListComponent},
    {path: 'newrestaurant', component: NewRestaurantComponent}
  ];