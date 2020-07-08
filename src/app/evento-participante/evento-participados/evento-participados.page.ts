import { AuthService } from './../../login-usuario/auth.service';
import { Component, OnInit } from '@angular/core';
import { ConsultaEventoService, Participante } from '../consulta-evento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { NavParams } from '@ionic/angular';

import { InscricaoPage } from 'src/app/inscricao/inscricao/inscricao.page';


@Component({
  selector: 'app-evento-participandos',
  templateUrl: './evento-participados.page.html',
  styleUrls: ['./evento-participados.page.scss'],
})
export class EventoParticipadosPage implements OnInit {


  participante: Participante;
  cpf: number;
  carregarEvento: any;
  inscritos: any;
  navParams: any;
  eventos: any;
  codParticipante: any;
  listarIngresso: any;
  codInscricao: any;

  constructor(
    public consultaEventoService: ConsultaEventoService,
    public router: Router,
    private route: ActivatedRoute,
    public handler: ErrorHandlerService,
    private erroHandler: ErrorHandlerService,
    private authService: AuthService

  ) { }

  ngOnInit() {
    this.codParticipante = this.authService.usuario.codParticipante;
    this.consultaEventoService.carregarEvento(this.codParticipante)
      .then(data => {
        this.eventos = data;
        console.log(data);
      })
      .catch(erro => this.erroHandler.handleError(erro));
  }

  recebe() {
    this.codParticipante = this.authService.usuario.codParticipante;
    console.log("1")
  }
  async ingresso(codInscricao) {
    this.router.navigate(['/qr-code/' + codInscricao]);
  }
  async gerarDocumento(codEvento: number) {
    console.log(codEvento, this.codParticipante);
    this.router.navigate(['/documento-gerar/', this.codParticipante, codEvento]);
  }

}
