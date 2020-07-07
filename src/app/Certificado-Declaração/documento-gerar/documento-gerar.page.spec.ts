import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DocumentoGerarPage } from './documento-gerar.page';

describe('DocumentoGerarPage', () => {
  let component: DocumentoGerarPage;
  let fixture: ComponentFixture<DocumentoGerarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentoGerarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentoGerarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
