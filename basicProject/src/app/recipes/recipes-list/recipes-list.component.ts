import { Component } from '@angular/core';

import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent {
  recipes: Recipe[] = [];

  constructor() {}
}
