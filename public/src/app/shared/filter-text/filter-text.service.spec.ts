import { TestBed, inject } from '@angular/core/testing';

import { FilterTextService } from './filter-text.service';

describe('FilterTextService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterTextService]
    });
  });

  it('should ...', inject([FilterTextService], (service: FilterTextService) => {
    expect(service).toBeTruthy();
  }));
});
