import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface VideoItem {
  title: string;
  event: string;
  source: 'youtube' | 'drive';
  id: string;
}

@Component({
  selector: 'app-video-gallaries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-gallaries.component.html',
  styleUrl: './video-gallaries.component.css'
})
export class VideoGallariesComponent {
  private sanitizer = inject(DomSanitizer);

  // 👉 REPLACE these with your real videos.
  // youtube id = the code after "v=" or after "youtu.be/" in your link
  // drive id   = the code after "/d/" and before "/view" in your share link
  videos = signal<VideoItem[]>([
    { title: 'PASTE VIDEO TITLE 1', event: 'PASTE EVENT NAME 1', source: 'youtube', id: 'd9eJggGVXAI' },
    { title: 'PASTE VIDEO TITLE 2', event: 'PASTE EVENT NAME 2', source: 'youtube', id: '1yi5B_89Cao' },
    { title: 'PASTE VIDEO TITLE 3', event: 'PASTE EVENT NAME 3', source: 'youtube', id: '9J0_gKq3i5c' },

    { title: 'PASTE VIDEO TITLE 4', event: 'PASTE EVENT NAME 4', source: 'youtube', id: 'KG6qugGB3Mg' },
    { title: 'PASTE VIDEO TITLE 1', event: 'PASTE EVENT NAME 1', source: 'youtube', id: 'KG6qugGB3Mg' },
    { title: 'PASTE VIDEO TITLE 2', event: 'PASTE EVENT NAME 2', source: 'youtube', id: 'r-WlWJzAkF0' }
    
    // { title: 'PASTE VIDEO TITLE 3', event: 'PASTE EVENT NAME 3', source: 'youtube', id: '53mC6yvAZ2M' },
    // { title: 'PASTE VIDEO TITLE 4', event: 'PASTE EVENT NAME 4', source: 'youtube', id: 'THOM9mrKiCQ' }

    // { title: 'PASTE VIDEO TITLE 1', event: 'PASTE EVENT NAME 1', source: 'youtube', id: '53mC6yvAZ2M' },
    // { title: 'PASTE VIDEO TITLE 2', event: 'PASTE EVENT NAME 2', source: 'youtube', id: 'aOQFyZnpNdY' },
    // { title: 'PASTE VIDEO TITLE 3', event: 'PASTE EVENT NAME 3', source: 'youtube', id: 'h5iC14XjrEM' },
    // { title: 'PASTE VIDEO TITLE 4', event: 'PASTE EVENT NAME 4', source: 'youtube', id: 'KhVq26SbctU' },

    // { title: 'PASTE VIDEO TITLE 1', event: 'PASTE EVENT NAME 1', source: 'youtube', id: 'r-WlWJzAkF0' },
    // { title: 'PASTE VIDEO TITLE 2', event: 'PASTE EVENT NAME 2', source: 'youtube', id: 'vbyMQLW-TmY' },
    // { title: 'PASTE VIDEO TITLE 3', event: 'PASTE EVENT NAME 3', source: 'youtube', id: 'NwmP6xTXQr8' },
    // { title: 'PASTE VIDEO TITLE 4', event: 'PASTE EVENT NAME 4', source: 'youtube', id: 'wZLNFHp-NgM' },

    //    { title: 'PASTE VIDEO TITLE 1', event: 'PASTE EVENT NAME 1', source: 'youtube', id: 'KG6qugGB3Mg' },
    // { title: 'PASTE VIDEO TITLE 2', event: 'PASTE EVENT NAME 2', source: 'youtube', id: 'RC8jeGW_kR0' },
    // { title: 'PASTE VIDEO TITLE 3', event: 'PASTE EVENT NAME 3', source: 'youtube', id: 'tBK3Qaz524o' },
    // { title: 'PASTE VIDEO TITLE 4', event: 'PASTE EVENT NAME 4', source: 'youtube', id: '2uyHm6leh3Y' },

    //     { title: 'PASTE VIDEO TITLE 1', event: 'PASTE EVENT NAME 1', source: 'youtube', id: '9J0_gKq3i5c' },
    // { title: 'PASTE VIDEO TITLE 2', event: 'PASTE EVENT NAME 2', source: 'youtube', id: 'zXALMu2-qIs' },
    // { title: 'PASTE VIDEO TITLE 3', event: 'PASTE EVENT NAME 3', source: 'youtube', id: 'dA_OK1GVBgY' },
    // { title: 'PASTE VIDEO TITLE 4', event: 'PASTE EVENT NAME 4', source: 'youtube', id: 'SoLs5GHNsa0' }
  ]);

  // getEmbedUrl(v: VideoItem): SafeResourceUrl {
  //   const url = v.source === 'youtube'
  //     ? `https://www.youtube.com/embed/${v.id}`
  //     : `https://drive.google.com/file/d/${v.id}/preview`;
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  // }
  getEmbedUrl(v: VideoItem): SafeResourceUrl {
  const url = v.source === 'youtube'
    ? `https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`
    : `https://drive.google.com/file/d/${v.id}/preview`;
  return this.sanitizer.bypassSecurityTrustResourceUrl(url);
}
}