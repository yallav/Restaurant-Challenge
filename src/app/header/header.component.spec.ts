import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import {Location} from "@angular/common";

import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";

import { HeaderComponent } from './header.component';
import { routes } from '../restaurant-routing.module';
import { RestaurantListComponent } from '../restaurant-list/restaurant-list.component';
import { NewRestaurantComponent } from '../new-restaurant/new-restaurant.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestaurantComponent } from '../restaurant/restaurant.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), 
                NgbModule, 
                FormsModule, 
                ReactiveFormsModule],
      declarations: [ HeaderComponent, 
                      RestaurantListComponent , 
                      RestaurantComponent, 
                      NewRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('navigate to "" redirects you to /restaurants', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/restaurants');
  }));

  it('navigate to "/home" redirects you to /restaurants', fakeAsync(() => {
    router.navigate(['/home']);
    tick();
    expect(location.path()).toBe('/restaurants');
  }));
});
