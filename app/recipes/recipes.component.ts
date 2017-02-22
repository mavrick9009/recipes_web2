import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/models/recipe';
import { RecipeService } from '../shared/services/recipe.service';

@Component({
  providers: [RecipeService],
  selector: 'recipes',
  templateUrl: './app/recipes/recipes.component.html',
  styles: [`
    img{
      max-width:100%;
    }
  `]
})
export class RecipesComponent {
  
}
