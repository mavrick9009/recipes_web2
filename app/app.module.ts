import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { AppComponent } from './app.component';

import { UserService } from './shared/services/user.service';
import { RecipeService } from './shared/services/recipe.service';
import { UsersComponent } from './users/users.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes_list.component';
import { RecipesDetailComponent } from './recipes/recipes_detail.component';
import { HomeComponent } from './home/home.component';
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
    UsersComponent,
    HomeComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent
  ],
  providers: [
    UserService,
    RecipeService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
