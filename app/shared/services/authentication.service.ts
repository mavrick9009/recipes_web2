import { Injectable } from '@angular/core';
import { Http,  Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {UserService} from './index';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  private apiUrl: string = 'http://localhost:3000/api/sessions/';
    constructor(private http: Http) { }

    login(email: string, password: string) {
        return this.http.post(this.apiUrl, { email: email, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }
    validate() {
        return this.http.get(this.apiUrl+"validate", this.jwt())
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser && currentUser.token) {
        // remove user from local storage to log user out
        this.http.delete(this.apiUrl, this.jwt())
          .subscribe(() => {
            localStorage.removeItem('currentUser');
            location.reload();
          });
      }
    }

    jwt() {
         // create authorization header with jwt token
         let currentUser = JSON.parse(localStorage.getItem('currentUser'));
         if (currentUser && currentUser.token) {
             let headers = new Headers({ 'Authorization':  currentUser.token });
             return new RequestOptions({ headers: headers });
         }
     }

}
