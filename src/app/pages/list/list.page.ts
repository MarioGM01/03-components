import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any> | undefined;

  @ViewChild(IonList, { static: false }) ionlist!: IonList

  constructor( private dataService: DataService ) { }

  ngOnInit() {

    this.usuarios = this.dataService.getUsusarios();

  }

  favorite (user: any){
    console.log("fav");
    this.ionlist.closeSlidingItems();

  }

  share (user: any){
    console.log("share");
    this.ionlist.closeSlidingItems();
  
  }

  trash (user: any){
    console.log("trash", user.name);
    this.ionlist.closeSlidingItems();
    
  }


}
