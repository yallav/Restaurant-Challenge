import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { Location } from "@angular/common";
import { RestaurantListComponent } from './restaurant-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RestaurantComponent } from '../restaurant/restaurant.component';
import { NewRestaurantComponent } from '../new-restaurant/new-restaurant.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../restaurant-routing.module';
import { Router } from '@angular/router';

describe('RestaurantListComponent', () => {
  let component: RestaurantListComponent;
  let fixture: ComponentFixture<RestaurantListComponent>;
  let location: Location;
  let router: Router;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ NgbModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                RouterTestingModule.withRoutes(routes)
       ],
      declarations: [ RestaurantListComponent,
                      RestaurantComponent,
                      NewRestaurantComponent
                     ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('filter restaurants which operates on "Monday" ', () =>{
    component.filteredRestaurants = { "fDay": "Monday"};
    component.filterRestaurant();
  });

  it('filter restaurants which operates on "nday" ', () =>{
    component.filteredRestaurants = { "fDay": "Monday"};
    component.filterRestaurant();
    expect(component.alertMsg).toBe("Please enter valid day between Sunday to Saturday. Click proceed to filter restaurants");
  });

  it('should navigate to new restaurant page for the click on "Add New Restaurant" button', fakeAsync(()=>{
    router.navigate(['/newrestaurant']);
    tick();
    expect(location.path()).toBe('/newrestaurant');
  }));

});
