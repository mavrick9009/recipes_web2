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
var recipe_service_1 = require("../shared/services/recipe.service");
var router_1 = require("@angular/router");
var RecipesDetailComponent = (function () {
    function RecipesDetailComponent(service, route) {
        this.service = service;
        this.route = route;
    }
    RecipesDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getRecipe(this.route.snapshot.params['id'])
            .subscribe(function (recipe) {
            console.log(recipe);
            _this.recipe = recipe;
        }, function (err) {
            console.log("err", err);
            _this.error = err.error;
        });
    };
    return RecipesDetailComponent;
}());
RecipesDetailComponent = __decorate([
    core_1.Component({
        providers: [recipe_service_1.RecipeService],
        selector: 'recipes_detail',
        templateUrl: './app/recipes/recipes_detail.component.html',
        styles: ["\n    img{\n      max-width:100%;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof recipe_service_1.RecipeService !== "undefined" && recipe_service_1.RecipeService) === "function" && _a || Object, router_1.ActivatedRoute])
], RecipesDetailComponent);
exports.RecipesDetailComponent = RecipesDetailComponent;
var _a;
//# sourceMappingURL=recipes_detail.component copy.js.map