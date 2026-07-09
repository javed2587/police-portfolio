import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterGallriesComponent } from './poster-gallries.component';

describe('PosterGallriesComponent', () => {
  let component: PosterGallriesComponent;
  let fixture: ComponentFixture<PosterGallriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosterGallriesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PosterGallriesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
