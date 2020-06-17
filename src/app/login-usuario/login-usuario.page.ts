import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.page.html',
  styleUrls: ['./login-usuario.page.scss'],
})
export class LoginUsuarioPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }
  acessar(){
    this.router.navigate(['home']);
  }
}