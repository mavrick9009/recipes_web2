import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {UserService,AuthenticationService} from '../shared/services/index';
import { User } from '../shared/models/user';

@Component({
  selector: 'session-component',
  templateUrl: './app/session/session.component.html'
})
export class SessionComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    currentUser: User;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService) { }

    ngOnInit() {
        this.currentUser = this.userService.getCurrentUser();
        if(this.currentUser.exists()){
          // reset login status
          this.authenticationService.logout();
          
        }
          // get return url from route parameters or default to '/'
          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    console.log(error);
                    this.loading = false;
                });
    }
}
