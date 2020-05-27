import { Component, OnInit } from '@angular/core';
import { ParticipanteService, Participante } from '../participante.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AlertsService } from 'src/app/core/alerts.service';

@Component({
  selector: 'app-participante-cadastro',
  templateUrl: './participante-cadastro.page.html',
  styleUrls: ['./participante-cadastro.page.scss'],
})
export class ParticipanteCadastroPage implements OnInit {

  participante = new Participante();
  confirSenha: string;
  password_type = 'password';
  titulo = 'Novo ';

  constructor(
    public participanteService: ParticipanteService,
    private router: Router,
    private route: ActivatedRoute,
    public toast: ToastController,
    public handler: ErrorHandlerService,
    private alert: AlertsService
  ) { }

  ngOnInit() {
    const codParticipante = this.route.snapshot.params.codParticipante;

    if (codParticipante) {
      console.log(codParticipante);
      this.carregarParticipante(codParticipante);
    }

    this.atualizarTitulo();
  }

  get editando() {
    if (this.participante.codParticipante) {
      return true;
    }
    return false;
  }

  atualizarTitulo() {
    if (this.editando) {
      this.titulo = 'Alterar ';
    }
  }

  carregarParticipante(codParticipante: number) {
    console.log(codParticipante);
    this.participanteService.listaParticipante(codParticipante)
      .then(data => {
        console.log(data);
        this.participante = data;
      })
      .catch(erro => this.handler.handleError(erro));
  }

  exibeSenha() {
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
  }

  gravar() {
    this.participante.codParticipante = this.participante.codParticipante ? this.participante.codParticipante : null;
    this.participanteService.cadastrar(this.participante)
      .then(() => {
        this.alert.alertaToast(this.participante.codParticipante ? 'Participante Alterado com Sucesso' : 'Participante Cadastrado com Sucesso',
          'success');
        this.router.navigate(['home']);
      })
      .catch(erro => this.handler.handleError(erro));
  }
  
}
