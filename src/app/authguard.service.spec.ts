/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthguardService } from './authguard.service';

describe('AuthguardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthguardService]
    });
  });

  it('should ...', inject([AuthguardService], (service: AuthguardService) => {
    expect(service).toBeTruthy();
  }));
});
