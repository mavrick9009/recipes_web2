import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes_list.component';
import { RecipesDetailComponent } from './recipes/recipes_detail.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: RecipesListComponent
      },
      /*{
        path: 'create',
        component: UserCreateComponent
      },*/
      {
        path: ':id',
        component: RecipesDetailComponent
      },
    ]
  },
  {
    path: 'users',
    component: UsersComponent
    // children: [
    //   {
    //     path: '',
    //     component: UserListComponent
    //   },
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
