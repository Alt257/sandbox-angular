import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'ldk-star-wars-films',
  imports: [
    AsyncPipe,
  ],
  templateUrl: './star-wars-films.html',
  styleUrl: './star-wars-films.css',
})
export class StarWarsFilms {

  private readonly allFilmsResponse$
}
