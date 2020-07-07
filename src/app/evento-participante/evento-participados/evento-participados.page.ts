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

  codParticipante: any;
  carregarEvento: any;
  listarIngresso: any;
  navParams: any;
  eventos: any;
  codInscricao:any;

  constructor(
    public consultaEventoService: ConsultaEventoService,
    public router: Router,
    private route: ActivatedRoute,
    public handler: ErrorHandlerService,
    private erroHandler: ErrorHandlerService

  ) { }

  ngOnInit() {
    this.route.params.subscribe(parametros => {
      this.consultaEventoService.carregarEvento(parametros['codParticipante'])
        .then(data => {
          this.eventos = data;
        })
        .catch(erro => this.erroHandler.handleError(erro));
    });
  }

  recebe() {
    this.codParticipante = this.route.queryParams['codParticipante'];
    console.log("1")
  }

  async ingresso(codInscricao){
    this.router.navigate(['/qr-code/'+codInscricao]);
  }
}
