import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersPostsComponent } from './users-posts/users-posts.component'
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    UsersPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
