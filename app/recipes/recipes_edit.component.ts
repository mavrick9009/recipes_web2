import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/models/recipe';
import { RecipeService } from '../shared/services/recipe.service';

@Component({
  providers: [RecipeService],
  selector: 'recipes_edit',
  templateUrl: './app/recipes/recipes_edit.component.html',
  styles: [`
    img{
      max-width:100%;
    }
  `]
})
export class RecipesEditComponent implements OnInit {
  recipe: Recipe;
  constructor(private service: RecipeService) {}
  ngOnInit() {
    this.service.getRecipe(2)
      .subscribe(recipe =>{
        console.log(recipe);
        this.recipe = recipe;
      },
      err => {
        console.log(err);
      }
    );
    /*this.recipes= [
      {id:1, name: "brownies"},
      {id:2, name: "cookies"},
      {id:3, name: "cake"}
    ];*/

  }
}
