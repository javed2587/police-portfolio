import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Highlight {
  caption: string;
  context: string;
  image: string;
 size: 'small' | 'medium' | 'large' | 'vertical'; 
}

@Component({
  selector: 'app-career-highlights',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './career-highlights.component.html',
  styleUrl: './career-highlights.component.css'
})
export class CareerHighlightsComponent {
  activeHighlight = signal<Highlight | null>(null);

  readonly fallbackImg = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="400">
       <rect width="100%" height="100%" fill="#14315c"/>
       <text x="50%" y="50%" fill="#c9a24b" font-size="16" text-anchor="middle" dy=".3em">Highlight</text>
     </svg>`
  );

  // 👉 Your 3-4 vertical photos — receiving award, with SP/DSP, etc. Put in src/assets/highlights/
  highlights = signal<Highlight[]>([
        { caption: 'Receiving Recognition', context: 'From EX-SP Headquarters - Feb 2025', image: 'assets/carrear/zunair-sphqs.jpeg', size: 'large' },
    { caption: 'CC-III Performance Certificate Award', context: 'From DIG Admin - March 2025', image: 'assets/carrear/DIG-Admin-v2.jpg', size: 'large' },
     { caption: 'CC-III Performance Certificate Award', context: 'From SP Headquarters - July 2026', image: 'assets/carrear/CC-3.jpg', size: 'large' },
  ]);

  open(h: Highlight) { this.activeHighlight.set(h); }
  close() { this.activeHighlight.set(null); }
}