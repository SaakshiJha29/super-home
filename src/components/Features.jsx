import React from 'react';
import { Zap, AlertTriangle, Globe, ShieldCheck, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Features() {
  const features = [
    {
      id: 'provisioning',
      title: 'Instant Provisioning',
      description: 'Spin up synthetic REST & GraphQL mock endpoints in milliseconds. Define schemas on the fly and stream realistic payloads directly to client apps.',
      icon: Zap,
      badge: 'Sub-second Setup',
      glow: 'from-sky-500/20 to-sky-600/5',
      accentColor: 'text-sky-400',
      borderColor: 'hover:border-sky-500/50',
      codeSnippet: `const endpoint = await pulseql.mock({
  protocol: 'graphql',
  schema: './user-schema.pql'
});`
    },
    {
      id: 'fault-injection',
      title: 'Fault Injection',
      description: 'Stress-test client error boundaries by injecting 500/503 errors, rate-limiting HTTP 429s, simulated timeouts, and packet drop ratios under load.',
      icon: AlertTriangle,
      badge: 'Resilience Testing',
      glow: 'from-amber-500/20 to-amber-600/5',
      accentColor: 'text-amber-400',
      borderColor: 'hover:border-amber-500/50',
      widget: (
        <div className="bg-slate-950/80 rounded-xl p-3.5 border border-slate-800/80 space-y-2 text-xs font-mono">
          <div className="flex justify-between items-center text-slate-300">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              Fault Profile Active
            </span>
            <span className="text-[10px] text-slate-500">15% Drop Rate</span>
          </div>
          <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
            <div className="bg-amber-400 h-full w-3/4 rounded-full"></div>
          </div>
        </div>
      )
    },
    {
      id: 'edge-routing',
      title: 'Global Edge Routing',
      description: 'Deploy API mocks to over 35 global edge regions. Simulate true geographic latency for worldwide users with instant edge propagation.',
      icon: Globe,
      badge: '35+ Regions',
      glow: 'from-sky-400/20 to-indigo-500/5',
      accentColor: 'text-sky-300',
      borderColor: 'hover:border-sky-400/50',
      nodes: ['US-East', 'EU-Central', 'AP-South', 'SA-East']
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-mono font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>ENGINEERED CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Built for API resilience under stress
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            High-performance primitives designed for modern frontend and backend engineering teams.
          </p>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className={`glass-panel rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group ${feature.borderColor}`}
              >
                {/* Subtle gradient hover glow */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${feature.glow} rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-500`}></div>

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <IconComponent className={`w-6 h-6 ${feature.accentColor}`} />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-900/90 text-slate-300 border border-slate-800">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 font-normal">
                    {feature.description}
                  </p>
                </div>

                {/* Custom Visual Widgets inside Cards */}
                <div className="mt-4 pt-4 border-t border-slate-800/80">
                  {feature.codeSnippet && (
                    <div className="bg-[#080c14] rounded-xl p-3.5 border border-slate-800 text-[11px] font-mono text-slate-300 overflow-x-auto">
                      <pre><code>{feature.codeSnippet}</code></pre>
                    </div>
                  )}

                  {feature.widget && feature.widget}

                  {feature.nodes && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {feature.nodes.map((node) => (
                        <span key={node} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          {node}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Specs Note */}
        <div className="mt-12 glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Full Protocol Parity</h4>
              <p className="text-xs text-slate-400">Supports OpenAPI 3.0, GraphQL Schema Spec, gRPC reflections, and WebSockets.</p>
            </div>
          </div>
          <a
            href="#sandbox"
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-sky-400 font-semibold text-xs font-mono transition-colors shrink-0 flex items-center gap-1"
          >
            <span>Try in Sandbox</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
