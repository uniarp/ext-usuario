import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventoParticipadosPage } from './evento-participados.page';

describe('EventoParticipandosPage', () => {
  let component: EventoParticipadosPage;
  let fixture: ComponentFixture<EventoParticipadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoParticipadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventoParticipadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
