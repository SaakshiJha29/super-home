import React, { useState, useEffect } from 'react';
import { Sliders, Copy, Check, RefreshCw, Terminal, AlertTriangle, Zap, Server, Activity } from 'lucide-react';

export default function InteractiveSandbox() {
  const [protocol, setProtocol] = useState('REST API'); // 'REST API', 'GraphQL', 'Fault Inject'
  const [latency, setLatency] = useState(120); // 10ms - 800ms
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [requestCount, setRequestCount] = useState(1);

  // Trigger loading animation when latency or protocol changes
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      setRequestCount(prev => prev + 1);
    }, Math.min(latency / 2, 250)); // Responsive micro-feedback
    return () => clearTimeout(timer);
  }, [latency, protocol]);

  // Dynamic payload generator based on state
  const getPayload = () => {
    const timestamp = new Date().toISOString();
    
    if (protocol === 'REST API') {
      return {
        status: 200,
        message: "OK",
        protocol: "HTTP/2 (REST)",
        endpoint: "/v1/users/usr_9821/telemetry",
        simulated_latency: `${latency}ms`,
        headers: {
          "content-type": "application/json",
          "x-pulseql-edge": "us-east-virginia-node-1",
          "x-rate-limit-remaining": 498
        },
        data: {
          user_id: "usr_9821",
          name: "Alex Vance",
          role: "Senior API Engineer",
          network_status: latency > 400 ? "degraded_high_latency" : "optimal",
          ping_ms: latency,
          timestamp: timestamp
        }
      };
    } else if (protocol === 'GraphQL') {
      return {
        data: {
          pulseql_cluster: {
            node_id: "edge_node_eu_central",
            query_latency: `${latency}ms`,
            active_subscriptions: 1420,
            schema_version: "2.4.1",
            health: {
              cpu_load: "12.4%",
              memory_used_mb: 184,
              packet_integrity: "100%"
            }
          }
        },
        extensions: {
          execution_time_ms: latency,
          request_id: `req_gql_${requestCount}`
        }
      };
    } else {
      // Fault Inject Protocol
      return {
        status: 503,
        error: "ServiceUnavailable",
        protocol: "FAULT_INJECTION_ACTIVE",
        fault_type: "LATENCY_SPIKE_AND_PACKET_DROP",
        simulated_delay: `${latency}ms`,
        fault_details: {
          packet_loss_induced: "18.5%",
          connection_throttled: true,
          action_recommended: "Verify fallback circuit-breaker mechanism in client SDK."
        },
        timestamp: timestamp
      };
    }
  };

  const currentPayload = getPayload();
  const jsonString = JSON.stringify(currentPayload, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Color helper for latency gauge
  const getLatencyColor = () => {
    if (protocol === 'Fault Inject') return 'text-amber-400 bg-amber-500/10 border-amber-500/30';
    if (latency < 100) return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
    if (latency <= 350) return 'text-sky-400 bg-sky-500/10 border-sky-500/30';
    return 'text-rose-400 bg-rose-500/10 border-rose-500/30';
  };

  return (
    <section id="sandbox" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>INTERACTIVE MICRO-INTERACTION DEMO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Live Sandbox Inspector
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Interact directly with the PulseQL mock engine below. Switch protocols and throttle latency to observe real-time payload transformations.
          </p>
        </div>

        {/* Sandbox Card Container */}
        <div className="glass-panel rounded-3xl border border-slate-800 p-6 md:p-8 max-w-5xl mx-auto shadow-2xl relative">
          
          {/* Controls Bar: Protocols & Latency Slider */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pb-8 border-b border-slate-800/80">
            
            {/* Protocol Target Switcher */}
            <div className="lg:col-span-6 space-y-2">
              <label className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-sky-400" />
                Select Target Protocol
              </label>
              <div className="grid grid-cols-3 gap-2 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800">
                {['REST API', 'GraphQL', 'Fault Inject'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setProtocol(mode)}
                    className={`py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-1.5 ${
                      protocol === mode
                        ? mode === 'Fault Inject'
                          ? 'bg-amber-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                          : 'bg-gradient-to-r from-sky-400 to-sky-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(14,165,233,0.4)]'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    {mode === 'Fault Inject' && <AlertTriangle className="w-3.5 h-3.5" />}
                    <span>{mode}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Latency Slider */}
            <div className="lg:col-span-6 space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-sky-400" />
                  Network Latency Throttling
                </label>
                <span className={`px-2.5 py-0.5 rounded-md font-mono text-xs font-bold border ${getLatencyColor()}`}>
                  {latency} ms
                </span>
              </div>
              
              <div className="space-y-1.5">
                <input
                  type="range"
                  min="10"
                  max="800"
                  step="10"
                  value={latency}
                  onChange={(e) => setLatency(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400 hover:accent-sky-300 transition-all"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>10ms (Optimal)</span>
                  <span>250ms (Mobile 3G)</span>
                  <span>800ms (Heavy Throttling)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Response Payload Inspector Window */}
          <div className="pt-6">
            <div className="code-block rounded-2xl overflow-hidden shadow-2xl">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
                    pulseql-inspector://{protocol.toLowerCase().replace(/\s+/g, '-')}/response
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {/* Status Indicator Pill */}
                  <div className="flex items-center gap-1.5">
                    {loading ? (
                      <RefreshCw className="w-3.5 h-3.5 text-sky-400 animate-spin" />
                    ) : protocol === 'Fault Inject' ? (
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                        503 FAULT INJECTED
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        200 OK ({latency}ms)
                      </span>
                    )}
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors border border-slate-700"
                    title="Copy response payload"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Code Output Body */}
              <div className="p-4 sm:p-6 overflow-x-auto min-h-[320px] max-h-[460px] relative font-mono text-xs sm:text-sm leading-relaxed text-slate-200 bg-[#070a12]">
                {loading && (
                  <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] flex items-center justify-center z-10">
                    <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-900 border border-sky-500/40 shadow-xl">
                      <RefreshCw className="w-4 h-4 text-sky-400 animate-spin" />
                      <span className="text-xs font-mono text-slate-200">Simulating network delay ({latency}ms)...</span>
                    </div>
                  </div>
                )}

                <pre>
                  <code>
                    {jsonString.split('\n').map((line, i) => {
                      // Basic syntax colorizer for JSON view
                      let coloredLine = line;
                      if (line.includes('"status":') || line.includes('"error":')) {
                        return <div key={i} className="text-rose-400 font-semibold">{line}</div>;
                      }
                      if (line.includes('"simulated_latency":') || line.includes('"simulated_delay":') || line.includes('"ping_ms":')) {
                        return <div key={i} className="text-sky-300 font-semibold">{line}</div>;
                      }
                      if (line.includes('"protocol":')) {
                        return <div key={i} className="text-emerald-300">{line}</div>;
                      }
                      return <div key={i}>{line}</div>;
                    })}
                  </code>
                </pre>
              </div>

              {/* Inspector Footer Stats */}
              <div className="px-4 py-2.5 bg-slate-900/90 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Server className="w-3 h-3 text-sky-400" />
                    <span>Edge: us-east-1a</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Activity className="w-3 h-3 text-emerald-400" />
                    <span>Requests Processed: #{requestCount}</span>
                  </span>
                </div>
                <div className="text-slate-500">
                  PulseQL Edge Runtime v2.4
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
