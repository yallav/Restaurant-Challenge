/**
 * Service provides the functionality to process opening hours and creates processed opening hours
 */

import { Injectable } from '@angular/core';
import { RestaurantFormModel } from '../models/restaurant-form.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantUtilService {

  constructor() { }

  processRestaurantData(restaurant: RestaurantFormModel): RestaurantFormModel{

    let pOpening_hours: any = [];
    let tArray: any = [];
 
    restaurant.opening_hours.forEach(opening_hour => {
      tArray = opening_hour.split(" ");
      pOpening_hours = this.prepareOpeningHours(tArray);
    });

    restaurant.pOpening_hours = [];
    restaurant.pOpening_hours.push(pOpening_hours);
    return restaurant;
  } 

  private prepareOpeningHours(dataToPrcess: any): any{
    let startDay: string = '';
    let endDay: string = '';
    let startTime: string = '';
    let endTime: string = '';
    let week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let filteredWeek: any = [];
    let processedData: any = [];

    if(dataToPrcess.length > 4){
      startDay = dataToPrcess[0];
      endDay = dataToPrcess[2];
      startTime = dataToPrcess[3];
      endTime = dataToPrcess[5];
    }else{
      startDay = dataToPrcess[0];
      endDay = "";
      startTime = dataToPrcess[1];
      endTime = dataToPrcess[3];
    }
    startTime = this.convertTimeToMinutes(startTime);
    endTime = this.convertTimeToMinutes(endTime);

    filteredWeek = week.slice(week.indexOf(startDay), week.indexOf(endDay));
    filteredWeek.forEach(day =>{
      processedData.push({"day": day,"startTime":startTime,"endTime":endTime});
    });

    return processedData;
  }

  private convertTimeToMinutes(time: any): any{
    
    let processedTime: any;

    if(time.includes("AM")){
      if(time.includes(":")){
        let tempTimeArr = time.split(":");
        tempTimeArr[1] = tempTimeArr[1].replace("AM",'');
        processedTime = tempTimeArr[0]* 60 + tempTimeArr[1]*1; 
      }else{
        time = time.replace("AM","");
        processedTime = time* 60;
      }
    }else if(time.includes("PM")){
      if(time.includes(":")){
        let tempTimeArr = time.split(":");
        tempTimeArr[1] = tempTimeArr[1].replace("PM",'');
        if(tempTimeArr[0] != 12){
          processedTime = (tempTimeArr[0]*1+12)* 60 + tempTimeArr[1]*1; 
        }else if(tempTimeArr[0] == 12){
          processedTime = (tempTimeArr[0])* 60 + tempTimeArr[1]*1; 
        }
        
      }else{
        time = time.replace("PM","");
        processedTime = (time*1 + 12)* 60;
      }
    }

    if(!(time.includes("AM") || time.includes("PM"))){
      if(time.includes(":")){
        let tempTimeArr = time.split(":");
        processedTime = (tempTimeArr[0]*1+12)* 60 + tempTimeArr[1]*1; 
      }
    }

    return processedTime;
  }
}
