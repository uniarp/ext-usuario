import { TestBed } from '@angular/core/testing';

import { InscricaoService } from './inscricao.service';

describe('InscricaoService', () => {
  let service: InscricaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InscricaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
