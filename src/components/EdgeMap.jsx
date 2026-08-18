import React, { useState } from 'react';
import { Globe, Server, Activity, Cpu, ShieldCheck, Zap, ArrowRight, Radio } from 'lucide-react';

export default function EdgeMap() {
  const regions = [
    {
      id: 'us-east',
      name: 'US-East (N. Virginia)',
      coords: { x: '28%', y: '35%' },
      latency: '12ms',
      uptime: '99.999%',
      rps: '420,000 req/s',
      status: 'Optimal',
      color: 'bg-emerald-500',
    },
    {
      id: 'us-west',
      name: 'US-West (Oregon)',
      coords: { x: '18%', y: '32%' },
      latency: '18ms',
      uptime: '99.995%',
      rps: '310,000 req/s',
      status: 'Optimal',
      color: 'bg-emerald-500',
    },
    {
      id: 'eu-central',
      name: 'EU-Central (Frankfurt)',
      coords: { x: '52%', y: '28%' },
      latency: '14ms',
      uptime: '100%',
      rps: '380,000 req/s',
      status: 'Optimal',
      color: 'bg-emerald-500',
    },
    {
      id: 'ap-south',
      name: 'AP-South (Mumbai)',
      coords: { x: '72%', y: '48%' },
      latency: '24ms',
      uptime: '99.99%',
      rps: '290,000 req/s',
      status: 'Optimal',
      color: 'bg-emerald-500',
    },
    {
      id: 'sa-east',
      name: 'SA-East (São Paulo)',
      coords: { x: '35%', y: '70%' },
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-200/30 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-700 text-xs font-mono font-bold">
            <Radio className="w-3.5 h-3.5 text-sky-600 animate-pulse" />
            <span>GLOBAL EDGE TOPOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Deploy & test across 35+ edge PoPs
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Interactive network topology visualizer. Hover or click any region marker below to inspect live routing performance.
          </p>
        </div>

        {/* Map & Telemetry Dashboard Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* SVG Map Visualizer (8 cols) */}
          <div className="lg:col-span-8 glass-panel rounded-3xl p-6 border border-slate-200/90 shadow-xl relative min-h-[420px] flex flex-col justify-between overflow-hidden bg-white/90">
            
            {/* Map Header */}
            <div className="flex justify-between items-center pb-4 border-b border-slate-100 relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="font-mono text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Live Network Map
                </span>
              </div>
              <span className="text-[11px] font-mono text-sky-700 bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-200 font-bold">
                Worldwide Mesh Connected
              </span>
            </div>

            {/* Map Canvas Overlay */}
            <div className="relative w-full h-[320px] my-4 rounded-2xl bg-slate-50 border border-slate-200/60 overflow-hidden flex items-center justify-center">
              
              {/* World Grid Lines */}
              <div className="absolute inset-0 bg-grid-pattern-light opacity-60"></div>
              
              {/* SVG Connecting Vector Rays */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                <path d="M 28% 35% Q 40% 25% 52% 28%" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="4 4" fill="none" className="animate-pulse" />
                <path d="M 52% 28% Q 62% 38% 72% 48%" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="4 4" fill="none" className="animate-pulse" />
                <path d="M 28% 35% Q 30% 55% 35% 70%" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                <path d="M 18% 32% Q 23% 33% 28% 35%" stroke="#0ea5e9" strokeWidth="2" fill="none" />
              </svg>

              {/* Region Markers */}
              {regions.map((region) => (
                <div
                  key={region.id}
                  onClick={() => setActiveRegion(region)}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20`}
                  style={{ left: region.coords.x, top: region.coords.y }}
                >
                  <div className="relative flex items-center justify-center">
                    <span className={`animate-ping absolute inline-flex h-6 w-6 rounded-full ${region.color} opacity-75`}></span>
                    <span className={`relative inline-flex rounded-full h-4 w-4 ${region.color} border-2 border-white shadow-md group-hover:scale-125 transition-transform`}></span>
                  </div>
                  
                  {/* Tooltip Label */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block whitespace-nowrap bg-slate-900 text-white text-[11px] font-mono py-1 px-2.5 rounded-lg shadow-xl border border-slate-700 z-30">
                    {region.name} ({region.latency})
                  </div>
                </div>
              ))}

              <div className="absolute bottom-3 left-4 text-[10px] font-mono text-slate-400">
                Click any region marker to inspect live PoP telemetry
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
