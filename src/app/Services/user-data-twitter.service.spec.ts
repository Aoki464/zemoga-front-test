import { TestBed } from '@angular/core/testing';

import { UserDataTwitterService } from './user-data-twitter.service';

describe('UserDataTwitterService', () => {
  let service: UserDataTwitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDataTwitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
