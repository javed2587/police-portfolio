// duties.component.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Duty {
  title: string;
  description: string;
  category: 'Ceremony' | 'Operations' | 'Sports' | 'Community' | 'Infrastructure';
}

@Component({
  selector: 'app-duties',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './duties.component.html',
  styleUrl: './duties.component.css'
})
export class DutiesComponent {
  // TODO: rewrite each description in your own words — this is a starting draft only
  duties = signal<Duty[]>([
    { title: 'Shuhada Barsi (Martyrs\' Memorial)', category: 'Ceremony',
      description: 'Covered the Martyrs Remembrance Ceremony\' edited the media, and delivered the final content to the PRO and Shuhda teams.' },
    { title: 'Police Recruitment (Bharti) Process', category: 'Operations',
      description: 'Covered the 2025 Police Recruitment at Badian Center, Chung Training College, and Police Lines.' },
    { title: 'Cricket Match & Food Distribution', category: 'Sports',
      description: 'covered the match, food distribution, and participant feedback, supporting the food in-charge and pro team.' },
    { title: 'General Salami & Guard of Honour', category: 'Ceremony',
      description: 'Official salami ceremony coverage for visiting officials and dignitaries.' },
    { title: 'Eid Namaz Coverage', category: 'Ceremony',
      description: 'Documented Eid prayers at the police lines for official archives and social media.' },
    { title: 'SP Headquarters Open Court', category: 'Operations',
      description: 'Coverage of the open court session held by SP Headquarters for public grievances.' },
    { title: 'DSP Security Checking Rounds', category: 'Operations',
      description: 'Filmed routine security inspection rounds conducted by DSP Headquarters.' },
    { title: 'Daily Roll Call / Counting', category: 'Operations',
      description: 'Regular documentation of daily counting/parade at the police lines.' },
      { title: 'Monthly Welfare Sessions', category: 'Operations',
      description: 'covered monthly welfare sessions, documenting activities and preparing media for the pro team.' },
    { title: 'Uniform Store Documentation', category: 'Infrastructure',
      description: 'Produced multiple videos showcasing the uniform store and issuance process.' },
    { title: 'Orphan Children\'s Event', category: 'Community',
      description: 'Filmed and edited coverage of a welfare event held for orphaned children.' },
    { title: 'New Residential Block & Washroom Upgrade', category: 'Infrastructure',
      description: 'Documented and edited coverage of new resident blocks and washroom enhancement works.' },
      { title: 'Behavior Training Sessions', category: 'Infrastructure',
      description: 'covered behavior training sessions through professional photo and video documentation for the pro team.' },
      { title: 'Medical & Blood Donation Camps', category: 'Infrastructure',
      description: 'covered medical and blood donation camps, documenting key activities and delivering edited media to the pro team.' }
  ]);
}