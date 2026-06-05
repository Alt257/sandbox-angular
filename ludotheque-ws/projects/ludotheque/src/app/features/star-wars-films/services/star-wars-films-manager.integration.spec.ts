import { TestBed } from '@angular/core/testing';

import { StarWarsFilmsManager } from './star-wars-films-manager';
import { firstValueFrom } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';

describe('StarWarsFilmsManager integration', () => {
  let service: StarWarsFilmsManager;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });

    service = TestBed.inject(StarWarsFilmsManager);
  });

  it('should return films from SWAPI', async () => {
    const response = await firstValueFrom(service.getAll());

    expect(response.results.length).toBeGreaterThan(0);
    expect(response.results.some((film) => film.title === 'A New Hope')).toBeTruthy();
  });
});
