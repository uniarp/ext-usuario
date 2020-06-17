import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login-usuario', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inscricao',
    loadChildren: () => import('./inscricao/inscricao/inscricao.module').then( m => m.InscricaoPageModule)
  },
  {
    path: 'participante-cadastro',
    loadChildren: () => import('./participante/participante-cadastro/participante-cadastro.module').then( m => m.ParticipanteCadastroPageModule)
  },
  {
    path: 'login-usuario',
    loadChildren: () => import('./login-usuario/login-usuario.module').then( m => m.LoginUsuarioPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
