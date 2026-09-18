import { Component } from '@angular/core';

interface ExperienceEntry {
  title: string;
  description: string;
}

@Component({ selector: 'app-experience', imports: [], templateUrl: './experience.html', styleUrls: ['./experience.scss'] })
export class ExperienceComponent {
  protected readonly entries: ExperienceEntry[] = [
    { title: 'Frontend Development', description: 'Building modern and responsive interfaces' },
    { title: 'Angular Development', description: 'Creating component-based web applications' },
    { title: 'Responsive Web Design', description: 'Optimizing websites for desktop and mobile' },
    { title: 'UI/UX Development', description: 'Designing clean and user-friendly interfaces' },
    { title: 'API Integration', description: 'Connecting frontend applications to backend services' },
    { title: 'Database Integration', description: 'Working with databases to store and manage application data' }
  ];
}
