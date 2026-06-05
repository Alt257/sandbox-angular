import {Component, inject, signal} from '@angular/core';
import {StarWarsFilmsManager} from '../../features/star-wars-films/services/star-wars-films-manager';
import {AsyncPipe} from '@angular/common';
import { ListStarWarsFilms } from '../../features/star-wars-films/components/list-star-wars-films/list-star-wars-films';

@Component({
  selector: 'ldk-star-wars-films',
  imports: [
    AsyncPipe,
    ListStarWarsFilms,
  ],
  templateUrl: './star-wars-films.html',
  styleUrl: './star-wars-films.css',
})
export class StarWarsFilms {
  private readonly starWarsFilmsManager = inject(StarWarsFilmsManager);

  protected readonly allFilmsResponse$ = this.starWarsFilmsManager.getAll();
  protected readonly title = signal('Films');
}
