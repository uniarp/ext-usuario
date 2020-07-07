import { Component, OnInit, Input } from '@angular/core';
import { EventoService, Evento } from 'src/app/evento/evento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { ParticipanteService } from 'src/app/participante/participante.service';
import { DocumentosService } from '../documentos.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AlertsService } from 'src/app/core/alerts.service';

@Component({
  selector: 'app-documento-gerar',
  templateUrl: './documento-gerar.page.html',
  styleUrls: ['./documento-gerar.page.scss'],
})
export class DocumentoGerarPage implements OnInit {

  now = new Date();
  evento = new Evento();
  atividades: any[] = [];
  inscritos: any[] = [];
  @Input() codEvento: number;
  @Input() codInscricao: number;
  inscricao: any[] = [];

  constructor(
    public inscricaoParticipanteService: ParticipanteService,
    public documentosService: DocumentosService,
    private router: Router,
    private route: ActivatedRoute,
    public toast: ToastController,
    public handler: ErrorHandlerService,
    private erroHandler: ErrorHandlerService,
    private alert: AlertsService,
    public eventoService: EventoService
  ) { }

  ngOnInit() {
    this.codEvento = this.route.snapshot.params.codEvento;
    this.codInscricao = this.route.snapshot.params.codInscricao;
    this.listarInscritos(this.codInscricao);
    this.imprimir();
  }
  ionViewWillEnter() {
    this.listarInscritos(this.codInscricao);
  }
  async imprimir() {

    await this.delay(3000);
    await print();
    this.router.navigate(['home']);
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  get tipoDocumento() {
    return Boolean(this.codInscricao>=90); //O correto aqui é colocar o SOMA_HORAS_EVENTO
  }

  listarInscritos(codInscricao: number) {
    this.documentosService.dadosParaDoc(codInscricao)
      .then(data => {
        this.inscritos = data;
        console.log(data);
      })
      .catch(erro => this.erroHandler.handleError(erro));
    this.eventoService.listarEvento(this.codEvento)
      .then(data => { 
        console.log(data);
        this.evento = data;
      })
      .catch(erro => this.erroHandler.handleError(erro));
  }

  documentoGerar(codInscricao: number) {
    console.log(codInscricao);
    this.documentosService.gerarDocumento(codInscricao)
      .then(data => {
        this.alert.alertaToast('Documento Gerado com Sucesso', 'success');
      })
      .catch(erro => this.handler.handleError(erro));
  }

}