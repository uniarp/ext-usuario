import { Component, OnInit } from '@angular/core';
import { ConsultaEventoService, Participante } from '../../consulta-evento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-consulta-participante',
  templateUrl: './consulta-participante.page.html',
  styleUrls: ['./consulta-participante.page.scss'],
})
export class ConsultaParticipantePage implements OnInit {

  participante: Participante;
  constructor(
    private consultaEventoService: ConsultaEventoService,
    public router: Router,
    private route: ActivatedRoute,
    public handler: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.listar()
  }

  inserir() {
    this.router.navigate(['participante-cadastro']);
  }

  async listar() {
    this.participante = await this.consultaEventoService.listar();
  }

  async eventoParticipado(codParticipante) {
    this.router.navigate(['/evento-participados/' + codParticipante ]);
  }

  ionViewWillEnter() {
    this.listar();
  }
}
