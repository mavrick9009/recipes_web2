import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/models/recipe';
import { RecipeService } from '../../shared/services/recipe.service';

@Component({
  providers: [RecipeService],
  selector: 'recipes_list',
  templateUrl: './app/recipes/list/recipes_list.component.html',
  styles: [`
    img{
      max-width:100%;
    }
  `]
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];
  constructor(private service: RecipeService) {}
  ngOnInit() {
    this.service.getRecipes()
      .subscribe(recipes =>{
        console.log(recipes);
        this.recipes = recipes;
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
