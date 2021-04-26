import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumsComponent } from './albums/albums.component';
import { UsersComponent } from './users/users.component';
import { UsersPostsComponent } from './users-posts/users-posts.component';
import { ReactFormComponent } from './react-form/react-form.component';

const routes: Routes = [
  {
    path:'',
    component:UsersComponent
  },
  {
    path:'posts',
    component:UsersPostsComponent
  },
  {
    path:'albums',
    component:AlbumsComponent
  },
  {
    path:'albums/:id',
    component:AlbumDetailsComponent
  },
  {
    path:'sp-chang',
    component:ReactFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
