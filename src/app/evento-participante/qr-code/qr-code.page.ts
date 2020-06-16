import { Component, OnInit } from '@angular/core';
import { ConsultaEventoService } from '../consulta-evento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

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

  constructor(
    public consultaEventoService: ConsultaEventoService,
    public router: Router,
    private route: ActivatedRoute,
    public handler: ErrorHandlerService,
    private erroHandler: ErrorHandlerService

  ) { }

  ngOnInit() {
    this.route.params.subscribe(parametros => {
      this.consultaEventoService.listarIngresso(parametros['codEvento'])
        .then(data => {
          this.eventos = data;
          console.log(data)
        })
        .catch(erro => this.erroHandler.handleError(erro));
    });
  }
  qrcode(){
    this.codEvento = this.route.queryParams['codEvento'];
    console.log("q")
  }
}
