import React from 'react';
import Hero from './components/Hero';
import ParallaxText from './components/ParallaxText';
import Showcase from './components/Showcase';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white font-inter text-neutral-900">
      <Hero />
      <ParallaxText text="REELS • 9:16 • CLEAN • MINIMAL • FUTURISTIC •" speed={120} />
      <Showcase />
      <ParallaxText text="SMOOTH • PARALLAX • SUBTLE • IMPACT •" speed={-80} />
      <Contact />
      <footer className="bg-white px-6 py-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Next‑Gen Editor — All rights reserved.
      </footer>
    </div>
  );
}

export default App;
