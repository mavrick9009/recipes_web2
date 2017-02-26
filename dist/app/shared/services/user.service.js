"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var user_1 = require("../models/user");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:3000/api/users/';
    }
    UserService.prototype.getCurrentUser = function () {
        var currentUser = new user_1.User(JSON.parse(localStorage.getItem('currentUser')));
        return currentUser;
    };
    /**
     * Get all users
     */
    UserService.prototype.getUsers = function () {
        return this.http.get(this.apiUrl)
            .map(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    /**
     * Get a single user
     */
    UserService.prototype.getUser = function () {
        return this.http.get('http://example.com')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // create a user
    // update a user
    UserService.prototype.updateUser = function (userInfo) {
        return this.http.put(this.apiUrl + userInfo.id, { user: userInfo }, this.jwt())
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        })
            .catch(this.handleError);
    };
    // delete a user
    /**
     * Handle any errors from the API
     */
    UserService.prototype.handleError = function (err) {
        var errMessage;
        if (err instanceof http_1.Response) {
            var body = err.json() || '';
            var error_1 = body.error || JSON.stringify(body);
            errMessage = err.status + " - " + err.statusText + " || ''} " + error_1;
        }
        else {
            errMessage = err.message ? err.message : err.toString();
        }
        return Observable_1.Observable.throw(errMessage);
    };
    UserService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'Authorization': currentUser.token });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map