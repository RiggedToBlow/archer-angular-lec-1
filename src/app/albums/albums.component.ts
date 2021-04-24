import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums$ = this.albumsService.getAlbums()

  constructor(
    private albumsService:AlbumsService
  ) { }

  ngOnInit(): void {
  }

}
