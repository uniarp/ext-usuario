import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrMaskerModule } from 'br-mask';
import { IonicModule } from '@ionic/angular';

import { ParticipanteCadastroPageRoutingModule } from './participante-cadastro-routing.module';

import { ParticipanteCadastroPage } from './participante-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParticipanteCadastroPageRoutingModule,
    BrMaskerModule
  ],
  declarations: [ParticipanteCadastroPage]
})
export class ParticipanteCadastroPageModule {}
