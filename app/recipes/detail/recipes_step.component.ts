import { Component, Input } from '@angular/core';
import { Step } from '../../shared/models/step';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'recipes-step',
  templateUrl: './app/recipes/detail/recipes_step.component.html',

})
export class RecipesStepComponent{
  @Input('step') step: Step;
}
