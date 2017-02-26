import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/services/index';
import { User } from '../shared/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'main-header',
  templateUrl: './app/common/header.component.html'
})
export class HeaderComponent implements OnInit {
  currentUser: User;

  constructor(private userService: UserService,private router: Router) {
    router.events.subscribe((val) => {
        this.currentUser = this.userService.getCurrentUser();
    });
  }

  ngOnInit() {
      this.currentUser = this.userService.getCurrentUser();
  }
}
