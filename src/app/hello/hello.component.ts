import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit, OnDestroy {
  subscription = new Subscription()
  users: User[] = []
  counter = 0

  users$= this.userService.getUsers()

  constructor(
    private userService: UserService
  ) { }


  //imperative
  ngOnInit(): void {
    this.subscription.add(
      this.userService.getUsers().subscribe((users) => {
        this.users=users
      })
    )
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }

}
