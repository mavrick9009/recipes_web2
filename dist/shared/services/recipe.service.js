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
require("rxjs/add/observable/throw");
var RecipeService = (function () {
    function RecipeService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:3000/api/recipes/';
    }
    /**
     * Get all recipes
     */
    RecipeService.prototype.getRecipes = function () {
        return this.http.get(this.apiUrl)
            .map(function (res) { return res.json(); });
    };
    /**
     * Get a single user
     */
    RecipeService.prototype.getRecipe = function (id) {
        return this.http.get(this.apiUrl + id, this.jwt())
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // create a user
    // update a recipe
    RecipeService.prototype.updateRecipe = function (recipe) {
        return this.http.put(this.apiUrl + recipe.id, { recipe: recipe }, this.jwt())
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // delete a user
    /**
     * Handle any errors from the API
     */
    RecipeService.prototype.handleError = function (err) {
        var errMessage;
        if (err instanceof http_1.Response) {
            var body = err.json() || '';
            var error = body.error || JSON.stringify(body);
            errMessage = "" + error;
        }
        else {
            errMessage = err.message ? err.message : err.toString();
        }
        return Observable_1.Observable.throw(errMessage);
        //return errMessage;
    };
    RecipeService.prototype.toRecipe = function (recipe) {
        return {
            id: recipe.id,
            name: recipe.name,
            description: recipe.description,
            image: recipe.image
        };
    };
    RecipeService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'Authorization': currentUser.token });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    return RecipeService;
}());
RecipeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RecipeService);
exports.RecipeService = RecipeService;
//# sourceMappingURL=recipe.service.js.map