import { Component, EventEmitter, OnInit, Output, 
  ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  standalone: false,
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent implements OnInit {
  // @viewChild('nameInput', { static: true }) nameInputRef: ElementRef;
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  // @viewChild('amountInput', { static: true }) amountInputRef: ElementRef;  
  @ViewChild('amountInput') amountInputRef!: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(){}

  ngOnInit(): void {
    
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);

  }
}
