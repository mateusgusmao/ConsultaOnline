import { TestBed, inject } from '@angular/core/testing';

import { EspecialidadeService } from './especialidade.service';

describe('EspecialidadeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EspecialidadeService]
    });
  });

  it('should be created', inject([EspecialidadeService], (service: EspecialidadeService) => {
    expect(service).toBeTruthy();
  }));
});
