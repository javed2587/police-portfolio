import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Leader {
  name: string;
  designation: string;
  photo: string;
}

@Component({
  selector: 'app-leadership',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leadership.component.html',
  styleUrl: './leadership.component.css'
})
export class LeadershipComponent {
  // 👉 Replace name / designation / photo path for each. Put images in src/assets/leadership/
  leaders = signal<Leader[]>([
    { name: 'Monazza Karamat', designation: 'SP Headquarters', photo: 'assets/z-1.jpg' },
    { name: 'Baber Shoukat', designation: 'DSP Headquarters', photo: 'assets/z-2.jpg' },
    { name: 'Taweer', designation: 'Incharge, PRO Team', photo: 'assets/z-3.jpg' },
    { name: 'Raees', designation: 'Incharge, IT Center', photo: 'assets/javed.jpg' }
  ]);


  // add to any component using image fallbacks (leadership, poster-gallery, video-gallaries)
readonly fallbackImg = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
     <rect width="100%" height="100%" fill="#14315c"/>
     <text x="50%" y="50%" fill="#c9a24b" font-size="16" text-anchor="middle" dy=".3em">Image coming soon</text>
   </svg>`
);
}