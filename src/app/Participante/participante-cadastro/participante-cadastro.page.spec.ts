import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParticipanteCadastroPage } from './participante-cadastro.page';

describe('ParticipanteCadastroPage', () => {
  let component: ParticipanteCadastroPage;
  let fixture: ComponentFixture<ParticipanteCadastroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipanteCadastroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParticipanteCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
