import React, { useState } from 'react';
import { Activity, Menu, X, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Badge */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 p-[1px] shadow-[0_0_15px_rgba(14,165,233,0.4)] group-hover:shadow-[0_0_25px_rgba(14,165,233,0.7)] transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                <Activity className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
                Pulse<span className="text-sky-400">QL</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-sky-400/80 uppercase font-semibold">
                Network Sandbox
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <a 
              href="#features" 
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/60 transition-all"
            >
              Features
            </a>
            <a 
              href="#sandbox" 
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/60 transition-all flex items-center gap-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              Live Sandbox
            </a>
            <a 
              href="#architecture" 
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/60 transition-all"
            >
              Architecture
            </a>
            <a 
              href="#transparency" 
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/60 transition-all"
            >
              Honesty & Specs
            </a>
          </nav>

          {/* External GitHub Repo & Primary CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com/SaakshiJha29/super-home.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800/80 transition-all flex items-center gap-2 text-xs font-mono"
              title="View GitHub Repository"
            >
              <GithubIcon className="w-4 h-4 text-sky-400" />
              <span>Repository</span>
            </a>

            <a 
              href="#sandbox" 
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold rounded-xl group bg-gradient-to-br from-sky-400 to-sky-600 group-hover:from-sky-400 group-hover:to-sky-500 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition-all duration-300"
            >
              <span className="relative px-4 py-2.5 transition-all ease-in duration-75 bg-slate-950 rounded-[10px] text-white group-hover:bg-opacity-0 flex items-center gap-1.5">
                <span>Start Mocking Free</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-2xl px-4 pt-2 pb-6 space-y-3">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900"
          >
            Features
          </a>
          <a
            href="#sandbox"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-sky-400 hover:text-white hover:bg-slate-900 flex items-center justify-between"
          >
            <span>Live Sandbox</span>
            <span className="px-2 py-0.5 text-xs font-mono rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">Interactive</span>
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900"
          >
            Architecture
          </a>
          <a
            href="#transparency"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900"
          >
            Honesty & Specs
          </a>
          
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <a 
              href="https://github.com/SaakshiJha29/super-home.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl text-slate-300 hover:text-white bg-slate-900 border border-slate-800 flex items-center justify-center gap-2 text-sm font-mono"
            >
              <GithubIcon className="w-4 h-4 text-sky-400" />
              <span>GitHub Repository</span>
            </a>
            <a 
              href="#sandbox" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 px-4 rounded-xl font-bold text-center bg-gradient-to-r from-sky-400 to-sky-600 text-white shadow-lg shadow-sky-500/20"
            >
              Start Mocking Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
