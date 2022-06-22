import { TestBed } from '@angular/core/testing';

import { SeriesService } from './crud.service';

describe('CRUDService', () => {
  let service: SeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
