import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  detail: string;
  category: 'Camera' | 'Editing' | 'Software' | 'Storage' | 'Education';
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  // 👉 Edit freely — add/remove entries or tweak wording to match you exactly
  skills = signal<Skill[]>([
    { name: 'Camera Operation', category: 'Camera',
      detail: 'DSLR and drone camera coverage for live ceremonies, events, and field operations.' },
    { name: 'Mobile Video Editing', category: 'Editing',
      detail: 'Full video production on mobile using 4 different apps — from raw footage to a single polished output.' },
    { name: 'Filmora & Camtasia', category: 'Editing',
      detail: 'Desktop editing, transitions, branded intros, and multi-clip event recaps.' },
    { name: 'Image Editing', category: 'Editing',
      detail: 'Poster design and photo composition, including multi-image layouts with text overlays.' },
    { name: 'Google Drive / Cloud Storage', category: 'Storage',
      detail: 'Organized cloud storage and sharing workflow for large video and image archives.' },
    { name: 'MSc Computer Science', category: 'Education',
      detail: 'Postgraduate degree in Computer Science.' }
  ]);
}