import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }


  getUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.cypress.io/users')
  }

  getUsersByName(name: string) {
    return this.getUsers().pipe(
      map(users => users.filter(user => user.name.includes(name)))
    )
  }



}



export interface User {
  "id": number,
  "name": string,
  "username": string,
  "email": string,
  "address": {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": {
      "lat": string,
      "lng": string
    }
  },
  "phone": string,
  "website": string,
  "company": {
    "name": string,
    "catchPhrase": string,
    "bs": string
  }
}
