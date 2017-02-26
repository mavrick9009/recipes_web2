import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/services/index';
import { User } from '../../shared/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'user-edit',
  templateUrl: './app/users/edit/user_edit.component.html'
})
export class UserEditComponent implements OnInit {
  currentUser: User;
  userInfo: User;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
      this.currentUser = this.userService.getCurrentUser();

      this.userInfo = Object.assign(this.currentUser);
  }
  submit(){
    this.userService.updateUser(this.userInfo)
      .subscribe(user =>{
        //this.recipes = recipes;
        this.router.navigate(['users','edit']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
