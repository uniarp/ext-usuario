import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
    path: 'evento-participados/:codParticipante',
    loadChildren: () => import('./evento-participante/evento-participados/evento-participados.module').then( m => m.EventoParticipadosPageModule)
  },
  {
    path: 'consulta-participante',
    loadChildren: () => import('./evento-participante/consulta-Participante/consulta-participante/consulta-participante.module').then( m => m.ConsultaParticipantePageModule)
  },  {
    path: 'qr-code',
    loadChildren: () => import('./evento-participante/qr-code/qr-code.module').then( m => m.QrCodePageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
