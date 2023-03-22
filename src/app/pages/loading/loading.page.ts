import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading!: HTMLIonLoadingElement;

  constructor( private loadingController: LoadingController ) { }

  ngOnInit() {
  }

  mostrarLoading(){
    this.presentLoading('hola Mundo')

    setTimeout(() => {
      this.loading.dismiss();
    }, 2500);

  }

  async presentLoading( message: string){
     this.loading = await this.loadingController.create({
      message,
    });

    await this.loading.present();


  }


}
