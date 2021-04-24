import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class PhotosService {

  constructor(
    private http: HttpClient
  ) { }

  getPhotos() {
    return this.http.get<Photo[]>(`https://jsonplaceholder.cypress.io/photos`)
  }

  getPhotosByAlbumId(id: number) {
    return this.getPhotos().pipe(
      map(photos => photos.filter(photo => photo.albumId === id))
    )
  }

}


interface Photo {
  "albumId": number,
  "id": number,
  "title": string,
  "url": string,
  "thumbnailUrl": string,
}
