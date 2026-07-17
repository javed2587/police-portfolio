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
    { title: 'DIG Admin Awards CC-II', issuedBy: 'Recognized for contributing to recruitment transparency by providing video-based evidence that helped identify suspected impersonation cases during the 2025 New Recruitment Process, supporting a fair and secure hiring process.', year: '2025', image: 'assets/rewards/DIG-Admin.jpg' },
    //{ title: "SP Headquarters Awards CC-III", issuedBy: 'Awarded the CC-III Certificate by SP Headquarters in recognition of exceptional media coverage, The award reflects dedication and excellence in documenting official events, including ceremonial parades, General Salami, Uniform Store activities, and other key headquarters assignments while serving in the PRO Branch.', year: 'Agust 2025', image: 'assets/rewards/DIG-Admin.jpg' },
    { title: "SP Headquarters Awards CC-III", issuedBy: "Recognition of outstanding performance, dedication, and professionalism during 1.5 years of service. Successfully covered and documented official events while developing a professional digital portfolio that uniquely showcases SP Headquarters' activities through creative media production and modern presentation.", year: 'July 2026', image: 'assets/rewards/DIG-Admin.jpg' },
    // ...add more the same way
  ]);

  open(r: Reward) { this.activeReward.set(r); }
  close() { this.activeReward.set(null); }
}