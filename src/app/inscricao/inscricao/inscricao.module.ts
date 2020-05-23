import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscricaoPageRoutingModule } from './inscricao-routing.module';

import { InscricaoPage } from './inscricao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscricaoPageRoutingModule
  ],
  declarations: [InscricaoPage]
})
export class InscricaoPageModule {}
