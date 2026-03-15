import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      (click)="toggleTheme()" 
      class="relative w-16 h-16 flex items-center justify-center focus:outline-none group overflow-hidden rounded-full transition-all duration-500 hover:scale-110 active:scale-95 bg-white/5 backdrop-blur-md border border-white/10"
      [attr.aria-label]="isDark() ? 'Switch to light mode' : 'Switch to dark mode'"
    >
      <!-- Sun Body -->
      <div 
        class="absolute inset-0 flex items-center justify-center transition-all duration-[var(--transition-slow)]"
        [class.rotate-[360deg]]="isDark()"
        [class.scale-0]="isDark()"
      >
        <div class="w-8 h-8 rounded-full bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.6)]"></div>
        <!-- Sun Rays -->
        <div *ngFor="let ray of rays" 
          class="absolute w-1 h-3 bg-yellow-400 rounded-full"
          [style.transform]="'rotate(' + ray * 45 + 'deg) translateY(-12px)'"
        ></div>
      </div>

      <!-- Moon Body -->
      <div 
        class="absolute inset-0 flex items-center justify-center transition-all duration-[var(--transition-slow)] opacity-0 scale-0"
        [class.opacity-100]="isDark()"
        [class.scale-100]="isDark()"
        [class.rotate-0]="isDark()"
        class="rotate-[-180deg]"
      >
        <div class="w-8 h-8 rounded-full bg-slate-100 shadow-[0_0_20px_rgba(241,245,249,0.4)] relative overflow-hidden">
          <!-- Moon Crater -->
          <div class="absolute top-2 left-2 w-2 h-2 rounded-full bg-slate-300"></div>
          <div class="absolute bottom-3 right-2 w-1.5 h-1.5 rounded-full bg-slate-300"></div>
        </div>
      </div>
    </button>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ThemeToggleComponent {
  isDark = signal(true);
  rays = [0, 1, 2, 3, 4, 5, 6, 7];

  toggleTheme() {
    this.isDark.update(v => !v);
    document.documentElement.classList.toggle('dark', this.isDark());
    
    // Play transition animation class to body if needed, or rely on tailwind
  }
}
