import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParticipanteCadastroPage } from './participante-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: ParticipanteCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParticipanteCadastroPageRoutingModule {}
