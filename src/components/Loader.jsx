import React, { useState, useEffect } from 'react';
import { Activity, Zap, Cpu, Server } from 'lucide-react';

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing PulseQL Edge Nodes...');
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const statuses = [
      { at: 20, text: 'Initializing PulseQL Edge Nodes...' },
      { at: 50, text: 'Connecting PoP Clusters (US-East, EU-Central)...' },
      { at: 80, text: 'Mounting Interactive Sandbox Inspector...' },
      { at: 100, text: 'Network Operational. Loading Interface...' },
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 5;
        const currentStatus = statuses.find((s) => s.at === next || (next > s.at && prev < s.at));
        if (currentStatus) {
          setStatusText(currentStatus.text);
        }

        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadingOut(true);
            setTimeout(() => {
              if (onFinish) onFinish();
            }, 600); // smooth fade transition
          }, 300);
          return 100;
        }
        return next;
      });
    }, 45); // Total ~1.0 second realistic initial loader

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-mesh-light flex flex-col items-center justify-center p-6 transition-opacity duration-600 ease-out ${
        fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Ambient Glow */}
      <div className="absolute w-[500px] h-[300px] bg-sky-300/40 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="relative z-10 max-w-md w-full glass-panel rounded-3xl p-8 border border-white/90 shadow-2xl flex flex-col items-center text-center space-y-6">
        
        {/* Glowing Logo Badge */}
        <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-400 to-sky-600 p-[1px] shadow-[0_0_30px_rgba(14,165,233,0.4)] animate-pulse">
          <div className="w-full h-full bg-white rounded-[15px] flex items-center justify-center">
            <Activity className="w-8 h-8 text-sky-600" />
          </div>
        </div>

        {/* Brand Name */}
        <div className="space-y-1">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 flex items-center justify-center gap-1.5">
            Pulse<span className="text-sky-600">QL</span>
          </h1>
          <p className="text-xs font-mono text-sky-700 uppercase tracking-widest font-bold">
            Real-World API Sandbox
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full space-y-2 pt-2">
          <div className="w-full bg-slate-200/80 h-2 rounded-full overflow-hidden p-0.5 border border-slate-200">
            <div
              className="bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 h-full rounded-full transition-all duration-150 ease-out shadow-sm"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="flex justify-between items-center text-[11px] font-mono font-semibold text-slate-600">
            <span className="truncate pr-2">{statusText}</span>
            <span className="text-sky-700 font-bold shrink-0">{progress}%</span>
          </div>
        </div>

        {/* Spec Footnote */}
        <div className="pt-2 flex items-center gap-4 text-[10px] font-mono text-slate-500">
          <span className="flex items-center gap-1">
            <Server className="w-3 h-3 text-sky-600" />
            Edge PoPs: 35+
          </span>
          <span>|</span>
          <span className="flex items-center gap-1">
            <Zap className="w-3 h-3 text-emerald-600" />
            Latency: &lt;15ms
          </span>
        </div>

      </div>
    </div>
  );
}
