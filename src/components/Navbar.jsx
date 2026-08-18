import React, { useState } from 'react';
import { Activity, Menu, X, ArrowRight, ShieldCheck, Cpu, Zap, Layers, LogIn, UserPlus, User } from 'lucide-react';
import AuthModal from './AuthModal';

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authTab, setAuthTab] = useState('login');

  const openAuth = (tabName = 'login') => {
    setAuthTab(tabName);
    setAuthModalOpen(true);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xl border-b border-sky-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo & Badge */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 p-[1px] shadow-[0_4px_16px_rgba(14,165,233,0.3)] group-hover:shadow-[0_6px_24px_rgba(14,165,233,0.5)] transition-all duration-300">
                <div className="w-full h-full bg-white rounded-[11px] flex items-center justify-center">
                  <Activity className="w-5 h-5 text-sky-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1">
                  Pulse<span className="text-sky-600">QL</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-sky-600 uppercase font-bold">
                  Network Sandbox
                </span>
              </div>
            </a>

            {/* Desktop Nav Items (Pills with icons & blue borders) */}
            <nav className="hidden md:flex items-center space-x-2">
              <a 
                href="#features" 
                className="px-3.5 py-2 rounded-xl text-xs font-bold border border-sky-200 bg-sky-50/70 hover:bg-sky-100 hover:border-sky-400 text-sky-700 transition-all flex items-center gap-1.5 shadow-sm"
              >
                <Zap className="w-4 h-4 text-sky-600" />
                <span>Features</span>
              </a>

              <a 
                href="#sandbox" 
                className="px-3.5 py-2 rounded-xl text-xs font-bold border border-sky-200 bg-sky-50/70 hover:bg-sky-100 hover:border-sky-400 text-sky-700 transition-all flex items-center gap-1.5 shadow-sm"
              >
                <Activity className="w-4 h-4 text-emerald-500" />
                <span>Live Sandbox</span>
              </a>

              <a 
                href="#architecture" 
                className="px-3.5 py-2 rounded-xl text-xs font-bold border border-sky-200 bg-sky-50/70 hover:bg-sky-100 hover:border-sky-400 text-sky-700 transition-all flex items-center gap-1.5 shadow-sm"
              >
                <Layers className="w-4 h-4 text-sky-600" />
                <span>Architecture</span>
              </a>

              <a 
                href="#transparency" 
                className="px-3.5 py-2 rounded-xl text-xs font-bold border border-sky-200 bg-sky-50/70 hover:bg-sky-100 hover:border-sky-400 text-sky-700 transition-all flex items-center gap-1.5 shadow-sm"
              >
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>Honesty & Specs</span>
              </a>
            </nav>

            {/* External GitHub Repo, Sign In / Sign Up & Primary CTA */}
            <div className="hidden md:flex items-center space-x-2.5">
              <a 
                href="https://github.com/SaakshiJha29/super-home.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-300 hover:shadow-sm transition-all flex items-center gap-2 text-xs font-mono font-medium"
                title="View GitHub Repository"
              >
                <GithubIcon className="w-4 h-4 text-sky-600" />
                <span>Repo</span>
              </a>

              {/* Sign In / Sign Up Option on Navbar */}
              <button
                onClick={() => openAuth('login')}
                className="px-3.5 py-2 rounded-xl text-xs font-bold border border-sky-300 bg-sky-50 hover:bg-sky-100 text-sky-700 transition-all flex items-center gap-1.5 shadow-sm cursor-pointer hover:border-sky-400"
              >
                <User className="w-4 h-4 text-sky-600" />
                <span>Sign In / Sign Up</span>
              </button>

              <a 
                href="#sandbox" 
                className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/35 transition-all duration-300 flex items-center gap-1.5 transform hover:-translate-y-0.5"
              >
                <span>Start Mocking</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-sky-600 hover:bg-sky-50 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-sky-100 bg-white/95 backdrop-blur-2xl px-4 pt-2 pb-6 space-y-3">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-bold border border-sky-200 bg-sky-50 text-sky-700"
            >
              <Zap className="w-4 h-4 text-sky-600" />
              <span>Features</span>
            </a>
            <a
              href="#sandbox"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-bold border border-sky-200 bg-sky-50 text-sky-700"
            >
              <Activity className="w-4 h-4 text-emerald-500" />
              <span>Live Sandbox</span>
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-bold border border-sky-200 bg-sky-50 text-sky-700"
            >
              <Layers className="w-4 h-4 text-sky-600" />
              <span>Architecture</span>
            </a>
            <a
              href="#transparency"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-bold border border-sky-200 bg-sky-50 text-sky-700"
            >
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              <span>Honesty & Specs</span>
            </a>
            
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => openAuth('login')}
                className="w-full py-3 px-4 rounded-xl font-bold text-center border border-sky-300 bg-sky-50 text-sky-700 flex items-center justify-center gap-2 text-sm shadow-sm"
              >
                <User className="w-4 h-4 text-sky-600" />
                <span>Sign In / Sign Up</span>
              </button>

              <a 
                href="https://github.com/SaakshiJha29/super-home.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl text-slate-700 bg-white border border-slate-200 flex items-center justify-center gap-2 text-sm font-mono font-medium shadow-sm"
              >
                <GithubIcon className="w-4 h-4 text-sky-600" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialTab={authTab}
      />
    </>
  );
}
