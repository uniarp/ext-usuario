import { GuardGuard } from './guard/guard.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
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

    path: 'evento-participados/:codParticipante',
    loadChildren: () => import('./evento-participante/evento-participados/evento-participados.module').then( m => m.EventoParticipadosPageModule)
  },
  {
    path: 'consulta-participante',
    loadChildren: () => import('./evento-participante/consulta-Participante/consulta-participante/consulta-participante.module').then( m => m.ConsultaParticipantePageModule)
  },
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
    path: 'documento-gerar/:codInscricao/:codEvento',
    loadChildren: () => import('./Certificado-Declaração/documento-gerar/documento-gerar.module').then( m => m.DocumentoGerarPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
