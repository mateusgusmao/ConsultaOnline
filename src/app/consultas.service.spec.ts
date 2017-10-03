import { TestBed, inject } from '@angular/core/testing';

import { ConsultasService } from './consultas.service';

describe('ConsultasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultasService]
    });
  });

  it('should be created', inject([ConsultasService], (service: ConsultasService) => {
    expect(service).toBeTruthy();
  }));
});
