import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  id$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('id'))
  )

  photos$ = this.id$.pipe(
    filter(id => id !== null),
    switchMap(id => this.photosService.getPhotosByAlbumId(+id!))
  )

  constructor(
    private photosService: PhotosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
