import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HeaderComponent } from './common/header.component';
import mainStyles from "./main.styles";
import {UserService} from './shared/services/index';
import { User } from './shared/models/user';

@Component({
  selector: 'main-app',
  template: `

    <main-header> </main-header>
    <div class="main">
      <router-outlet></router-outlet>
    </div>
    <footer>  </footer>
  `,
  styles:[mainStyles]
})
export class AppComponent implements OnInit {
    currentUser: User;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.currentUser = this.userService.getCurrentUser();
    }
}
