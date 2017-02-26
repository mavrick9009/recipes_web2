import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as Recipes from "./recipes/index";
import * as Users from "./users/index";
import { HomeComponent } from './home/home.component';
import { SessionComponent } from './session/session.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: SessionComponent
  },
  {
    path: 'logout',
    component: SessionComponent
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
    //   {
    //     path: 'create',
    //     component: UserCreateComponent
    //   },
    //   {
    //     path: ':id',
    //     component: UserSingleComponent
    //   },
    //   {
    //     path: ':id/edit',
    //     component: UserEditComponent
    //   }
    // ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
