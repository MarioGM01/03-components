import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albumes: any[] = [];
  textoBuscar: string =''

  constructor( private DataService: DataService ) { }

  ngOnInit() {
    this.DataService.getAlbumes().subscribe( albumes => {
      console.log(albumes);
      this.albumes = albumes;
    })
  }

  sonSearchChange( event: any ){
    this.textoBuscar = event.detail.value;
  }

}
