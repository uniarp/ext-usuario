import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentoGerarPageRoutingModule } from './documento-gerar-routing.module';

import { DocumentoGerarPage } from './documento-gerar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentoGerarPageRoutingModule
  ],
  declarations: [DocumentoGerarPage]
})
export class DocumentoGerarPageModule {}
