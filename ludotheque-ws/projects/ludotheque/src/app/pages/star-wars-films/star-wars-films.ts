import {Component, inject, signal} from '@angular/core';
import {StarWarsFilmsManager} from '../../features/star-wars-films/services/star-wars-films-manager';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'ldk-star-wars-films',
  imports: [
    AsyncPipe,
  ],
  templateUrl: './star-wars-films.html',
  styleUrl: './star-wars-films.css',
})
export class StarWarsFilms {
  private readonly starWarsFilmsManager = inject(StarWarsFilmsManager);

  protected readonly allFilmsResponse$ = this.starWarsFilmsManager.getAll();
  protected readonly title = signal('Films');
}
