import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/models/recipe';
import { RecipeService } from '../shared/services/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  providers: [RecipeService],
  selector: 'recipes_detail',
  templateUrl: './app/recipes/recipes_detail.component.html',
  styles: [`
    img{
      max-width:100%;
    }
  `]
})
export class RecipesDetailComponent implements OnInit {
  recipe: Recipe;
  error: string;
  constructor(private service: RecipeService,private route: ActivatedRoute) {}
  ngOnInit() {
    this.service.getRecipe(this.route.snapshot.params['id'])
      .subscribe(recipe =>{
        console.log(recipe);
        this.recipe = recipe;
      },
      err => {
        console.log("err",err);
        this.error = err.error;
      }
    );
  }
}
