import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  constructor(private readonly router: Router, private toastController: ToastController ) {}

    async presentToast(options: any) {
      const toast = await this.toastController.create(options);
      await toast.present();
    }

    ionViewDidEnter() {
      document.addEventListener('ionBackButton',() => {
        console.log('back button clicked')
        window.history.back();
      });
    }

}
