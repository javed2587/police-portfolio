import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface EventPhoto {
  caption: string;
  location: string;
  image: string;
  size: 'small' | 'medium' | 'large' | 'vertical'; // controls span in the masonry layout
}

@Component({
  selector: 'app-photo-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo-gallery.component.html',
  styleUrl: './photo-gallery.component.css'
})
export class PhotoGalleryComponent {
  activePhoto = signal<EventPhoto | null>(null);

  readonly fallbackImg = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
       <rect width="100%" height="100%" fill="#14315c"/>
       <text x="50%" y="50%" fill="#c9a24b" font-size="16" text-anchor="middle" dy=".3em">Photo</text>
     </svg>`
  );

  // 👉 Replace caption/location/image. Put photos in src/assets/gallery/
  // Mix 'small' / 'medium' / 'large' across the list — that variation is what
  // creates the unordered, scattered look even with only 10 photos.
  photos = signal<EventPhoto[]>([
    { caption: 'Sports Gala', location: 'Police Lines Ground', image: 'assets/gallery/1q.jpeg', size: 'large' },
    { caption: 'Security Rounds', location: 'Police Lines', image: 'assets/gallery/z3.jpeg', size: 'large' },
    { caption: 'Prade', location: 'Qilla Gujjar Singh', image: 'assets/gallery/z1.jpeg', size: 'large' },
    { caption: 'Prade', location: 'Qilla Gujjar Singh', image: 'assets/gallery/2q.jpeg', size: 'large' },
    { caption: 'Firing FOP', location: 'Headquarters', image: 'assets/gallery/b4.jpeg', size: 'large' },
    { caption: 'DayCare Center', location: 'Police Lines', image: 'assets/gallery/3q.jpeg', size: 'large' },
    { caption: 'Green Intiative', location: 'Ground No. 2', image: 'assets/gallery/6q.jpeg', size: 'large' },
    { caption: 'Security Rounds', location: 'Qilla Gujjar Singh', image: 'assets/gallery/dspp.jpeg', size: 'medium' },

    { caption: 'Training', location: 'Police Lines', image: 'assets/gallery/b1.jpeg', size: 'large' },
    { caption: 'Daily Roll Call', location: 'Parade Ground', image: 'assets/gallery/aaaa.jpeg', size: 'large' },
        { caption: 'Sports Gala', location: 'Police Lines', image: 'assets/gallery/b5.jpeg',  size: 'large' },
                { caption: 'Martyrs Barsi', location: 'Police Lines', image: 'assets/gallery/b6.jpeg',  size: 'large' },
            { caption: 'Badge Cernony', location: 'Police Lines - SP Headquarters', image: 'assets/gallery/b3.jpeg', size: 'vertical' },
                { caption: 'Police cards Ads', location: 'Police Lines - Service to lhr Police', image: 'assets/gallery/5ttg.jpeg', size: 'vertical' },
                { caption: 'Recrition Room', location: 'Headquaters', image: 'assets/gallery/b10.jpeg', size: 'large' },
                { caption: 'Daily Roll Call', location: 'Parade Ground', image: 'assets/gallery/5t.jpeg', size: 'large' },
  ]);


  open(p: EventPhoto) { this.activePhoto.set(p); }
  close() { this.activePhoto.set(null); }
}