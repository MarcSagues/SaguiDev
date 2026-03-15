import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-32 px-6 relative overflow-hidden">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <!-- Visual Column -->
        <div class="relative group">
          <div class="absolute -inset-4 bg-gradient-to-tr from-[hsl(var(--solar-gold))] to-[hsl(var(--accent))] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700"></div>
          <div class="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl glass">
            <img src="assets/profile.png" alt="Marc Sagüés" class="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110">
            <!-- Decorative Floating Elements -->
            <div class="absolute bottom-6 left-6 right-6 p-6 rounded-3xl glass border border-white/20 backdrop-blur-2xl">
              <p class="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Lead Developer</p>
              <p class="text-xl font-black italic">Marc Sagüés</p>
            </div>
          </div>
          <!-- Experience badge -->
          <div class="absolute -top-6 -right-6 w-32 h-32 rounded-full glass border border-white/20 flex flex-col items-center justify-center shadow-2xl animate-spin-slow">
            <span class="text-2xl font-black">5+</span>
            <span class="text-[10px] font-bold uppercase tracking-tighter opacity-60">Years Exp.</span>
          </div>
        </div>

        <!-- Content Column -->
        <div>
          <h2 class="text-sm font-bold uppercase tracking-[0.5em] text-[hsl(var(--accent))] mb-6">
            Behind the Code
          </h2>
          <h3 class="text-4xl md:text-5xl font-black mb-8 tracking-tight">
            Architecting <span class="italic text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--solar-gold))] to-[hsl(var(--accent))]">Digital Sovereignty</span>
          </h3>
          <p class="text-lg opacity-60 mb-10 leading-relaxed">
            I am a specialized Web3 engineer focused on the intersection of high-performance frontend architectures and decentralized security. My mission is to build interfaces that aren't just tools, but spectacular windows into the blockchain ecosystem.
          </p>
          
          <div class="grid grid-cols-2 gap-8 mb-12">
            <div>
              <h4 class="font-bold mb-4 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-[hsl(var(--primary))]"></span> Development
              </h4>
              <ul class="space-y-2 opacity-60 text-sm">
                <li>Solidity & Rust (Smart Contracts)</li>
                <li>Angular, React & Next.js</li>
                <li>TypeScript / Node.js</li>
                <li>Ethers.js / Web3.js</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold mb-4 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-[hsl(var(--primary))]"></span> Engineering
              </h4>
              <ul class="space-y-2 opacity-60 text-sm">
                <li>Zero-Knowledge (ZK) Proofs</li>
                <li>UI/UX Strategy & Motion</li>
                <li>Gas Optimization</li>
                <li>Security Auditing Foundations</li>
              </ul>
            </div>
          </div>

          <div class="p-6 rounded-2xl border border-white/10 bg-white/5 flex items-center gap-6 group hover:border-[hsl(var(--primary))] transition-colors">
            <div class="w-12 h-12 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center text-[hsl(var(--bg-dark))]">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            </div>
            <div>
              <p class="text-sm opacity-50 uppercase tracking-widest font-bold">Currently exploring</p>
              <p class="font-bold">Zero-Knowledge Proofs & Layer 2 scaling</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class AboutComponent {}
