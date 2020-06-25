import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CertificadoDeclaracaoPage } from './certificado-declaracao.page';

describe('DocumentosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentosService = TestBed.get(DocumentosService);
    expect(service).toBeTruthy();
  
  });
});
