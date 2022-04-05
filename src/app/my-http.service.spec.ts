import { TestBed } from '@angular/core/testing';

import { MyHTTPService } from './my-http.service';

describe('MyHTTPService', () => {
  let service: MyHTTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyHTTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
