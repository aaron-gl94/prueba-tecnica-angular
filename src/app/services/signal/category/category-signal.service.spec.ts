import { TestBed } from '@angular/core/testing';

import { CategorySignalService } from './category-signal.service';

describe('CategorySignalService', () => {
  let service: CategorySignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorySignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
