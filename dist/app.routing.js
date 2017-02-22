"use strict";
var router_1 = require("@angular/router");
var users_component_1 = require("./users/users.component");
var recipes_component_1 = require("./recipes/recipes.component");
var recipes_list_component_1 = require("./recipes/recipes_list.component");
var recipes_detail_component_1 = require("./recipes/recipes_detail.component");
var home_component_1 = require("./home/home.component");
exports.routes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'recipes',
        component: recipes_component_1.RecipesComponent,
        children: [
            {
                path: '',
                component: recipes_list_component_1.RecipesListComponent
            },
            /*{
              path: 'create',
              component: UserCreateComponent
            },*/
            {
                path: ':id',
                component: recipes_detail_component_1.RecipesDetailComponent
            },
        ]
    },
    {
        path: 'users',
        component: users_component_1.UsersComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routing.js.map