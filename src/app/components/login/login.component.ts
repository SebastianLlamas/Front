import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router, Params} from '@angular/router';
import { User } from '../../models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public user: User;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.user = new User('', '', '', '', '', '');
  }

  ngOnInit(): void {
  }

  singIn(){
    console.log(this.user);
    this.authService.signIn(this.user).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', res.user);
        this.router.navigate(['/home']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
