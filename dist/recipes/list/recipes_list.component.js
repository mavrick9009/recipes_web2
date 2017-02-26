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
var recipe_service_1 = require("../../shared/services/recipe.service");
var RecipesListComponent = (function () {
    function RecipesListComponent(service) {
        this.service = service;
    }
    RecipesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getRecipes()
            .subscribe(function (recipes) {
            console.log(recipes);
            _this.recipes = recipes;
        }, function (err) {
            console.log(err);
        });
        /*this.recipes= [
          {id:1, name: "brownies"},
          {id:2, name: "cookies"},
          {id:3, name: "cake"}
        ];*/
    };
    return RecipesListComponent;
}());
RecipesListComponent = __decorate([
    core_1.Component({
        providers: [recipe_service_1.RecipeService],
        selector: 'recipes_list',
        templateUrl: './app/recipes/list/recipes_list.component.html',
        styles: ["\n    img{\n      max-width:100%;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [recipe_service_1.RecipeService])
], RecipesListComponent);
exports.RecipesListComponent = RecipesListComponent;
//# sourceMappingURL=recipes_list.component.js.map