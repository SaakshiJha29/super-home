import React, { useState } from 'react';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveSandbox from './components/InteractiveSandbox';
import Features from './components/Features';
import Transparency from './components/Transparency';
import Architecture from './components/Architecture';
import AuthCallout from './components/AuthCallout';
import EasterEgg from './components/EasterEgg';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-sky-500 selection:text-white flex flex-col justify-between overflow-x-hidden">
      <CustomCursor />
      {loading && <Loader onFinish={() => setLoading(false)} />}
      
      <div>
        <Navbar />
        <main>
          <Hero />
          <InteractiveSandbox />
          <Features />
          <Transparency />
          <Architecture />
          <AuthCallout />
        </main>
      </div>
      
      <Footer />
      <EasterEgg />
      <ScrollToTop />
    </div>
  );
}
