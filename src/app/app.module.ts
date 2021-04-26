import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersPostsComponent } from './users-posts/users-posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component'
import { PhotosService } from './photos.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactFormComponent } from './react-form/react-form.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersPostsComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    ReactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    PhotosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
