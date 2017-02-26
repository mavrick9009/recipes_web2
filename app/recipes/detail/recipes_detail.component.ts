import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/models/index';
import { RecipesStepComponent } from './recipes_step.component';
import { RecipeService } from '../../shared/services/index';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'recipes_detail',
  templateUrl: './app/recipes/detail/recipes_detail.component.html',
  styles: [`
    img{
      max-width:100%;
    }
    .btn.edit-recipe{
      float:right;
    }
  `]
})
export class RecipesDetailComponent implements OnInit {
  recipe: Recipe;
  error: string;
  constructor(private service: RecipeService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.service.getRecipe(this.route.snapshot.params['id'])
      .subscribe(recipe =>{
        this.recipe = recipe;
      },
      err => {
        this.error = err.error;
      }
    );
  }
}
