import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaParticipantePage } from './consulta-participante.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaParticipantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaParticipantePageRoutingModule {}
