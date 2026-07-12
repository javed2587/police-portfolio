import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  detail: string;
  category: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = signal<Skill[]>([
    { name: 'Camera Operation', category: 'Camera',
      detail: 'DSLR and drone-ready camera coverage for official events and ceremonies.' },
    { name: 'Event Coverage', category: 'Media',
      detail: 'Official coverage of police ceremonies, inspections, welfare events, and recruitment drives.' },
    { name: 'Video Editing', category: 'Editing',
      detail: 'Professional editing using Filmora, Camtasia, and mobile editing apps.' },
    { name: 'Photo Editing', category: 'Editing',
      detail: 'Image enhancement, posters, multi-photo layouts, and official media designs.' },
    { name: 'Graphic Design', category: 'Design',
      detail: 'One-page reports, social media creatives, banners, and official event graphics.' },
    { name: 'Social Media Management', category: 'Social',
      detail: 'Preparing and publishing official content for Facebook, Instagram, and YouTube.' },
    { name: 'Cloud Media Management', category: 'Storage',
      detail: 'Organizing, backing up, and sharing large media archives through Google Drive.' },
    { name: 'Media Coordination', category: 'Teamwork',
      detail: 'Coordinating with PRO officers and event in-charges for timely media delivery.' }
  ]);

  categoryColor(cat: string): string {
    const colors: Record<string, string> = {
      Camera: '#c9a24b',
      Media: '#5b7a99',
      Editing: '#7a9e6e',
      Design: '#b0678a',
      Social: '#d18a4a',
      Storage: '#8a8f99',
      Teamwork: '#6f9bd1'
    };
    return colors[cat] || '#c9a24b';
  }
}