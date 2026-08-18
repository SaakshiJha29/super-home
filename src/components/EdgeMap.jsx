import React, { useState } from 'react';
import { Globe, Server, Activity, Cpu, ShieldCheck, Zap, ArrowRight, Radio } from 'lucide-react';

export default function EdgeMap() {
  const regions = [
    {
      id: 'us-east',
      name: 'US-East (N. Virginia)',
      coords: { x: '26%', y: '36%' },
      latency: '12ms',
      uptime: '99.999%',
      rps: '420,000 req/s',
      status: 'Optimal',
      color: 'bg-emerald-500',
    },
    {
      id: 'us-west',
      name: 'US-West (Oregon)',
      coords: { x: '16%', y: '32%' },
      latency: '18ms',
      uptime: '99.995%',
      rps: '310,000 req/s',
      status: 'Optimal',
      color: 'bg-emerald-500',
    },
    {
      id: 'eu-central',
      name: 'EU-Central (Frankfurt)',
      coords: { x: '50%', y: '28%' },
      latency: '14ms',
      uptime: '100%',
      rps: '380,000 req/s',
      status: 'Optimal',
      color: 'bg-emerald-500',
    },
    {
      id: 'ap-south',
      name: 'AP-South (Mumbai)',
      coords: { x: '71%', y: '46%' },
      latency: '24ms',
      uptime: '99.99%',
      rps: '290,000 req/s',
      status: 'Optimal',
      color: 'bg-emerald-500',
    },
    {
      id: 'sa-east',
      name: 'SA-East (São Paulo)',
      coords: { x: '34%', y: '66%' },
      latency: '32ms',
      uptime: '99.98%',
      rps: '140,000 req/s',
      status: 'Moderate',
      color: 'bg-sky-500',
    }
  ];

  const [activeRegion, setActiveRegion] = useState(regions[0]);

  return (
    <section id="edge-map" className="py-24 bg-mesh-light relative overflow-hidden border-t border-sky-100">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-200/40 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-700 text-xs font-mono font-bold shadow-sm">
            <Radio className="w-3.5 h-3.5 text-sky-600 animate-pulse" />
            <span>GLOBAL EDGE TOPOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Deploy & test across 35+ edge PoPs
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Interactive network topology visualizer. Click any region marker below to inspect live routing performance.
          </p>
        </div>

        {/* Map & Telemetry Dashboard Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* SVG & Image Map Visualizer (8 cols) */}
          <div className="lg:col-span-8 glass-panel rounded-3xl p-6 border border-slate-200/90 shadow-xl relative min-h-[460px] flex flex-col justify-between overflow-hidden bg-white/95">
            
            {/* Map Header */}
            <div className="flex justify-between items-center pb-4 border-b border-slate-100 relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="font-mono text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Live Global Map & Routing
                </span>
              </div>
              <span className="text-[11px] font-mono text-sky-700 bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-200 font-bold">
                35 Edge PoPs Active
              </span>
            </div>

            {/* High-Resolution Map Canvas Container */}
            <div className="relative w-full h-[360px] my-4 rounded-2xl bg-slate-900 overflow-hidden flex items-center justify-center shadow-inner border border-slate-800">
              
              {/* High-Resolution World Map Image Layer */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8yRXBb1qi4FGWI49lWQKVJCM-656FI-egsOZZvY6RyB_3yNovuuJTRjnhfP4OSjfxBVasPclOfR2xDdNvXH5hYZcla4coUxSDMQn0ZOd-gqFcLJ_y4z4e_KiWza8HQ2HcyFQDbq3P-pwSmEYz6UWCKi8mSDInDHwT4FwA1mCzHa8fPdOnzYUhA5BbZ0kJg696K5B33d198da_KjE_o3etdocXMeeUlwx3DE1MBeRrB5JLY05ELVz5ug"
                alt="Global Network Map"
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity scale-105"
              />

              {/* Glowing Grid Overlay */}
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(56,189,248,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.25)_1px,transparent_1px)] bg-[size:24px_24px]"></div>

              {/* SVG Signal Ray Curved Paths */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-75">
                <path d="M 26% 36% Q 38% 22% 50% 28%" stroke="#38bdf8" strokeWidth="2" strokeDasharray="6 6" fill="none" className="animate-pulse" />
                <path d="M 50% 28% Q 60% 36% 71% 46%" stroke="#38bdf8" strokeWidth="2" strokeDasharray="6 6" fill="none" className="animate-pulse" />
                <path d="M 26% 36% Q 30% 50% 34% 66%" stroke="#38bdf8" strokeWidth="2" strokeDasharray="6 6" fill="none" />
                <path d="M 16% 32% Q 21% 34% 26% 36%" stroke="#38bdf8" strokeWidth="2" fill="none" />
              </svg>

              {/* Region Node Markers */}
              {regions.map((region) => {
                const isSelected = activeRegion.id === region.id;
                return (
                  <div
                    key={region.id}
                    onClick={() => setActiveRegion(region)}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
                    style={{ left: region.coords.x, top: region.coords.y }}
                  >
                    <div className="relative flex items-center justify-center">
                      <span className={`animate-ping absolute inline-flex h-8 w-8 rounded-full ${isSelected ? 'bg-sky-400 opacity-80' : 'bg-emerald-400 opacity-60'}`}></span>
                      <span className={`relative inline-flex rounded-full ${isSelected ? 'h-5 w-5 bg-sky-400 border-2 border-white shadow-[0_0_20px_rgba(56,189,248,0.9)] scale-110' : 'h-4 w-4 bg-emerald-400 border-2 border-white shadow-md'} transition-all`}></span>
                    </div>
                    
                    {/* Tooltip Badge */}
                    <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 ${isSelected ? 'block' : 'hidden group-hover:block'} whitespace-nowrap bg-slate-950 text-white text-[11px] font-mono py-1.5 px-3 rounded-xl shadow-2xl border border-sky-400/80 z-30 font-bold`}>
                      <span className="text-sky-300">{region.name}</span>
                      <span className="text-emerald-400 ml-2 font-mono">({region.latency})</span>
                    </div>
                  </div>
                );
              })}

              <div className="absolute bottom-3 left-4 text-[10px] font-mono text-slate-300 font-semibold bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-xl border border-slate-700/80 z-10">
                Click any marker to inspect PoP routing telemetry
              </div>

            </div>

            {/* Region Switcher Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 relative z-10">
              {regions.map((reg) => (
                <button
                  key={reg.id}
                  onClick={() => setActiveRegion(reg)}
                  className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                    activeRegion.id === reg.id
                      ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-sky-50 hover:border-sky-300'
                  }`}
                >
                  {reg.name.split(' ')[0]}
                </button>
              ))}
            </div>

          </div>

          {/* Telemetry Detail Card (4 cols) */}
          <div className="lg:col-span-4 glass-panel rounded-3xl p-6 border border-slate-200/90 shadow-xl bg-white flex flex-col justify-between">
            
            <div className="space-y-6">
              
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Server className="w-5 h-5 text-sky-600" />
                  <span className="font-bold text-slate-900 text-base">PoP Telemetry</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-100 text-emerald-700 border border-emerald-200">
                  {activeRegion.status}
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-bold">
                  Active Region
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                  {activeRegion.name}
                </h3>
              </div>

              {/* Metrics */}
              <div className="space-y-4">
                <div className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-100 flex justify-between items-center">
                  <span className="text-xs font-medium text-slate-600">Region P99 Latency</span>
                  <span className="text-lg font-mono font-bold text-sky-700">{activeRegion.latency}</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex justify-between items-center">
                  <span className="text-xs font-medium text-slate-600">Simulated Throughput</span>
                  <span className="text-sm font-mono font-bold text-slate-900">{activeRegion.rps}</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex justify-between items-center">
                  <span className="text-xs font-medium text-slate-600">Historical Uptime</span>
                  <span className="text-sm font-mono font-bold text-emerald-600">{activeRegion.uptime}</span>
                </div>
              </div>

            </div>

            <div className="pt-6 border-t border-slate-100">
              <a
                href="#sandbox"
                className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs font-mono transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Test {activeRegion.name.split(' ')[0]} in Sandbox</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
