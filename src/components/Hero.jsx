import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-white text-neutral-900">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient light overlay that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 sm:py-28">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
          className="mb-4 inline-flex items-center rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-600 backdrop-blur-sm"
        >
          Next‑Gen Video Editing Portfolio
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center text-4xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-6xl"
        >
          Crisp. Minimal. Futuristic.
          <br />
          Crafted for 9:16 Impact
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="mt-5 max-w-2xl text-center text-base text-neutral-600 sm:text-lg"
        >
          Showcasing 60% high‑energy reels and 40% clean 9:16 visuals with smooth motion and subtle parallax.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="mt-8 flex items-center gap-3"
        >
          <a
            href="#work"
            className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-900"
          >
            Hire Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
