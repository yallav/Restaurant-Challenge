import { TestBed } from '@angular/core/testing';

import { RestaurantUtilService } from './restaurant-util.service';

describe('RestaurantUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestaurantUtilService = TestBed.get(RestaurantUtilService);
    expect(service).toBeTruthy();
  });
});
