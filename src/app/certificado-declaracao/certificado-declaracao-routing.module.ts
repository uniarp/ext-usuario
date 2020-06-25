import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificadoDeclaracaoPage } from './certificado-declaracao.page';

const routes: Routes = [
  {
    path: '',
    component: CertificadoDeclaracaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificadoDeclaracaoPageRoutingModule {}
