import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DutiesComponent } from './duties.component';

describe('DutiesComponent', () => {
  let component: DutiesComponent;
  let fixture: ComponentFixture<DutiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DutiesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DutiesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
