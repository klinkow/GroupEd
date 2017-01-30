/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GroupMakerService } from './group-maker.service';

describe('GroupMakerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupMakerService]
    });
  });

  it('should ...', inject([GroupMakerService], (service: GroupMakerService) => {
    expect(service).toBeTruthy();
  }));
});
