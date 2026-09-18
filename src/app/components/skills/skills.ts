import { Component } from '@angular/core';

interface Tool {
  name: string;
  category: string;
  icon: string;
  secondaryIcon?: string;
}

@Component({ selector: 'app-skills', imports: [], templateUrl: './skills.html', styleUrl: './skills.scss' })
export class SkillsComponent {
  protected readonly tools: Tool[] = [
    { name: 'Angular', category: 'Frontend Framework', icon: '/icons/angular-original.svg' },
    { name: 'TypeScript', category: 'Programming Language', icon: '/icons/typescript-original.svg' },
    { name: 'HTML5', category: 'Web Structure', icon: '/icons/html5-original.svg' },
    { name: 'CSS3 / SCSS', category: 'Styling & Responsive Design', icon: '/icons/css3-original.svg', secondaryIcon: '/icons/sass-original.svg' },
    { name: 'Git & GitHub', category: 'Version Control', icon: '/icons/git-original.svg', secondaryIcon: '/icons/github-original.svg' },
    { name: 'Node.js & npm', category: 'Development Tools', icon: '/icons/nodejs-original.svg', secondaryIcon: '/icons/npm-original-wordmark.svg' }
  ];
}
