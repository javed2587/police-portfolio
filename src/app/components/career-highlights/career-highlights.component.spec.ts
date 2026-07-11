import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerHighlightsComponent } from './career-highlights.component';

describe('CareerHighlightsComponent', () => {
  let component: CareerHighlightsComponent;
  let fixture: ComponentFixture<CareerHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerHighlightsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CareerHighlightsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
