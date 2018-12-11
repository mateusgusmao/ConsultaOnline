import { TestBed, inject } from '@angular/core/testing';

import { AdmService } from './adm.service';

describe('AdmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdmService]
    });
  });

  it('should be created', inject([AdmService], (service: AdmService) => {
    expect(service).toBeTruthy();
  }));
});
