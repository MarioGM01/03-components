import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {

  personajes: string[] = ["acuaman","superman","batman"];

  reorder:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  doReorder( event:any ){
    event.detail.complete();

    const itemMover = this.personajes.splice( event.detail.from, 1 )[0]

    this.personajes.splice( event.detail.to, 0, itemMover );

    console.log(this.personajes);
    

  }

}
