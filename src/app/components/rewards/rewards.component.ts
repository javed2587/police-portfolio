import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Reward {
  title: string;
  issuedBy: string;
  year: string;
  image: string;
}

@Component({
  selector: 'app-rewards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rewards.component.html',
  styleUrl: './rewards.component.css'
})
export class RewardsComponent {
  activeReward = signal<Reward | null>(null);

  readonly fallbackImg = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
       <rect width="100%" height="100%" fill="#14315c"/>
       <text x="50%" y="50%" fill="#c9a24b" font-size="16" text-anchor="middle" dy=".3em">Certificate</text>
     </svg>`
  );

  // 👉 Replace title / issuedBy / year / image. Put certificate scans/photos in src/assets/rewards/
  rewards = signal<Reward[]>([
    { title: 'DIG Admin Awards C-	II', issuedBy: 'DIG Admin Office Lahore', year: '2025', image: 'assets/rewards/certificate-1.jpg' },
    { title: "SP HQ's Awarded C-III", issuedBy: 'Police Lines Qillah Gujar Singh', year: '2025', image: 'assets/rewards/certificate-2.jpg' }
    // ...add more the same way
  ]);

  open(r: Reward) { this.activeReward.set(r); }
  close() { this.activeReward.set(null); }
}