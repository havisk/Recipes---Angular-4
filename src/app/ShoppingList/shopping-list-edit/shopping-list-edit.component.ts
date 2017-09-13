import {Component, ElementRef, OnInit, ViewChild, EventEmitter, Output} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @Output() ingredientCreated = new EventEmitter<Ingredient>();

    constructor() { }

  ngOnInit() {
  }

  onAdd() {
      const ingName = this.nameInputRef.nativeElement.value;
      const ingAmount = this.amountInputRef.nativeElement.value;
      const newIngredient = new Ingredient(ingName, ingAmount);
      this.ingredientCreated.emit(newIngredient);
  }


}
