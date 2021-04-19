import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-users-posts',
  templateUrl: './users-posts.component.html',
  styleUrls: ['./users-posts.component.scss']
})
export class UsersPostsComponent implements OnInit {

  postsWithUsers$ = this.postService.getPostsWithUsers()

  constructor(
    private postService:PostsService
  ) { }

  ngOnInit(): void {
  }

}
