import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      *ngIf="contactService.isOpen$()" 
      class="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-fade-in"
    >
      <!-- Backdrop -->
      <div 
        (click)="contactService.close()" 
        class="absolute inset-0 bg-black/60 backdrop-blur-md"
      ></div>

      <!-- Modal Content -->
      <div class="relative w-full max-w-lg bg-[hsl(var(--bg-primary))] border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden animate-modal-enter">
        <div class="p-10">
          <div class="flex justify-between items-center mb-10">
            <h3 class="text-3xl font-black tracking-tight">Get in <span class="text-[hsl(var(--accent))]">Touch</span></h3>
            <button 
              (click)="contactService.close()"
              class="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 transition-transform group-hover:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          <div class="space-y-6">
            <!-- Email -->
            <a href="mailto:marc10sagues@gmail.com" class="flex items-center gap-6 p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group">
              <div class="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <p class="text-xs font-bold opacity-30 uppercase tracking-widest mb-1">Email</p>
                <p class="font-bold text-lg">marc10sagues&#64;gmail.com</p>
              </div>
            </a>

            <!-- Phone -->
            <a href="tel:+34655930121" class="flex items-center gap-6 p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group">
              <div class="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <p class="text-xs font-bold opacity-30 uppercase tracking-widest mb-1">Phone</p>
                <p class="font-bold text-lg">+34 655 93 01 21</p>
              </div>
            </a>

            <!-- LinkedIn -->
            <a href="https://www.linkedin.com/in/marc-sagues" target="_blank" class="flex items-center gap-6 p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group">
              <div class="w-12 h-12 rounded-xl bg-[#0077B5]/20 flex items-center justify-center text-[#0077B5] group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
              <div>
                <p class="text-xs font-bold opacity-30 uppercase tracking-widest mb-1">LinkedIn</p>
                <p class="font-bold text-lg">marc-sagues</p>
              </div>
            </a>
          </div>
        </div>
        
        <div class="bg-white/5 p-6 text-center text-xs opacity-30 font-bold uppercase tracking-[0.2em]">
          SaguiDev / Official Contact
        </div>
      </div>
    </div>
  `,
  styles: [`
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes modalEnter {
      from { opacity: 0; transform: scale(0.9) translateY(20px); }
      to { opacity: 1; transform: scale(1) translateY(0); }
    }
    .animate-fade-in {
      animation: fadeIn 0.3s ease-out forwards;
    }
    .animate-modal-enter {
      animation: modalEnter 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
    }
  `]
})
export class ContactModalComponent {
  contactService = inject(ContactService);
}
