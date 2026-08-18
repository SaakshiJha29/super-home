import React from 'react';
import { Play, Layers, Activity, ShieldAlert, Cpu, CheckCircle2, Sparkles, Server } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-mesh-dark">
      {/* Background Glows & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/15 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-sky-500/30 backdrop-blur-md shadow-inner text-xs font-mono text-slate-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-emerald-400 tracking-wider">ALL SYSTEMS OPERATIONAL</span>
            <span className="text-slate-600">|</span>
            <span className="text-sky-300/90 font-medium">Edge Nodes Active globally</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Test APIs under real-world pressure{' '}
            <span className="gradient-text block mt-2">
              before production.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
            Spin up instant GraphQL & REST mock endpoints, simulate high latency spikes, introduce fault packet drops, and validate your system resilience in seconds.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#sandbox"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 text-slate-950 font-bold text-base hover:shadow-[0_0_35px_rgba(14,165,233,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group transform hover:-translate-y-0.5"
            >
              <Play className="w-5 h-5 fill-slate-950 group-hover:scale-110 transition-transform" />
              <span>Launch Live Sandbox</span>
            </a>

            <a
              href="#architecture"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/60 text-slate-200 font-semibold text-base backdrop-blur-xl transition-all duration-300 flex items-center justify-center gap-2 hover:border-sky-500/40"
            >
              <Layers className="w-5 h-5 text-sky-400" />
              <span>View Architecture</span>
            </a>
          </div>

          {/* Trust Highlights / Quick Specs */}
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-black text-sky-400 font-mono">&lt; 15ms</span>
              <span className="text-xs text-slate-400 font-medium mt-1">Average Latency</span>
            </div>
            <div class="glass-panel p-4 rounded-xl flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-black text-white font-mono">100%</span>
              <span className="text-xs text-slate-400 font-medium mt-1">Open Source Spec</span>
            </div>
            <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-black text-sky-400 font-mono">800ms</span>
              <span className="text-xs text-slate-400 font-medium mt-1">Max Simulated Delay</span>
            </div>
            <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-black text-white font-mono">Zero</span>
              <span className="text-xs text-slate-400 font-medium mt-1">User Tracking</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
