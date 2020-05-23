import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandlerService {

  constructor(
    private alertController: AlertController
  ) { }

  async handleError(err: any) {
    const alert = await this.alertController.create({
      header: 'Ocorreu um Erro',
      message: 'Ocorreu um erro ao realizar a solicitação, aguarde um momento e tente novamente.',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          cssClass: 'secondary'
        }
      ]
    });
    await alert.present();
  }
}
