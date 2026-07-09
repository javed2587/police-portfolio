import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaShowcaseComponent } from './media-showcase.component';

describe('MediaShowcaseComponent', () => {
  let component: MediaShowcaseComponent;
  let fixture: ComponentFixture<MediaShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaShowcaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MediaShowcaseComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
