import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, UserPlus, LogIn, Key, ShieldCheck, Zap, UserCheck } from 'lucide-react';
import AuthModal from './AuthModal';

export default function AuthCallout() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="auth-callout" className="py-24 bg-mesh-light relative overflow-hidden border-t border-sky-100">
        
        {/* Background Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-sky-300/30 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Callout Text (Kept intact as requested) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-700 text-xs font-mono font-bold shadow-sm">
                <Sparkles className="w-4 h-4 text-sky-600" />
                <span>DISCOVER THE FULL CONSOLE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Liked the idea?{' '}
                <span className="gradient-text block mt-1">
                  Login to our web application to discover more.
                </span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                Get unlimited access to persistent mock endpoints, global latency routing maps, team collaborative workspaces, and automated schema assertion tests.
              </p>

              {/* Feature Check List */}
              <div className="pt-2 space-y-3 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center gap-3 text-slate-700 text-sm font-semibold">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span>Unlimited Mock API Endpoints & Custom Domains</span>
                </div>

                <div className="flex items-center gap-3 text-slate-700 text-sm font-semibold">
                  <div className="w-6 h-6 rounded-full bg-sky-100 border border-sky-200 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  </div>
                  <span>Real-Time Fault & Throttle Simulation Profiles</span>
                </div>

                <div className="flex items-center gap-3 text-slate-700 text-sm font-semibold">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  </div>
                  <span>Team RBAC & Instant GitHub Integration</span>
                </div>
              </div>

            </div>

            {/* Right Column: Clickable Join Icon Badge Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                onClick={() => setModalOpen(true)}
                className="glass-panel rounded-3xl p-8 border-2 border-sky-300/80 bg-white/95 shadow-2xl relative max-w-sm w-full cursor-pointer hover:border-sky-500 hover:shadow-[0_12px_45px_rgba(14,165,233,0.35)] transition-all duration-300 group text-center flex flex-col items-center justify-center space-y-5 transform hover:-translate-y-1.5"
              >
                
                {/* Glowing Clickable Join Icon */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-sky-400 to-sky-600 p-[1px] shadow-[0_0_30px_rgba(14,165,233,0.4)] group-hover:shadow-[0_0_50px_rgba(14,165,233,0.7)] group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                    <div className="w-full h-full bg-white rounded-[23px] flex items-center justify-center">
                      <LogIn className="w-10 h-10 text-sky-600 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  
                  {/* Subtle Pulse Ring */}
                  <span className="absolute -top-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-sky-500"></span>
                  </span>
                </div>

                {/* Callout Copy & Already a user option */}
                <div className="space-y-2">
                  <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-700 font-mono text-[11px] font-bold uppercase tracking-wider">
                    CLICK TO LOGIN
                  </span>
                  
                  <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors pt-1">
                    Sign In to Web App
                  </h3>
                  
                  <p className="text-xs text-sky-700 font-mono font-bold flex items-center justify-center gap-1">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Already a user? Login to your account</span>
                  </p>
                </div>

                {/* Action Indicator Button */}
                <div className="pt-1">
                  <div className="px-6 py-3 rounded-2xl bg-sky-500 group-hover:bg-sky-600 text-white font-bold text-xs shadow-md shadow-sky-500/25 flex items-center gap-2 transition-all">
                    <span>Access Console Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Auth Modal Triggered by Click */}
      <AuthModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        mode="signin"
      />
    </>
  );
}
