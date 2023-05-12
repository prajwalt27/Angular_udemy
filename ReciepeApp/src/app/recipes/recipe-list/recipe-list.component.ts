import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'simply a path',
      'https://media-cdn.tripadvisor.com/media/photo-s/03/db/3e/dc/hotel-padma.jpg'
    ),
    new Recipe(
      'A test recipe',
      'simply a path',
      'https://media-cdn.tripadvisor.com/media/photo-s/03/db/3e/dc/hotel-padma.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
