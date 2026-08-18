import React, { useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveSandbox from './components/InteractiveSandbox';
import Features from './components/Features';
import Transparency from './components/Transparency';
import Architecture from './components/Architecture';
import EasterEgg from './components/EasterEgg';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-sky-500 selection:text-white flex flex-col justify-between overflow-x-hidden">
      {loading && <Loader onFinish={() => setLoading(false)} />}
      
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
