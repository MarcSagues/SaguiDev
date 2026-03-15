import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactModalComponent } from './components/contact-modal/contact-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, HeroComponent, AboutComponent, ProjectsComponent, ContactModalComponent],
  template: `
    <app-navbar></app-navbar>
    <app-contact-modal></app-contact-modal>
    <main class="min-h-screen">
      <app-hero></app-hero>
      <app-about></app-about>
      <app-projects></app-projects>
    </main>
    
    <footer class="py-12 px-6 border-t border-white/5 text-center">
      <p class="opacity-30 text-sm">© 2026 Spectacular Portfolio. All rights reserved.</p>
    </footer>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class AppComponent {
  title = 'portfolio-site';
}
