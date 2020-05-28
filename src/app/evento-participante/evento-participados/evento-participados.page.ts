import { Component, OnInit } from '@angular/core';
import { ConsultaEventoService, Participante } from '../consulta-evento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { NavParams } from '@ionic/angular';

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

  constructor(
    public consultaEventoService: ConsultaEventoService,
    public router: Router,
    private route: ActivatedRoute,
    public handler: ErrorHandlerService,
    private erroHandler: ErrorHandlerService

  ) { }

  ngOnInit() {
    this.route.params.subscribe(parametros => {
      this.consultaEventoService.carregarEvento(parametros['cpf'])
        .then(data => {
          this.eventos = data;
        })
        .catch(erro => this.erroHandler.handleError(erro));
    });
  }

  recebe() {
    this.cpf = this.route.queryParams['cpf'];
    console.log("1")
  }
}
