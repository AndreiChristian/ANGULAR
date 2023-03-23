import { Recipe } from './recipe.model';

export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(
      'test name',
      'test description',
      'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-05/Tomato-Pie_0256.jpg?itok=c63mh-z9'
    ),
    new Recipe(
      'second test',
      'second test description',
      'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-05/Tomato-Pie_0256.jpg?itok=c63mh-z9'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
