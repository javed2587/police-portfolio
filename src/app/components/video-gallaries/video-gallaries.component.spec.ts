import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGallariesComponent } from './video-gallaries.component';

describe('VideoGallariesComponent', () => {
  let component: VideoGallariesComponent;
  let fixture: ComponentFixture<VideoGallariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoGallariesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VideoGallariesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
