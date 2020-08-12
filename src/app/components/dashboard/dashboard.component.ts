import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


    public user: User;
  constructor(
    private userService: UsersService
  ) {
    this.user = new User('', '', '', '', '', '');
  }

  ngOnInit(): void {
  }


  closeModal(id){
    document.getElementById(id).style.display = 'none';

  }
  modal(id){
    document.getElementById(id).style.display = 'block';
  }
}
