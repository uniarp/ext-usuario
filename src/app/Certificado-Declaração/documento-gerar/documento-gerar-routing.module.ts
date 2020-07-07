import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentoGerarPage } from './documento-gerar.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentoGerarPage
  },
  {
    path: '/:codInscricao/:codEvento',
    component: DocumentoGerarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentoGerarPageRoutingModule {}
