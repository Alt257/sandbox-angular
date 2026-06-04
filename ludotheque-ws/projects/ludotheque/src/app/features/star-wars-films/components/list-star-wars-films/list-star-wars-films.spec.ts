import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStarWarsFilms } from './list-star-wars-films';

describe('ListStarWarsFilms', () => {
  let component: ListStarWarsFilms;
  let fixture: ComponentFixture<ListStarWarsFilms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListStarWarsFilms],
    }).compileComponents();

    fixture = TestBed.createComponent(ListStarWarsFilms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
