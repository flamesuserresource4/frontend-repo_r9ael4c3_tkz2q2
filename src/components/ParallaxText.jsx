import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxText = ({ text = 'FUTURISTIC • MINIMAL • INTERACTIVE •', speed = 80 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], [0, speed]);

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-white py-10 sm:py-14">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      <motion.div style={{ x }} className="whitespace-nowrap">
        <span className="mx-2 inline-block text-4xl font-semibold tracking-tight text-neutral-900 sm:text-6xl">
          {text} {text} {text}
        </span>
      </motion.div>
    </section>
  );
};

export default ParallaxText;
