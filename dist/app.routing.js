"use strict";
var router_1 = require("@angular/router");
var Recipes = require("./recipes/index");
var Users = require("./users/index");
var home_component_1 = require("./home/home.component");
var session_component_1 = require("./session/session.component");
exports.routes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'login',
        component: session_component_1.SessionComponent
    },
    {
        path: 'logout',
        component: session_component_1.SessionComponent
    },
    {
        path: 'recipes',
        component: Recipes.RecipesComponent,
        children: [
            {
                path: '',
                component: Recipes.RecipesListComponent
            },
            /*{
              path: 'create',
              component: UserCreateComponent
            },*/
            {
                path: ':id',
                component: Recipes.RecipesDetailComponent
            },
            {
                path: ':id/edit',
                component: Recipes.RecipesEditComponent
            },
        ]
    },
    {
        path: 'users',
        component: Users.UsersComponent,
        children: [
            {
                path: 'edit/:id',
                component: Users.UserEditComponent
            },
            {
                path: 'edit',
                component: Users.UserEditComponent
            },
        ]
    }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routing.js.map