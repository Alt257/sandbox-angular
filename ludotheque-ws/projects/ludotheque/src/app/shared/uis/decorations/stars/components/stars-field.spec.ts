import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsField } from './stars-field';

describe('StarsField', () => {
  let component: StarsField;
  let fixture: ComponentFixture<StarsField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarsField],
    }).compileComponents();

    fixture = TestBed.createComponent(StarsField);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
