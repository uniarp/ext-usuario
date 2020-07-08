import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth/';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario: any;
  constructor(
    public auth: AngularFireAuth,
    private router: Router,
    public http: HttpClient,
  ) { }

  login(email: string, senha: string) {
    return this.auth.signInWithEmailAndPassword(email, senha)
      .then(res => {
        this.recuperaDados();
      })
      .catch(erro => console.log(erro));
  }

  cadastrarUser(email: string, senha: string) {
    return this.auth.createUserWithEmailAndPassword(email, senha);
  }

  logout() {
    this.auth.signOut().then(data => {
      this.router.navigate(['/login-usuario']);
    }).catch(error => {
      console.log("Deu erro:" + error);
    });
  }

  getAuth() {
    return this.auth;
  }


  recuperaDados() {
    this.auth.onAuthStateChanged(user => {
      return this.http.get<any>(`https://uniarpextensao.herokuapp.com/public/participantes/vericaEmail/${user.email}`)
        .toPromise()
        .then(data => {
          localStorage.setItem('usuario', JSON.stringify(data[0]));
        });
    });
  }

  public carregar() {
    const user = localStorage.getItem('usuario');
    if (user) {
      this.usuario = JSON.parse(user);
      console.log(this.usuario);
    } else {
      this.usuario = [];
    }
  }

}
