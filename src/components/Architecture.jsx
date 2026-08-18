import React from 'react';
import { Layers, FileText, Cpu, Check, ArrowRight, Code2, Sparkles, Terminal } from 'lucide-react';

export default function Architecture() {
  const decisions = [
    {
      title: 'React + Vite + Tailwind CSS',
      reason: 'Delivers lightning-fast HMR, microsecond reactive state renders, and responsive styling with zero runtime bundle bloat.',
      type: 'Core Stack'
    },
    {
      title: 'Frontend Mock Engine Trade-Off',
      reason: 'Deliberately prioritized interactive high-fidelity frontend UI/UX and instant edge simulation over complex backend database overhead.',
      type: 'Architecture Rationale'
    },
    {
      title: 'AI Tooling Transparency',
      reason: 'Designed and crafted in pair programming with Antigravity / Gemini AI assistance, validating human-crafted aesthetics and clean component modularity.',
      type: 'Development Process'
    }
  ];

  return (
    <section id="architecture" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>ARCHITECTURAL SPECIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering Rationale & Trade-offs
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A transparent view of why we built PulseQL the way we did. Summary of our decisions log in <code className="text-sky-300 font-mono bg-slate-900 px-2 py-0.5 rounded">DECISIONS.md</code>.
          </p>
        </div>

        {/* Decisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {decisions.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col justify-between hover:border-sky-500/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    {item.type}
                  </span>
                  <Code2 className="w-5 h-5 text-slate-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-normal">
                  {item.reason}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-400">
                <Check className="w-4 h-4 text-sky-400" />
                <span>Validated Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* DECISIONS.md Callout Box */}
        <div className="glass-panel rounded-3xl p-8 border border-slate-800 bg-slate-900/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 text-sky-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">DECISIONS.md In Repository Root</h3>
              <p className="text-slate-400 text-sm">
                Full architectural design document committed in git history at <span className="font-mono text-sky-300">super-home/DECISIONS.md</span>.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/SaakshiJha29/super-home.git"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-sky-500 text-slate-950 font-bold text-sm hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all shrink-0 flex items-center gap-2"
          >
            <span>Explore Repo Docs</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
