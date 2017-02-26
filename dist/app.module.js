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
var Services = require("./shared/services/index");
var Users = require("./users/index");
var Recipes = require("./recipes/index");
var home_component_1 = require("./home/home.component");
var session_component_1 = require("./session/session.component");
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
            Users.UsersComponent,
            Users.UserEditComponent,
            home_component_1.HomeComponent,
            session_component_1.SessionComponent,
            header_component_1.HeaderComponent,
            Recipes.RecipesComponent,
            Recipes.RecipesListComponent,
            Recipes.RecipesDetailComponent,
            Recipes.RecipesEditComponent,
            Recipes.RecipesStepComponent
        ],
        providers: [
            Services.UserService,
            Services.RecipeService,
            Services.AuthenticationService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map