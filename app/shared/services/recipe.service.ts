import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Recipe } from '../models/recipe';

@Injectable()
export class RecipeService {
  private recipesUrl: string = 'http://localhost:3000/api/recipes/';

  constructor(private http: Http) {}

  /**
   * Get all recipes
   */
  getRecipes(): Observable<Recipe[]> {
    return this.http.get(this.recipesUrl)
      .map(res => res.json());
  }

  /**
   * Get a single user
   */
  getRecipe(id): Observable<Recipe>  {
    return this.http.get(this.recipesUrl+id)
      .map(res => res.json())
      .catch(this.handleError);
  }

  // create a user

  // update a user

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

}
