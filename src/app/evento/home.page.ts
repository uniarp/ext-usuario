import { Router } from '@angular/router';
import { AuthService } from './../login-usuario/auth.service';
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
    private router: Router,
    public auth: AuthService
  ) {

  }

  ionViewWillEnter() {
    this.auth.carregar();
    console.log(this.auth.usuario.codParticipante);
    this.listarEventos();
  }

  listarEventos() {
    this.eventoService.listarEventos()
      .then(data => {
        console.log(data);
        this.evento = data;
      })
      .catch(erro => this.error.handleError(erro));
  }

  inscrever(codEvento: number) {
    this.router.navigate([`/inscricao/${codEvento}`]);
  }

}
