import { Component, input } from '@angular/core';
import { StarWarsFilms } from '../../../../pages/star-wars-films/star-wars-films';
import { StarWarsFilm } from '../../models/star-wars-film';

@Component({
  selector: 'ldk-list-star-wars-films',
  imports: [],
  templateUrl: './list-star-wars-films.html',
  styleUrl: './list-star-wars-films.css',
})
export class ListStarWarsFilms {
  readonly films = input.required<StarWarsFilm[]>();
}
