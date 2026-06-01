import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVideoGame } from './table-video-game';

describe('TableVideoGame', () => {
  let component: TableVideoGame;
  let fixture: ComponentFixture<TableVideoGame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableVideoGame],
    }).compileComponents();

    fixture = TestBed.createComponent(TableVideoGame);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
