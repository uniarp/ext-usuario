import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.page.html',
  styleUrls: ['./login-usuario.page.scss'],
})
export class LoginUsuarioPage implements OnInit {

  email: string;
  senha: string;
  password_type = 'password';

  constructor(
    public router: Router,
    public alertController: AlertController,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  cadastro(){
    this.router.navigate(['/participante-cadastro']);
  }

  acessar() {
    this.auth.login(this.email, this.senha)
      .then(data => {
        this.router.navigate(['home']);
        this.email = '';
        this.senha = '';
      })
      .catch(erro => {
        console.log(erro);
        if (erro.code === "auth/user-not-found" || erro.code === "auth/wrong-password") {
          this.alertaErro();
        }
      });
  }

  exibeSenha() {
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
  }

  async alertaErro() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Login Inválido',
      message: 'Verifique seu e-mail e senha e tente novamente',
      buttons: ['OK']
    });
    await alert.present();
  }
}