// media-showcase.component.ts
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

type MediaTab = 'video' | 'ppt';

interface ShowcaseItem {
  title: string;
  event: string;
  videoSource: 'youtube' | 'drive';
  videoId: string;
  pptId: string; // Google Slides presentation ID
  activeTab: MediaTab;
}

@Component({
  selector: 'app-media-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-showcase.component.html',
  styleUrl: './media-showcase.component.css'
})
export class MediaShowcaseComponent {
  private sanitizer = inject(DomSanitizer);

  // 👉 Replace title / event / videoId / pptId per item.
  // videoId: same as before (YouTube Unlisted ID or Drive file ID)
  // pptId: from Google Slides — Share your Slides file as "Anyone with the link", then
  //        the ID sits between /d/ and /edit in the URL, e.g. docs.google.com/presentation/d/THIS_PART/edit
  items = signal<ShowcaseItem[]>([
    
    { title: 'Recruitment Drive Coverage', event: 'Police Bharti Process', videoSource: 'youtube',
      videoId: 'PASTE_YOUTUBE_ID', pptId: 'PASTE_GOOGLE_SLIDES_ID', activeTab: 'video' },
    { title: 'Uniform Store Documentation', event: 'Uniform Store', videoSource: 'youtube',
      videoId: 'PASTE_YOUTUBE_ID', pptId: 'PASTE_GOOGLE_SLIDES_ID', activeTab: 'video' },
    { title: 'Cricket Tournament Recap', event: 'Cricket Match Coverage', videoSource: 'drive',
      videoId: 'PASTE_DRIVE_FILE_ID', pptId: '113454101933429371010', activeTab: 'video' }
  ]);

  setTab(item: ShowcaseItem, tab: MediaTab) {
    this.items.update(list =>
      list.map(i => i === item ? { ...i, activeTab: tab } : i)
    );
  }

  getVideoUrl(item: ShowcaseItem): SafeResourceUrl {
    const url = item.videoSource === 'youtube'
      ? `https://www.youtube.com/embed/${item.videoId}`
      : `https://drive.google.com/file/d/${item.videoId}/preview`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getPptUrl(item: ShowcaseItem): SafeResourceUrl {
    const url = `https://docs.google.com/presentation/d/${item.pptId}/embed?start=false&loop=false&delayms=3000`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}