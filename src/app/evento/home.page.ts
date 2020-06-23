import { ErrorHandlerService } from './../core/error-handler.service';
import { EventoService, Evento } from './evento.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  evento = [];

  constructor(
    private eventoService: EventoService,
    private error: ErrorHandlerService,
  ) {

  }

  ionViewWillEnter(){
   this.listarEventos();
  }

  listarEventos(){
    this.eventoService.listarEventos()
      .then(data => {
        console.log(data);
        this.evento = data;
      })
      .catch(erro => this.error.handleError(erro));
  }
}
