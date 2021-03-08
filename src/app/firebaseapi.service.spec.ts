import { TestBed } from '@angular/core/testing';

import { FirebaseapiService } from './firebaseapi.service';

describe('FirebaseapiService', () => {
  let service: FirebaseapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
