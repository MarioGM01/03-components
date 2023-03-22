import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor( private alertCtrl: AlertController ) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlertMultipleButtons(){
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: [
      {
        text: 'Ok',
        handler:() => {
          console.log("click en ok");
          
        },
      },
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'rojo',
        handler:() => {
          console.log("click en ok");

        },
      }
    ],
    });
    await alert.present();
  }


  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Please enter your info',
      
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name',
        },
        {
          name:'Nickname',
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          name:'Number',
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          name:'Textarea',
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
      buttons: [
        {
          text: 'Ok',
          handler:(data:any) => {
            console.log(data);
            
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo',
          handler:() => {
            console.log("click en ok");
  
          },
        }
      ],
    });

    await alert.present();
  }


}
