import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRestaurantComponent } from './new-restaurant.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../restaurant-routing.module';
import { RestaurantListComponent } from '../restaurant-list/restaurant-list.component';
import { RestaurantComponent } from '../restaurant/restaurant.component';
import { DebugElement } from '@angular/core';

describe('NewRestaurantComponent', () => {
  let component: NewRestaurantComponent;
  let fixture: ComponentFixture<NewRestaurantComponent>;
  let debugElement: DebugElement;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbModule,
                FormsModule,
                HttpClientModule,
                RouterTestingModule.withRoutes(routes),
                ReactiveFormsModule
              ],
      declarations: [ NewRestaurantComponent,
                      RestaurantListComponent,
                      RestaurantComponent
                    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRestaurantComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('New Restaurant should be created with positive data', () => {

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
      "street":"19B, Shaddock Street,",
      "state":"Auckland",
      "zip":"1021",
      "img":"../assets/images/abs.png",
      "startday":"Monday",
      "endday":"Tuesday",
      "starttime":{hour: 12, minute: 30},
      "endtime":{hour: 13, minute: 30},
      "url":""
    };

    component.restaurantFormModel = thokkarestaurant;
    component.addNewRestaurant();
    fixture.detectChanges();
    expect(component.displaySuccessfulAlert).toEqual(true);

  });

  it('New Restaurant should not be created with empty field values', () => {

    let thokkarestaurant =  {   
      "id": 1,
      "restname": "",
      "opening_hours": [  
                        "Monday - Friday 8:30AM to 9PM",
                        "Saturday 8:30AM to 12:30PM",
                        "Sunday 4PM to 9PM"
                      ],
      "pOpening_hours": [],
      "address": "19B, Shaddock Street, Eden Terrace, Auckland, Pin: 1021",
      "image": "../assets/images/kayasa.png",
      "street":null,
      "state":"",
      "zip":"",
      "img":"",
      "startday":"",
      "endday":"",
      "starttime":{hour: 12, minute: 30},
      "endtime":{hour: 13, minute: 30},
      "url":""
    };

    component.restaurantFormModel.starttime = {hour: 12, minute: 30};
    component.restaurantFormModel.endtime = {hour: 13, minute: 30};
    component.addNewRestaurant();
    expect(component.displayFormValidAlert).toBeFalsy();
  });

  it('Form timings data check', () => {

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
      "street":"19B, Shaddock Street,",
      "state":"Auckland",
      "zip":"1021",
      "img":"../assets/images/abs.png",
      "startday":"Monday",
      "endday":"Tuesday",
      "starttime":{hour: 12, minute: 30},
      "endtime":{hour: 11, minute: 30},
      "url":""
    };

    component.addNewRestaurant();
    expect(component.alertMsg).toEqual("Form can not be submitted due to invalid timings");
  });

});
