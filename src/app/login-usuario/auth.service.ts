import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth/';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public auth: AngularFireAuth,
    private router: Router,
  ) { }

  login(email: string, senha: string) {
    return this.auth.signInWithEmailAndPassword(email, senha);
  }

  cadastrarUser(email: string, senha: string) {
    return this.auth.createUserWithEmailAndPassword(email, senha);
  }

  logout() {
    this.auth.signOut().then(data => {
      console.log(data);
      this.router.navigate(['/login-usuario']);
    }).catch(error => {
      console.log("Deu erro:" + error);
    });
  }

  getAuth() {
    return this.auth;
  }
}
