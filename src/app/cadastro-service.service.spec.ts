import { TestBed, inject } from '@angular/core/testing';

import { CadastroServiceService } from './cadastro-service.service';

describe('CadastroServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CadastroServiceService]
    });
  });

  it('should be created', inject([CadastroServiceService], (service: CadastroServiceService) => {
    expect(service).toBeTruthy();
  }));
});
