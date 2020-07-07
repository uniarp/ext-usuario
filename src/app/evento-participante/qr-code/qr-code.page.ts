import { Component, OnInit } from '@angular/core';
import { ConsultaEventoService } from '../consulta-evento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Evento } from 'src/app/inscricao/inscricao.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {

  codEvento: any;
  codParticipante: any;
  listarIngresso: any;
  navParams: any;
  eventos: any;
  qrCode: any;

  constructor(
    public consultaEventoService: ConsultaEventoService,
    public router: Router,
    private route: ActivatedRoute,
    public handler: ErrorHandlerService,
    private erroHandler: ErrorHandlerService,
    private sanitizer: DomSanitizer

  ) { }

  ngOnInit() {
    this.route.params.subscribe(parametros => {
      this.gerarQrCode(parametros['codInscricao']);
    });
  }

  gerarQrCode(codInscricao: any) {
    this.consultaEventoService.listarIngresso(codInscricao)
      .then(data => {
        this.qrCode = this.sanitizer.bypassSecurityTrustUrl(data['base64']);
      })
      .catch(erro => this.erroHandler.handleError(erro));
  }
}
