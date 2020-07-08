import { TestBed } from '@angular/core/testing';

import { ConsultaEventoService } from './consulta-evento.service';

describe('ConsultaEventoService', () => {
  let service: ConsultaEventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaEventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
