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
var index_1 = require("../../shared/services/index");
var router_1 = require("@angular/router");
var RecipesEditComponent = (function () {
    function RecipesEditComponent(service, route) {
        this.service = service;
        this.route = route;
    }
    RecipesEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getRecipe(this.route.snapshot.params['id'])
            .subscribe(function (recipe) {
            _this.recipe = recipe;
        }, function (err) {
        });
    };
    RecipesEditComponent.prototype.submit = function () {
        var _this = this;
        this.service.updateRecipe(this.recipe)
            .subscribe(function (recipe) {
            _this.recipe = recipe;
        }, function (err) {
            console.log(err);
        });
    };
    RecipesEditComponent.prototype.cancel = function () {
    };
    return RecipesEditComponent;
}());
RecipesEditComponent = __decorate([
    core_1.Component({
        selector: 'recipes_edit',
        templateUrl: './app/recipes/edit/recipes_edit.component.html',
        styles: ["\n    img{\n      max-width:100%;\n    }\n    .floating-button-container{\n      position: fixed;\n      bottom: 10px;\n      right: 10px;\n    }\n    .floating-button-container button{\n      float: left;\n      clear: left;\n      width: 100%;\n      margin: 5px 0px;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [index_1.RecipeService, router_1.ActivatedRoute])
], RecipesEditComponent);
exports.RecipesEditComponent = RecipesEditComponent;
//# sourceMappingURL=recipes_edit.component.js.map