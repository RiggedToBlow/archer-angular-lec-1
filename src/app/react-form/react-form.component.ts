import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { debounceTime, filter, startWith, switchMap } from 'rxjs/operators';
import { ReactService } from '../react.service';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.scss']
})
export class ReactFormComponent implements OnInit {

  userName = new FormControl('')

  data$ = this.userName.valueChanges.pipe(
    debounceTime(500),
    startWith(''),
    filter((value: string) => !value.match(/[0-9]/)),
    switchMap(searchString => this.reactService.getData()),
  )
  form=this.fb.group({
    val: ['', [Validators.required]],
    ask: ['', Validators.required],
    bid: ['', [Validators.required]],
  })
  constructor(
    private reactService:ReactService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
  }
  changIt(){
    console.log(this.form.valid)
    if(this.form.valid){
      const user = this.form.value
      console.log(user)
      //make request for user
    }
  }

}
