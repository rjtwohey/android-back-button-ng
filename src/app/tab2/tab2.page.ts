import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private readonly router: Router, private toastController: ToastController) { }

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
