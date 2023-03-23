import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService],
})
export class RecipesComponent {
  selectedRecipe: Recipe;
}
