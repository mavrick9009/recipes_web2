"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var step_1 = require("../../shared/models/step");
var RecipesStepComponent = (function () {
    function RecipesStepComponent() {
    }
    return RecipesStepComponent;
}());
__decorate([
    core_1.Input('step'),
    __metadata("design:type", step_1.Step)
], RecipesStepComponent.prototype, "step", void 0);
RecipesStepComponent = __decorate([
    core_1.Component({
        selector: 'recipes-step',
        templateUrl: './app/recipes/detail/recipes_step.component.html',
    })
], RecipesStepComponent);
exports.RecipesStepComponent = RecipesStepComponent;
//# sourceMappingURL=recipes_step.component.js.map