import { GuardGuard } from './guard/guard.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login-usuario', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./evento/home.module')
      .then(m => m.HomePageModule),
    canActivate: [GuardGuard]
  },
  {
    path: 'inscricao',
    loadChildren: () => import('./inscricao/inscricao/inscricao.module')
      .then(m => m.InscricaoPageModule),
      canActivate: [GuardGuard]
  },
  {
    path: 'participante-cadastro',
    loadChildren: () => import('./participante/participante-cadastro/participante-cadastro.module')
      .then(m => m.ParticipanteCadastroPageModule),
  },
  {
    path: 'login-usuario',
    loadChildren: () => import('./login-usuario/login-usuario.module')
      .then(m => m.LoginUsuarioPageModule)
  },
  {
    path: 'certificado-declaracao',
    loadChildren: () => import('./certificado-declaracao/certificado-declaracao.module').then( m => m.CertificadoDeclaracaoPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
