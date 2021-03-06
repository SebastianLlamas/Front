import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'https://simvu.herokuapp.com/api/sim/';
  constructor(
    private http: HttpClient,
    private router: Router) { }


  signIn(user){
    return this.http.post<any>(this.URL + 'signin', user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}

