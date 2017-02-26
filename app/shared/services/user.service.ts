import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class UserService {
  private apiUrl: string = 'http://localhost:3000/api/users/';

  constructor(private http: Http) {}

  getCurrentUser() {
    let currentUser = new User(JSON.parse(localStorage.getItem('currentUser')));
    return currentUser;
  }
  /**
   * Get all users
   */
  getUsers(): Observable<User[]> {
    return this.http.get(this.apiUrl)
      .map(res => res.json().data)
      .catch(this.handleError);
  }

  /**
   * Get a single user
   */
  getUser() {
    return this.http.get('http://example.com')
      .map(res => res.json())
      .catch(this.handleError);
  }

  // create a user

  // update a user
  updateUser(userInfo:User) {
    return this.http.put(this.apiUrl+userInfo.id,{user: userInfo}, this.jwt())
    .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
        }
    })
    .catch(this.handleError);
  }
  // delete a user

  /**
   * Handle any errors from the API
   */
  private handleError(err) {
    let errMessage: string;

    if (err instanceof Response) {
      let body   = err.json() || '';
      let error  = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText} || ''} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }

    return Observable.throw(errMessage);
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
