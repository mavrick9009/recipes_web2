import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Recipe } from '../models/recipe';

@Injectable()
export class RecipeService {
  private apiUrl: string = 'http://localhost:3000/api/recipes/';

  constructor(private http: Http) {}

  /**
   * Get all recipes
   */
  getRecipes(): Observable<Recipe[]> {
    return this.http.get(this.apiUrl)
      .map(res => res.json());
  }

  /**
   * Get a single user
   */
  getRecipe(id): Observable<Recipe>  {
    return this.http.get(this.apiUrl+id, this.jwt())
      .map(res => res.json())
      .catch(this.handleError);
  }

  // create a user

  // update a recipe

  updateRecipe(recipe:Recipe) {
    return this.http.put(this.apiUrl+recipe.id,{recipe: recipe}, this.jwt())
    .map(res => res.json())
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
      errMessage = `${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }

    return Observable.throw(errMessage);
    //return errMessage;
  }
  private toRecipe(recipe): Recipe {
    return {
      id: recipe.id,
      name: recipe.name,
      description: recipe.description,
      image: recipe.image
    };
  }
  private jwt() {
       // create authorization header with jwt token
       let currentUser = JSON.parse(localStorage.getItem('currentUser'));
       if (currentUser && currentUser.token) {
           let headers = new Headers({ 'Authorization':  currentUser.token });
           return new RequestOptions({ headers: headers });
       }
   }
}
