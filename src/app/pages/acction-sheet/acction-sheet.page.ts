import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-acction-sheet',
  templateUrl: './acction-sheet.page.html',
  styleUrls: ['./acction-sheet.page.scss'],
})
export class AcctionSheetPage implements OnInit {
  result: any;

  constructor( private actionSheetCtrl: ActionSheetController ) { }

  ngOnInit() {
  }

  onClick(){
    this.presentActionSheet();
  };

   async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Example header',
      subHeader: 'Example subheader',
      backdropDismiss:false,
      translucent:true,
      buttons: [
        {
          text: 'Delete',
          icon: 'trash-outline',
          role: 'destructive',
          handler() {
           console.log("Delete action sheet");
            
          },
        },
        {
          text: 'Share',
          icon: 'share-outline',
          handler() {
            console.log("share action sheet");
            
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close-outline',
          cssClass: 'rojo',
          handler() {
           console.log(" cancel action sheet ");
            
          },
        },
      ],
    });
    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);
    
    
  }
}
