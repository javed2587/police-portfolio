import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface UpdateShot {
  caption: string;
  image: string;
  rotate: number; // slight tilt for the scattered look
}

@Component({
  selector: 'app-whatsapp-updates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-updates.component.html',
  styleUrl: './whatsapp-updates.component.css'
})
export class WhatsappUpdatesComponent {
  activeShot = signal<UpdateShot | null>(null);

  readonly fallbackImg = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="400">
       <rect width="100%" height="100%" fill="#14315c"/>
       <text x="50%" y="50%" fill="#c9a24b" font-size="16" text-anchor="middle" dy=".3em">Update</text>
     </svg>`
  );

  // 👉 Replace caption/image. Put screenshots in src/assets/updates/
  // rotate: any number between -6 and 6 gives a natural scattered tilt — vary them
  updates = signal<UpdateShot[]>([
    { caption: 'SP Headquarters Hold Open Court ', image: 'assets/Whatsapp/w-1.jpeg', rotate: -4 },
    { caption: 'DSP Headqurters Briefs Maddat Inchrges', image: 'assets/Whatsapp/w-2.jpeg', rotate: 3 },
    { caption: 'RI Lines Briefs Class-IV resposibilties & Biometric', image: 'assets/Whatsapp/w-3.jpeg', rotate: -2 },
    { caption: 'DSP Headqurters Pre-Daparture Brefing to TASI', image: 'assets/Whatsapp/w-4.jpeg', rotate: 5 }
    // ...add more the same way, keep rotate values varied
  ]);

  open(u: UpdateShot) { this.activeShot.set(u); }
  close() { this.activeShot.set(null); }
}