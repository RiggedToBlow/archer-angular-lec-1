import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {


  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }

  getPostsWithUsers() {
    return combineLatest([
      this.getPosts(),
      this.userService.getUsers()
    ])
      .pipe(
        map(([posts, users]) => posts
          .map(post => ({
            ...post,
            user: users.find(user => user.id === post.userId)
          })))
      )
  }

}

interface Post {
  "userId": number,
  "id": number,
  "title": string,
  "body": string,
}
