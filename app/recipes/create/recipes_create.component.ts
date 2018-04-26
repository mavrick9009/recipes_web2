import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/models/recipe';
import { RecipeService } from '../../shared/services/index';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'recipes_create',
  templateUrl: './app/recipes/create/recipes_create.component.html',
  styles: [`
    img{
      max-width:100%;
    }
    .floating-button-container{
      position: fixed;
      bottom: 10px;
      right: 10px;
    }
    .floating-button-container button{
      float: left;
      clear: left;
      width: 100%;
      margin: 5px 0px;
    }
  `]
})
export class RecipesCreateComponent implements OnInit {
  recipe: Recipe;
  constructor(private service: RecipeService,private route: ActivatedRoute) {}
  ngOnInit() {
    this.recipe = new Recipe;
  }

  submit(){
    this.service.createRecipe(this.recipe)
      .subscribe(recipe =>{
        this.recipe = recipe;
      },
      err => {
        console.log(err);
      }
    );
  }

  cancel(){

  }
}
