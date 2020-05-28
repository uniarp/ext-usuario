import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaParticipantePageRoutingModule } from './consulta-participante-routing.module';

import { ConsultaParticipantePage } from './consulta-participante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaParticipantePageRoutingModule
  ],
  declarations: [ConsultaParticipantePage]
})
export class ConsultaParticipantePageModule {}
