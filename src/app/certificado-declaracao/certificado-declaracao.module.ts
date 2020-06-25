import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertificadoDeclaracaoPageRoutingModule } from './certificado-declaracao-routing.module';

import { CertificadoDeclaracaoPage } from './certificado-declaracao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertificadoDeclaracaoPageRoutingModule
  ],
  declarations: [CertificadoDeclaracaoPage]
})
export class CertificadoDeclaracaoPageModule {}
