import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { firstValueFrom } from 'rxjs';

import { StarWarsFilmsManager } from './star-wars-films-manager';
import { SwApiFilmsGetAllResponse } from '../models/star-wars-film';

describe('StarWarsFilmsManager', () => {
  let service: StarWarsFilmsManager;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClientTesting()],
    });

    service = TestBed.inject(StarWarsFilmsManager);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call SWAPI films endpoint with GET method', async () => {
    const mockResponse: SwApiFilmsGetAllResponse = {
      results: [
        {
          episode_id: 4,
          title: 'A New Hope',
        },
      ],
    };

    const responsePromise = firstValueFrom(service.getAll());

    const request = httpTestingController.expectOne('https://swapi.dev/api/films');

    expect(request.request.method).toBe('GET');

    request.flush(mockResponse);

    const response = await responsePromise;

    expect(response).toEqual(mockResponse);
  });

  it('should return films from mocked API response', async () => {
    const mockResponse: SwApiFilmsGetAllResponse = {
      results: [
        {
          episode_id: 4,
          title: 'A New Hope',
        },
        {
          episode_id: 5,
          title: 'The Empire Strikes Back',
        },
      ],
    };

    const responsePromise = firstValueFrom(service.getAll());

    const request = httpTestingController.expectOne('https://swapi.dev/api/films');

    expect(request.request.method).toBe('GET');

    request.flush(mockResponse);

    const response = await responsePromise;

    expect(response.results.length).toBe(2);
    expect(response.results[0].title).toBe('A New Hope');
    expect(response.results[0].episode_id).toBe(4);
    expect(response.results[1].title).toBe('The Empire Strikes Back');
    expect(response.results[1].episode_id).toBe(5);
  });

  it('should return an empty results array when API response has no films', async () => {
    const mockResponse: SwApiFilmsGetAllResponse = {
      results: [],
    };

    const responsePromise = firstValueFrom(service.getAll());

    const request = httpTestingController.expectOne('https://swapi.dev/api/films');

    expect(request.request.method).toBe('GET');

    request.flush(mockResponse);

    const response = await responsePromise;

    expect(response.results).toEqual([]);
  });
});
