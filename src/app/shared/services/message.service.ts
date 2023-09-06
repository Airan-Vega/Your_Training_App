import { Injectable } from '@angular/core';
import { ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private toastController: ToastController) {}

  public async successToast({ message, duration, position }: ToastOptions) {
    const toast = await this.toastController.create({
      message,
      duration: duration || 3000,
      position: position || 'bottom',
      color: 'success',
    });

    await toast.present();
  }

  public async errorToast({ message, duration, position }: ToastOptions) {
    const toast = await this.toastController.create({
      message,
      duration: duration || 3000,
      position: position || 'bottom',
      color: 'danger',
    });

    await toast.present();
  }

  public async infoToast({ message, duration, position }: ToastOptions) {
    const toast = await this.toastController.create({
      message,
      duration: duration || 3000,
      position: position || 'bottom',
      color: 'secondary',
    });

    await toast.present();
  }
}
