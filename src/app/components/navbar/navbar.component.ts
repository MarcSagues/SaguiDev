import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { ContactService } from '../../services/contact.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ThemeToggleComponent],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
        <div class="flex items-center gap-2 group cursor-pointer">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-[hsl(var(--solar-gold))] to-[hsl(var(--accent))] p-[2px] transition-transform group-hover:rotate-12 shadow-lg shadow-[hsl(var(--solar-gold))/20]">
            <div class="w-full h-full bg-[hsl(var(--bg-primary))] rounded-[9px] flex items-center justify-center font-black text-xs">S</div>
          </div>
          <span class="text-xl font-black tracking-tighter">Sagui<span class="text-[hsl(var(--accent))]">Dev</span></span>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center gap-8">
          <a *ngFor="let link of navLinks" 
             [href]="link.path"
             class="relative text-sm font-medium opacity-60 hover:opacity-100 transition-opacity group"
          >
            {{ link.name }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[hsl(var(--primary))] transition-all group-hover:w-full"></span>
          </a>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-4">
          <app-theme-toggle></app-theme-toggle>
          <button 
            (click)="contactService.open()"
            class="px-5 py-2 rounded-full bg-[hsl(var(--solar-gold))] text-[hsl(var(--bg-primary))] font-black text-sm transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_hsla(var(--solar-gold),0.3)]"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class NavbarComponent {
  contactService = inject(ContactService);
  navLinks = [
    { name: 'Home', path: '#' },
    { name: 'About', path: '#about' },
    { name: 'Projects', path: '#projects' }
  ];
}
