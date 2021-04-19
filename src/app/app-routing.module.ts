import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { UsersPostsComponent } from './users-posts/users-posts.component';

const routes: Routes = [
  {
    path:'',
    component:HelloComponent
  },
  {
    path:'posts',
    component:UsersPostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
