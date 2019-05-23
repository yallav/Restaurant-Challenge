import { TestBed, async } from '@angular/core/testing';

import { RestaurantService } from './restaurant.service';
import { HttpClientModule } from '@angular/common/http';

describe('RestaurantService', () => {
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestaurantService = TestBed.get(RestaurantService);
    expect(service).toBeTruthy();
  });
});
