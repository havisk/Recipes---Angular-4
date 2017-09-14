import {EventEmitter, Injectable} from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../ShoppingList/shopping-list.service';


@Injectable()
export class RecipesService {

  recipeSelected = new EventEmitter<Recipe>();

  private  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test', 'http://cdn3.foodviva.com/' +
      'static-content/food-images/chinese-recipes/baby-corn-manchurian/baby-corn-manchurian-250.jpg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 30)
    ]),
    new Recipe('Test Recipe', 'This say what test', 'http://cdn3.foodviva.com/' +
      'static-content/food-images/chinese-recipes/baby-corn-manchurian/baby-corn-manchurian-250.jpg',
    [
      new Ingredient('Shrimp', 10),
      new Ingredient('Pico', 30)
    ]),
  ];

  constructor(private shoppingListService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
