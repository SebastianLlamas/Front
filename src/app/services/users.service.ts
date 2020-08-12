import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private URL = 'http://localhost:3000/';

  constructor(
    private http: HttpClient
  ) { }

  getUsers(){
    return this.http.get(this.URL + 'users');
  }
  addUser(user){
    return this.http.post<any>(this.URL + 'signup', user);
  }

  setUser(user){
    this.http.post<any>(this.URL + '', user);
  }
}
