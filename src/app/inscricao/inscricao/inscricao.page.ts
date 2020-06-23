import { EventoService, Evento } from '../../evento/evento.service';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AlertsService } from './../../core/alerts.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { InscricaoService } from './../inscricao.service';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.page.html',
  styleUrls: ['./inscricao.page.scss'],
})
export class InscricaoPage implements OnInit {

  evento = new Evento();
  codParticipante = 8;
  atividades: any[] = [];

  constructor(
    private inscricaoService: InscricaoService,
    private eventoService: EventoService,
    public handler: ErrorHandlerService,
    public alert: AlertsService,
    public router: Router,
    public activeRoute: ActivatedRoute,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    const codEvento = this.activeRoute.snapshot.params.codEvento;
    if (codEvento) {
      console.log(codEvento);
      this.carregarEvento(codEvento);
    }
  }

  carregarEvento(codEvento: number) {
    this.eventoService.listarEvento(codEvento)
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

    this.confirmaInscricao(inscricao);
  }

  async confirmaInscricao(inscricao) {
    const alert = await this.alertController.create({
      cssClass: 'max-width',
      header: 'Finalizar Inscrição',
      message: 'Deseja realmente finalizar a inscrição nessas atividades?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel'
        }, {
          text: 'Sim',
          cssClass: 'success',
          handler: (inscricao) => {
            this.inscricaoService.cadastrar(inscricao)
              .then(data => {
                this.alert.alertaToast('Inscrição Finalizada', 'success');
                this.router.navigate(['/home']);
              })
              .catch(erro => this.handler.handleError(erro));
          }
        }
      ]
    });

    await alert.present();
  }
}
