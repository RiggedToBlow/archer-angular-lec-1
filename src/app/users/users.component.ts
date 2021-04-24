import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { concatMap, debounceTime, exhaustMap, filter, startWith, switchMap, tap } from 'rxjs/operators';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-hello',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  // users search
  userName = new FormControl('')

  users$ = this.userName.valueChanges.pipe(
    debounceTime(500),
    startWith(''),
    filter((value: string) => !value.match(/[0-9]/)),
    switchMap(searchString => this.userService.getUsersByName(searchString)),
  )

  // user create form
  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    address: ['', Validators.pattern(/,/)],
    number: ['', [Validators.required, Validators.pattern(/[0-9]/)]],
  })

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
  }

  ngOnDestroy() {

  }

  onUserCreate(){
    console.log(this.form.valid)
    if(this.form.valid){
      const user = this.form.value
      console.log(user)
      //make request for user
    }
  }

}
