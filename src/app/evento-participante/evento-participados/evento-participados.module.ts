import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventoParticipadosPageRoutingModule } from './evento-participados-routing.module';

import { EventoParticipadosPage } from './evento-participados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventoParticipadosPageRoutingModule
  ],
  declarations: [EventoParticipadosPage]
})
export class EventoParticipadosPageModule {}
