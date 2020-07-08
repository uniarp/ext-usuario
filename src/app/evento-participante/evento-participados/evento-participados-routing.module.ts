import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventoParticipadosPage } from './evento-participados.page';

const routes: Routes = [
  {
    path: '',
    component: EventoParticipadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventoParticipadosPageRoutingModule {}
