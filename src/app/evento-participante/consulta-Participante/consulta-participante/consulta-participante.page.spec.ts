import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultaParticipantePage } from './consulta-participante.page';

describe('ConsultaParticipantePage', () => {
  let component: ConsultaParticipantePage;
  let fixture: ComponentFixture<ConsultaParticipantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaParticipantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultaParticipantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
