import { AlertsService } from './../../core/alerts.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { InscricaoService, Evento } from './../inscricao.service';
import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.page.html',
  styleUrls: ['./inscricao.page.scss'],
})
export class InscricaoPage implements OnInit {

  evento = new Evento();
  codParticipante: number;
  atividades: any[] = [];

  constructor(
    public inscricaoService: InscricaoService,
    public handler: ErrorHandlerService,
    public alert: AlertsService,
    public router: Router,
    public activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const codEvento = this.activeRoute.snapshot.params.codEvento;
    if (codEvento) {
      console.log(codEvento);
      this.carregarEvento(codEvento);
    }
  }

  carregarEvento(codEvento: number) {
    this.inscricaoService.listarEvento(codEvento)
      .then(data => {
        console.log(data);
        this.evento = data;
        this.atividades = this.evento.atividades;
      })
      .catch(erro => this.handler.handleError(erro));
  }

  desmarcaAtvidade(codAtividade) {
    this.atividades = this.atividades.filter(data => {
      return data.codAtividade !== codAtividade;
    })
  }

  gravarInscricao(form: NgForm) {
    const inscricao = [{ codEvento: 0, codParticipante: 0, atividades: [] }];
    inscricao.map(i => {
      i.codEvento = this.evento.codEvento;
      i.codParticipante = this.codParticipante;
      i.atividades = this.atividades;
    });

    this.inscricaoService.cadastrar(inscricao)
      .then(data => {
        this.alert.alertaToast('Inscrição Finalizada', 'success');
        this.router.navigate(['/home']);
      })
      .catch(erro => this.handler.handleError(erro));
  }
}
