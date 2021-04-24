import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(
    private http:HttpClient
  ) { }

  getAlbums(){
    return this.http.get<Album[]>(`https://jsonplaceholder.cypress.io/albums`)
  }
}
interface Album{
  "userId": number,
  "id": number,
  "title": string
}
