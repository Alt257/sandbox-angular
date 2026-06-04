import { TestBed } from '@angular/core/testing';

import { StarWarsFilmsManager } from './star-wars-films-manager';

describe('StarWarsFilmsManager', () => {
  let service: StarWarsFilmsManager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarWarsFilmsManager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
