import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/models/recipe';
import { RecipeService } from '../../shared/services/index';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'recipes_edit',
  templateUrl: './app/recipes/edit/recipes_edit.component.html',
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
export class RecipesEditComponent implements OnInit {
  recipe: Recipe;
  constructor(private service: RecipeService,private route: ActivatedRoute) {}
  ngOnInit() {
    this.service.getRecipe(this.route.snapshot.params['id'])
      .subscribe(recipe =>{
        this.recipe = recipe;
      },
      err => {

      }
    );
  }

  submit(){
    this.service.updateRecipe(this.recipe)
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
