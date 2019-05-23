import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantComponent } from './restaurant.component';
import { RestaurantFormModel } from '../models/restaurant-form.model';
import { Component } from '@angular/core';

describe('RestaurantComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {

    let thokkarestaurant =  {   
        "id": 1,
        "restname": "Kayasa Restaurant",
        "opening_hours": [  
                          "Monday - Friday 8:30AM to 9PM",
                          "Saturday 8:30AM to 12:30PM",
                          "Sunday 4PM to 9PM"
                        ],
        "pOpening_hours": [],
        "address": "19B, Shaddock Street, Eden Terrace, Auckland, Pin: 1021",
        "image": "../assets/images/kayasa.png",
        "street":"",
        "state":"",
        "zip":"",
        "img":"",
        "startday":"",
        "endday":"",
        "starttime":{hour: 12, minute: 30},
        "endtime":{hour: 13, minute: 30},
        "url":""
    };

    component.setRestaurant(thokkarestaurant);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: `host-component`,
  template: `<app-restaurant [restaurant]="myRestaurant"></app-restaurant>`
})
class TestHostComponent {
  private myRestaurant = new RestaurantFormModel();

  setRestaurant(newInput: RestaurantFormModel) {
    this.myRestaurant.opening_hours.push(newInput.opening_hours);
  }
}