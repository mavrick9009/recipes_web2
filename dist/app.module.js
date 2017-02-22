"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var user_service_1 = require("./shared/services/user.service");
var recipe_service_1 = require("./shared/services/recipe.service");
var users_component_1 = require("./users/users.component");
var recipes_component_1 = require("./recipes/recipes.component");
var recipes_list_component_1 = require("./recipes/recipes_list.component");
var recipes_detail_component_1 = require("./recipes/recipes_detail.component");
var home_component_1 = require("./home/home.component");
var header_component_1 = require("./common/header.component");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/catch");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            app_routing_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            users_component_1.UsersComponent,
            home_component_1.HomeComponent,
            header_component_1.HeaderComponent,
            recipes_component_1.RecipesComponent,
            recipes_list_component_1.RecipesListComponent,
            recipes_detail_component_1.RecipesDetailComponent
        ],
        providers: [
            user_service_1.UserService,
            recipe_service_1.RecipeService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map