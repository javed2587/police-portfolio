import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Highlight {
  caption: string;
  context: string;
  image: string;
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
    { caption: 'With SP Headqurters', context: 'From SP Headquarters', image: 'assets/highlights/jav1.jpeg' },
    { caption: 'Receiving Recognition', context: 'From EX-SP Headquarters', image: 'assets/highlights/jav2.jpeg' },
    { caption: 'Certificate Presentation', context: 'PRO Team', image: 'assets/highlights/dsp1333.jpeg' }
  ]);

  open(h: Highlight) { this.activeHighlight.set(h); }
  close() { this.activeHighlight.set(null); }
}