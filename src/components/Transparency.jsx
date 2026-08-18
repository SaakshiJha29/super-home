import React from 'react';
import { ShieldCheck, EyeOff, Code, CheckCircle, Lock, Server, BarChart3 } from 'lucide-react';

export default function Transparency() {
  const metrics = [
    {
      value: '< 15ms',
      label: 'Average Edge Latency',
      description: 'Measured across global PoPs without artificial cache warmers.',
      icon: Server,
      accent: 'text-sky-600',
    },
    {
      value: '100%',
      label: 'Open Source Spec',
      description: 'Fully compatible with standard GraphQL, REST, and OpenAPI 3.0 specs.',
      icon: Code,
      accent: 'text-emerald-600',
    },
    {
      value: 'Zero',
      label: 'Telemetry & Tracking',
      description: 'We store zero cookies, payload contents, or user behavioral tracking.',
      icon: EyeOff,
      accent: 'text-sky-700',
    },
    {
      value: '35+',
      label: 'Simulated Edge Regions',
      description: 'Worldwide regional latency nodes dynamically calculated on client request.',
      icon: Lock,
      accent: 'text-indigo-600',
    }
  ];

  return (
    <section id="transparency" className="py-24 bg-mesh-light relative overflow-hidden border-t border-sky-100">
      
      {/* Subtle Glow Background */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-emerald-200/30 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>HONESTY & TRANSPARENCY STANDARD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            No Marketing Fluff. Real Specs Only.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            We adhere strictly to technical honesty. You won’t find fake logos, fabricated active user counts, or vanity marketing quotes here—only real engineering metrics.
          </p>
        </div>

        {/* 4-Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-3xl border border-slate-200/90 flex flex-col justify-between hover:border-emerald-300 transition-all duration-300 group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                      <IconComponent className={`w-5 h-5 ${item.accent}`} />
                    </div>
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className={`text-4xl font-extrabold font-mono tracking-tight mb-2 ${item.accent}`}>
                    {item.value}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.label}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-mono text-slate-500 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>Verified Benchmark</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparency Banner Statement */}
        <div className="glass-panel rounded-3xl p-8 border border-sky-100 bg-gradient-to-r from-white via-sky-50/50 to-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-900 flex items-center justify-center md:justify-start gap-2">
              <EyeOff className="w-5 h-5 text-sky-600" />
              <span>Zero-Tracker Architecture Guarantee</span>
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every request processed through the PulseQL demo engine is rendered locally or statelessly at edge instances. We process data strictly for transient simulation with zero tracking scripts or analytics cookies.
            </p>
          </div>
          <div className="px-5 py-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-700 font-bold shrink-0 flex items-center gap-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>100% Privacy Compliant</span>
          </div>
        </div>

      </div>
    </section>
  );
}
