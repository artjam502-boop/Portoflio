import { Component, HostListener, signal } from '@angular/core';

@Component({ selector: 'app-navbar', imports: [], templateUrl: './navbar.html', styleUrl: './navbar.scss' })
export class NavbarComponent {
  protected readonly links = [
    { label: 'Home', id: 'home' }, { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' }, { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' }
  ];
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly active = signal('home');

  @HostListener('window:scroll') onScroll() {
    this.scrolled.set(window.scrollY > 24);
    const sections = this.links.map(link => document.getElementById(link.id)).filter(Boolean) as HTMLElement[];
    const current = sections.filter(section => section.getBoundingClientRect().top <= window.innerHeight * .36).at(-1);
    if (current) this.active.set(current.id);
  }
  @HostListener('window:resize') onResize() { if (window.innerWidth > 760) this.menuOpen.set(false); }
  protected closeMenu() { this.menuOpen.set(false); }
  protected toggleMenu() { this.menuOpen.update(value => !value); }
}
