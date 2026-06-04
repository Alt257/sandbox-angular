import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StarWarsFilms, StarWarsFilmsSwApiResponse } from '../models/star-wars-films';

@Injectable({
  providedIn: 'root',
})
export class StarWarsFilmsManager {
  private readonly httpClient = inject(HttpClient);

  getAll(): Observable<StarWarsFilmsSwApiResponse> {
    return this.httpClient.get<StarWarsFilmsSwApiResponse>(
      'https://swapi.dev/api/films',
    );
  }
}
