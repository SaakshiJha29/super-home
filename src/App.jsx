import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveSandbox from './components/InteractiveSandbox';
import Features from './components/Features';
import Transparency from './components/Transparency';
import Architecture from './components/Architecture';
import EasterEgg from './components/EasterEgg';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-slate-950 flex flex-col justify-between">
      <div>
        <Navbar />
        <main>
          <Hero />
          <InteractiveSandbox />
          <Features />
          <Transparency />
          <Architecture />
        </main>
      </div>
      <Footer />
      <EasterEgg />
    </div>
  );
}
