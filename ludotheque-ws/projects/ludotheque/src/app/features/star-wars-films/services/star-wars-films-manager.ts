import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SwApiFilmsGetAllResponse } from '../models/star-wars-films';

@Injectable({
  providedIn: 'root',
})
export class StarWarsFilmsManager {
  private readonly httpClient = inject(HttpClient);

  getAll(): Observable<SwApiFilmsGetAllResponse> {
    return this.httpClient.get<SwApiFilmsGetAllResponse>('https://swapi.dev/api/films');
  }
}
