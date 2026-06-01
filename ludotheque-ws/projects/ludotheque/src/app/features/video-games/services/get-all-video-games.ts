import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {VideoGame, VideoGameResponse} from '../models/video-game';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetAllVideoGames {
  private readonly httpClient = inject(HttpClient);

  getAll(): Observable<VideoGameResponse> {
    return this.httpClient.get<VideoGameResponse>('https://swapi.dev/api/films');
  }
}
