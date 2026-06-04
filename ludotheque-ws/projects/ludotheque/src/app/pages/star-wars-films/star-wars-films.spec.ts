import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsFilms } from './star-wars-films';

describe('StarWarsFilms', () => {
  let component: StarWarsFilms;
  let fixture: ComponentFixture<StarWarsFilms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarWarsFilms],
    }).compileComponents();

    fixture = TestBed.createComponent(StarWarsFilms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
