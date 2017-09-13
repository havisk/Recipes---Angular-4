import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test', 'http://cdn3.foodviva.com/' +
      'static-content/food-images/chinese-recipes/baby-corn-manchurian/baby-corn-manchurian-250.jpg'),
    new Recipe('Test Recipe', 'This say what test', 'http://cdn3.foodviva.com/' +
      'static-content/food-images/chinese-recipes/baby-corn-manchurian/baby-corn-manchurian-250.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);

  }

}
