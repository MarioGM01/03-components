import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinit',
  templateUrl: './infinit.page.html',
  styleUrls: ['./infinit.page.scss'],
})
export class InfinitPage implements OnInit {
  
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll!: IonInfiniteScroll;
  
  data: any[] = Array(20);


  constructor() { }

  ngOnInit() {
  }

  loadData(event:any){

    // console.log(event);
    
    setTimeout(() => {

      if (this.data.length > 50) {
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return;
      }
      
      const nuevoArray = Array(20);

      this.data.push( ...nuevoArray );


      this.infiniteScroll.complete();

    }, 1500);
  }

}
