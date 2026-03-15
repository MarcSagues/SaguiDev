import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-[hsl(var(--solar-glow))] opacity-20 blur-[120px] rounded-full animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[hsl(var(--accent))] opacity-10 blur-[100px] rounded-full animate-pulse [animation-delay:2s]"></div>

      <div class="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <!-- Floating Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[hsl(var(--text-primary))]/5 bg-[hsl(var(--text-primary))]/5 backdrop-blur-md mb-8 animate-fade-in-up">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span class="text-xs font-bold tracking-widest opacity-60 uppercase">Available for new opportunities</span>
        </div>

        <h1 class="text-7xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.85] animate-fade-in-up animation-delay-200">
          Mastery in <br>
          <span class="bg-gradient-to-r from-[hsl(var(--solar-gold))] to-[hsl(var(--accent))] bg-clip-text text-transparent italic">Web3 Frontend</span>
        </h1>
        
        <p class="text-xl md:text-2xl opacity-60 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
           Empowering the decentralized web with high-performance <span class="text-[hsl(var(--text-primary))] font-bold">Angular, React, and Next.js</span> architectures. Expertly bridging <span class="text-[hsl(var(--text-primary))] font-bold">Solidity, Rust, and ZK-Proof</span> logic with spectacular, world-class UI/UX.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up animation-delay-600">
          <a href="#projects" class="group px-10 py-5 rounded-2xl bg-[hsl(var(--text-primary))] text-[hsl(var(--bg-primary))] font-black hover:scale-105 transition-all shadow-2xl flex items-center gap-3">
            Explorar Work
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
          <a href="#about" class="px-10 py-5 rounded-2xl border-2 border-[hsl(var(--text-primary))]/10 hover:bg-[hsl(var(--text-primary))]/5 transition-all font-bold">
            The Vision
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
      opacity: 0;
      animation: fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
    }
    .animation-delay-200 { animation-delay: 0.2s; }
    .animation-delay-400 { animation-delay: 0.4s; }
    .animation-delay-600 { animation-delay: 0.6s; }
  `]
})
export class HeroComponent {}
