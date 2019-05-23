import { Component, OnInit, ViewChild } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { RestaurantUtilService } from '../services/restaurant-util.service';
import { Router } from '@angular/router';
import { RestaurantFormModel } from '../models/restaurant-form.model';

@Component({
  selector: 'app-new-restaurant',
  templateUrl: './new-restaurant.component.html',
  styleUrls: ['./new-restaurant.component.css']
})
export class NewRestaurantComponent implements OnInit {

  @ViewChild('restaurantform') form: any;
  startdayidx: any ;

  weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  displayalert: boolean = false;
  displaySuccessfulAlert: boolean = false;
  displayFormValidAlert: boolean = false;
  alertMsg: any;

  restaurantFormModel: RestaurantFormModel = new RestaurantFormModel();

  constructor(private rservice : RestaurantService, 
              private utilService: RestaurantUtilService, 
              private router: Router) { }

  ngOnInit() {
  }

  addNewRestaurant(): void {

    let opening_hours = [
      this.restaurantFormModel.startday+" - "+this.restaurantFormModel.endday+" "+
      this.restaurantFormModel.starttime.hour+":"+ this.restaurantFormModel.starttime.minute +" to "+
      this.restaurantFormModel.endtime.hour+":"+ this.restaurantFormModel.endtime.minute
    ];

    this.restaurantFormModel.id = 6;
    this.restaurantFormModel.opening_hours = opening_hours;
    this.restaurantFormModel.address = this.restaurantFormModel.street+","+this.restaurantFormModel.state+","+this.restaurantFormModel.zip;
    this.restaurantFormModel.image = "../assets/images/abs.png";
   

    if(!this.checkTheSelectedTimings(this.restaurantFormModel.starttime, this.restaurantFormModel.endtime)){
      this.displayalert = true;
      this.alertMsg = "Form can not be submitted due to invalid timings";
      return;
    }

    if (this.form.valid) {
      let temp = this.utilService.processRestaurantData(this.restaurantFormModel);
      this.rservice.addRestaurant(JSON.parse(JSON.stringify(temp)));
      this.displaySuccessfulAlert = true;
      this.alertMsg = "New restaurant added successfully. Redirecting to restaurant in the list page.";

      setTimeout(()=>{
        this.form.reset();
        this.goBacktoRestaurantsListPage();
      },2000);
      
    } else{
      this.displayFormValidAlert = true;
      this.alertMsg = "All fields are mandatory. Hence, form can not be submitted without full details";
    }
  }

  goBacktoRestaurantsListPage(): void{
    this.router.navigate(['restaurants'])
  }

  checkTheSelectedTimings(startTime: any, endTime: any): boolean{
    let tStartTime = startTime.hour * 60 + startTime.minute;
    let tEndTime = endTime.hour * 60 + endTime.minute;

    return (tStartTime < tEndTime)? true: false;
  }

  selectedStartDay(dayIdx: any){
    this.startdayidx = dayIdx;
    this.restaurantFormModel.startday = this.weekdays[dayIdx];
  }

  selectedEndDay(dayIdx: any){
    this.restaurantFormModel.endday = this.weekdays[dayIdx];
  }

  close(payload: any): void{
    this.displayalert = false;
    this.displaySuccessfulAlert = false;
    this.displayFormValidAlert = false;
  }
}
