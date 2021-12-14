import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../assignements/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  constructor(private http:HttpClient) { }
  url = "http://localhost:8010/api/users";
  logIn(user:User) {
    this.loggedIn = false;
    return this.http.get<User>(this.url+"/"+user.username);
  }

  logOut() {
    this.loggedIn = false;
  }

  isAdmin() {
    return new Promise((resolve, reject) => {
      resolve(this.loggedIn);
    });
  }
}
