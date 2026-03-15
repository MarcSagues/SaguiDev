import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-32 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div class="max-w-2xl">
            <h2 class="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              Featured <span class="text-[hsl(var(--primary))]">Projects</span>
            </h2>
            <p class="text-lg opacity-60">
              A curated selection of work where technical innovation meets cutting-edge design. Each project is a challenge to push the boundaries of what's possible in Web3.
            </p>
          </div>
          <div class="text-sm font-bold opacity-30 uppercase tracking-[0.5em]">
            (01) / Projects
          </div>
        </div>

        <div class="grid grid-cols-1 gap-20">
          <!-- Featured Project: DEX -->
          <div class="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div class="lg:col-span-7 relative overflow-hidden rounded-3xl aspect-video bg-gradient-to-br from-slate-900 to-black shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              <!-- Project Preview Image -->
              <img src="assets/real_dex_preview.png" alt="Yield DEX Preview" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700">
              
              <!-- Overlay -->
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                <a href="https://dex-yjiy.vercel.app/" target="_blank" class="px-10 py-4 rounded-xl bg-white text-black font-black transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-2xl">
                  ENTER DAPP
                </a>
              </div>
            </div>

            <div class="lg:col-span-5">
              <div class="flex items-center gap-4 mb-6">
                <span class="px-3 py-1 rounded-full text-xs font-bold border border-[hsl(var(--primary))] text-[hsl(var(--primary))] uppercase">DeFi</span>
                <span class="px-3 py-1 rounded-full text-xs font-bold border border-white/10 opacity-60 uppercase">Ethereum</span>
              </div>
              <h3 class="text-3xl font-bold mb-6 group-hover:text-[hsl(var(--primary))] transition-colors">Yield DEX</h3>
              <p class="text-lg opacity-60 mb-8 leading-relaxed">
                A high-performance decentralized exchange with a minimalist and ultra-responsive interface. Implementation of efficient swaps and simplified liquidity management.
              </p>
              <ul class="flex flex-wrap gap-4 mb-10">
                <li class="flex items-center gap-2 text-sm font-medium opacity-80">
                  <div class="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))]"></div> Tailwind CSS
                </li>
                <li class="flex items-center gap-2 text-sm font-medium opacity-80">
                  <div class="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))]"></div> Angular
                </li>
                <li class="flex items-center gap-2 text-sm font-medium opacity-80">
                  <div class="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))]"></div> Ethers.js
                </li>
              </ul>
              <a href="https://dex-yjiy.vercel.app/" target="_blank" class="inline-flex items-center gap-2 font-bold group">
                <span class="border-b-2 border-transparent group-hover:border-[hsl(var(--primary))] transition-all">View Case Study</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .animate-spin-slow {
      animation: spin-slow 8s linear infinite;
    }
  `]
})
export class ProjectsComponent {}
