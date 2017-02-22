import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './shared/models/user';
import { UserService } from './shared/services/user.service';
import { HeaderComponent } from './common/header.component';
import mainStyles from "./main.styles";

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

  constructor(private service: UserService) {}

  ngOnInit() {
    /*this.service.getUsers()
      .subscribe(
        users => this.users = users
      );*/
  }
}
