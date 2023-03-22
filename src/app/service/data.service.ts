import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) {  }

  getUsusarios(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpt(){
    return this.http.get<Componente[]>('/assets/data/menu-opciones.json');
  }

  getAlbumes(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getHeroes(){
    return this.http.get<Componente[]>('/assets/data/superheroes.json')
    .pipe(
      delay( 1500 )
    );
  }


}
