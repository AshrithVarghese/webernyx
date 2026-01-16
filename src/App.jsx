import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import '@fontsource-variable/plus-jakarta-sans';

function App() {
  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-[#5e17eb] selection:text-white overflow-x-hidden">
      {/* Dynamic Nav */}
      <nav className="fixed top-0 w-full z-[100] bg-white/70 backdrop-blur-xl border-b border-slate-100 py-5 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#5e17eb] rounded-lg rotate-12 flex items-center justify-center">
            <span className="text-white font-black -rotate-12">W</span>
          </div>
          <h1 className="text-xl font-black tracking-tighter text-slate-900">WEBERNYX</h1>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-slate-500">
          <a href="#services" className="hover:text-[#5e17eb] transition-colors">Arsenal</a>
          <a href="#team" className="hover:text-[#5e17eb] transition-colors">Architects</a>
        </div>
        <a href="#contact" className="bg-slate-900 text-white px-7 py-2.5 rounded-full text-sm font-bold hover:bg-[#5e17eb] hover:scale-105 transition-all active:scale-95 shadow-lg shadow-purple-200">
          Get Started
        </a>
      </nav>

      <main>
        <Hero />
        <div id="services">
          <Services />
        </div>
        <div id="team">
          <Team />
        </div>
        <Contact />
      </main>

      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-slate-400 font-medium tracking-wide">
          © 2026 WEBERNYX <span className="mx-2 text-slate-200">|</span> BUILT FOR DOMINANCE
        </p>
      </footer>
    </div>
  );
}

export default App;
