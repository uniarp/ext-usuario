import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

export type tipo = 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'light' | 'medium' | 'dark';

@Injectable({
  providedIn: 'root'
})

export class AlertsService {

  constructor(
    private toastController: ToastController
  ) { }

  async alertaToast(mensagem: string, tipo: tipo) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
      color: tipo
    });
    toast.present();
  }
}
