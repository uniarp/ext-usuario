import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './../login-usuario/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.auth.getAuth().onAuthStateChanged(user => {
        if (!user) { this.router.navigate(['login-usuario']); }

        resolve(user ? true : false);
      });
    });
  }
}
