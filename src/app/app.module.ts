import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './Recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './Recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './Recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './ShoppingList/shopping-list.component';
import { ShoppingListEditComponent } from './ShoppingList/shopping-list-edit/shopping-list-edit.component';
import {HeaderComponent} from './Header/header.component';
import {RecipesComponent} from './Recipes/recipes.component';



@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    HeaderComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
