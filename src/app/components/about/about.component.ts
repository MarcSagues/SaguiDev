import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-32 px-6 bg-white/5 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <!-- Visual Column -->
        <div class="relative">
          <div class="w-full aspect-square rounded-3xl bg-gradient-to-tr from-[hsl(var(--solar-gold))] to-[hsl(var(--accent))] opacity-10 animate-pulse"></div>
          <div class="absolute inset-0 flex items-center justify-center p-12">
             <div class="text-[12rem] font-black opacity-5 select-none">BIO</div>
          </div>
          <div class="absolute -bottom-10 -right-10 w-48 h-48 bg-[hsl(var(--accent))] opacity-20 blur-[80px] rounded-full"></div>
        </div>

        <!-- Content Column -->
        <div>
          <h2 class="text-sm font-bold uppercase tracking-[0.5em] text-[hsl(var(--primary))] mb-6">
            About Me
          </h2>
          <h3 class="text-4xl md:text-5xl font-black mb-8 tracking-tight">
            Passionate about <span class="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--solar-gold))] to-[hsl(var(--accent))]">Innovation</span> & Design
          </h3>
          <p class="text-lg opacity-60 mb-10 leading-relaxed">
            I am a Blockchain Developer with a deep love for frontend aesthetics. I believe that decentralization doesn't have to be complicated or ugly. My mission is to build dApps that are as powerful as they are beautiful.
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
