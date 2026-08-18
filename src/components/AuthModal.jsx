import React, { useState, useRef, useEffect } from 'react';
import { X, Mail, Lock, ArrowRight, CheckCircle2, Sparkles, UserCheck, LogIn, Key, User } from 'lucide-react';

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function GoogleIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
    </svg>
  );
}

export default function AuthModal({ isOpen, onClose, mode = 'signin' }) {
  const [isLoginView, setIsLoginView] = useState(mode === 'signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const emailInputRef = useRef(null);

  useEffect(() => {
    setIsLoginView(mode === 'signin');
  }, [mode, isOpen]);

  useEffect(() => {
    if (isOpen && emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, [isOpen, isLoginView]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAuthenticated(true);
    }, 850);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in">
      <div className="glass-panel rounded-3xl p-8 border border-white/90 shadow-2xl max-w-md w-full relative bg-white/95">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 border border-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {authenticated ? (
          /* Authenticated Success State */
          <div className="text-center py-8 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 animate-bounce" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-slate-900">Welcome Back to PulseQL!</h3>
              <p className="text-sm text-slate-600 font-medium">
                Signed in successfully. Launching your high-speed API console...
              </p>
            </div>
            <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 text-xs font-mono text-sky-800 font-bold">
              Signed in as: {email || 'developer@pulseql.io'}
            </div>
            <button
              onClick={() => {
                setAuthenticated(false);
                onClose();
              }}
              className="w-full py-3.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs shadow-md"
            >
              Continue to Console
            </button>
          </div>
        ) : (
          /* Sign In Form View */
          <div>
            
            {/* Header Badge */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-sky-100 border border-sky-200 flex items-center justify-center">
                <LogIn className="w-4 h-4 text-sky-600" />
              </div>
              <span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-wider">
                PulseQL Portal Sign In
              </span>
            </div>

            {/* Title */}
            <div className="mb-6 space-y-1">
              <h3 className="text-2xl font-extrabold text-slate-900">
                {isLoginView ? 'Sign In to Your Account' : 'Register New Developer Account'}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {isLoginView ? 'Enter your credentials to manage persistent mock endpoints.' : 'Spin up your first cluster in under 30 seconds.'}
              </p>
            </div>

            {/* Prompt for Existing Users */}
            <div className="mb-5 p-3 rounded-2xl bg-sky-50/80 border border-sky-200 flex items-center justify-between text-xs">
              <span className="text-slate-700 font-semibold flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-sky-600" />
                Already a user?
              </span>
              <button
                type="button"
                onClick={() => setIsLoginView(true)}
                className="text-sky-700 font-bold hover:underline font-mono bg-white px-2.5 py-1 rounded-lg border border-sky-200 shadow-2xs"
              >
                LOGIN TO YOUR ACCOUNT
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Account Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    ref={emailInputRef}
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="developer@pulseql.io"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm font-medium focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all shadow-2xs"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                    Password
                  </label>
                  {isLoginView && (
                    <a href="#" onClick={(e) => { e.preventDefault(); alert("Password reset link dispatched to your email!"); }} className="text-[11px] font-mono text-sky-600 font-bold hover:underline">
                      Forgot?
                    </a>
                  )}
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm font-medium focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all shadow-2xs"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm shadow-md shadow-sky-500/25 transition-all flex items-center justify-center gap-2 transform active:scale-98"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Signing In...</span>
                  </div>
                ) : (
                  <>
                    <span>{isLoginView ? 'Sign In to Account' : 'Create Account'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <div className="relative my-5 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <span className="relative bg-white px-3 text-[11px] font-mono text-slate-400 uppercase font-semibold">
                Or Sign In with
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setEmail('github-dev@pulseql.io');
                  setAuthenticated(true);
                }}
                className="py-2.5 px-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-2xs"
              >
                <GithubIcon className="w-4 h-4 text-slate-900" />
                <span>GitHub</span>
              </button>
              
              <button
                onClick={() => {
                  setEmail('google-dev@pulseql.io');
                  setAuthenticated(true);
                }}
                className="py-2.5 px-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-2xs"
              >
                <GoogleIcon className="w-4 h-4" />
                <span>Google</span>
              </button>
            </div>

            {/* Toggle view link */}
            <div className="mt-5 text-center text-xs text-slate-600 font-medium pt-2 border-t border-slate-100">
              {isLoginView ? (
                <button
                  type="button"
                  onClick={() => setIsLoginView(false)}
                  className="text-sky-600 hover:underline font-bold"
                >
                  Need a new account? Register here
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsLoginView(true)}
                  className="text-sky-600 hover:underline font-bold"
                >
                  Already a user? Login to your account
                </button>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
