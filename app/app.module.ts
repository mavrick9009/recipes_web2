import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { AppComponent } from './app.component';

import * as Services from './shared/services/index';
import * as Users from './users/index';
import * as Recipes from "./recipes/index";
import { HomeComponent } from './home/home.component';
import { SessionComponent } from './session/session.component';
import { HeaderComponent } from './common/header.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    Users.UsersComponent,
    Users.UserEditComponent,
    HomeComponent,
    SessionComponent,
    HeaderComponent,
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
  bootstrap: [ AppComponent ]
})
export class AppModule {}
