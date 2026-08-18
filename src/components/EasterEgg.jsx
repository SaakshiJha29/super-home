import React, { useState, useEffect } from 'react';
import { Terminal, ShieldAlert, Sparkles, X, Activity, Cpu, CheckCircle2, Lock } from 'lucide-react';

export default function EasterEgg() {
  const [unlocked, setUnlocked] = useState(false);
  const [inputSequence, setInputSequence] = useState([]);

  // Konami Code sequence: Up Up Down Down Left Right Left Right B A
  const konamiCode = [
    'ArrowUp', 'ArrowUp', 
    'ArrowDown', 'ArrowDown', 
    'ArrowLeft', 'ArrowRight', 
    'ArrowLeft', 'ArrowRight', 
    'b', 'a'
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      
      setInputSequence((prev) => {
        const updated = [...prev, key].slice(-10);
        
        // Compare with Konami Code
        const isMatch = konamiCode.every((k, idx) => {
          const target = k.toLowerCase();
          const current = updated[idx] ? updated[idx].toLowerCase() : '';
          return target === current;
        });

        if (isMatch && updated.length === 10) {
          setUnlocked(true);
        }

        return updated;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!unlocked) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-lg w-full px-4 animate-bounce-short">
      <div className="glass-panel rounded-3xl p-6 border-2 border-sky-400/80 bg-slate-950/95 backdrop-blur-2xl shadow-[0_0_50px_rgba(56,189,248,0.6)] relative overflow-hidden">
        
        {/* Top glowing ambient line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-emerald-400 to-indigo-500"></div>

        {/* Close Button */}
        <button
          onClick={() => setUnlocked(false)}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800 transition-colors"
          title="Dismiss Easter Egg"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-400 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(56,189,248,0.5)]">
            <Terminal className="w-6 h-6 text-sky-300 animate-pulse" />
          </div>

          <div className="space-y-2 pr-6">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-sky-400 text-slate-950 uppercase tracking-wider">
                SECRET UNLOCKED
              </span>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1 font-semibold">
                <Sparkles className="w-3 h-3" />
                Konami Code Granted
              </span>
            </div>

            <h3 className="text-lg font-bold text-white tracking-tight">
              Internal Node Debugger Access Active ⚡
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed">
              Congratulations! You unlocked the secret internal cluster diagnostic listener. High-throughput edge telemetry features unlocked.
            </p>

            {/* Simulated Debug Console Output */}
            <div className="mt-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-sky-300 space-y-1">
              <div className="flex justify-between">
                <span>[CLUSTER_NODE]</span>
                <span className="text-emerald-400">STATUS: OVERCLOCKED</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>[DIRECT_SOCKET]</span>
                <span>wss://edge-debug.pulseql.internal</span>
              </div>
              <div className="text-[10px] text-slate-500 pt-1">
                Sequence: ↑ ↑ ↓ ↓ ← → ← → B A
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
