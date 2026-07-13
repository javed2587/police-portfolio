// poster-gallery.component.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Poster {
  title: string;
  event: string;
  imgUrl: string;
}

@Component({
  selector: 'app-poster-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poster-gallries.component.html',
  styleUrl: './poster-gallries.component.css'
})
export class PosterGallriesComponent {
  activePoster = signal<Poster | null>(null);

  // 👉 Put your poster images in src/assets/posters/ and list them here.
  // Each poster shows title + event name as a caption under the thumbnail.
  posters = signal<Poster[]>([
    { title: '', event: '', imgUrl: 'assets/posters/DIG.jpg' },
        { title: '', event: 'Cricket Match Coverage', imgUrl: 'assets/posters/a3.jpg' },
    { title: '', event: 'Police Bharti Process', imgUrl: 'assets/posters/hazi-1.jpeg' },
     { title: 'Recruitment Drive Poster', event: 'Police Bharti Process', imgUrl: 'assets/posters/b.jpg' },
    { title: '', event: 'Police Bharti Process', imgUrl: 'assets/posters/sp1.jpeg' },
    { title: '', event: 'Police Bharti Process', imgUrl: 'assets/posters/a.jpg' },

    { title: 'Recruitment Drive Poster', event: 'Police Bharti Process', imgUrl: 'assets/posters/a6.jpg' },
    { title: 'Recruitment Drive Poster', event: 'Police Bharti Process', imgUrl: 'assets/posters/sp2.jpeg' },
    { title: 'Recruitment Drive Poster', event: 'Police Bharti Process', imgUrl: 'assets/posters/a8.jpg' },
        { title: 'Cricket Tournament Recap', event: 'Cricket Match Coverage', imgUrl: 'assets/posters/M-team.jpg' },
    // { title: 'Cricket Tournament Recap', event: 'Cricket Match Coverage', imgUrl: 'assets/posters/a3.jpg' },
    { title: 'Recruitment Drive Poster', event: 'Police Bharti Process', imgUrl: 'assets/posters/DSP-1.jpeg' },
    { title: 'Recruitment Drive Poster', event: 'Police Bharti Process', imgUrl: 'assets/posters/11.jpg' },

    { title: 'Recruitment Drive Poster', event: 'Police Bharti Process', imgUrl: 'assets/posters/a1.jpg' },
    { title: 'Recruitment Drive Poster', event: 'Police Bharti Process', imgUrl: 'assets/posters/a4.jpg' }, 
    { title: 'Recruitment Drive Poster', event: 'Police Bharti Process', imgUrl: 'assets/posters/wardi2.jpeg' },
    { title: 'Recruitment Drive Poster', event: 'Police Bharti Process', imgUrl: 'assets/posters/wardi-.jpeg' },
    { title: 'Cricket Tournament Recap', event: 'Cricket Match Coverage', imgUrl: 'assets/posters/b1.jpg' },
    { title: 'Recruitment Drive Poster', event: 'Police Bharti Process', imgUrl: 'assets/posters/b4.jpg' },

    { title: 'Recruitment Drive Poster', event: 'Police Bharti Process', imgUrl: 'assets/posters/b6.jpg' },
    { title: 'Recruitment Drive Poster', event: 'Police Bharti Process', imgUrl: 'assets/posters/b7.jpg' },
    { title: 'Recruitment Drive Poster', event: 'Police Bharti Process', imgUrl: 'assets/posters/b8.jpg' },
    { title: 'Recruitment Drive Poster', event: 'Police Bharti Process', imgUrl: 'assets/posters/b9.jpg' },
        { title: '', event: 'Police Bharti Process', imgUrl: 'assets/posters/S-team.jpg' },
    // { title: 'Recruitment Drive Poster', event: 'Police Bharti Process', imgUrl: 'assets/posters/b.jpg' },
    { title: 'Recruitment Drive Poster', event: 'Police Bharti Process', imgUrl: 'assets/posters/b10.jpg' }
  ]);

  open(p: Poster) { this.activePoster.set(p); }
  close() { this.activePoster.set(null); }

  // poster-gallery.component.ts
visibleCount = signal(6);
showMore() { this.visibleCount.update(v => v + 6); }
}
