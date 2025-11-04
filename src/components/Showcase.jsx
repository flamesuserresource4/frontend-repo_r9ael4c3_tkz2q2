import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const samples = [
  {
    id: 1,
    type: 'reel',
    src: 'https://cdn.coverr.co/videos/coverr-silhouette-of-a-man-9156/1080p.mp4',
    title: 'Fast Cut Reel',
  },
  {
    id: 2,
    type: 'reel',
    src: 'https://cdn.coverr.co/videos/coverr-stylish-young-woman-4514/1080p.mp4',
    title: 'Fashion Pulse',
  },
  {
    id: 3,
    type: 'reel',
    src: 'https://cdn.coverr.co/videos/coverr-dancer-in-sunset-9992/1080p.mp4',
    title: 'Rhythm & Motion',
  },
  {
    id: 4,
    type: 'vertical',
    src: 'https://cdn.coverr.co/videos/coverr-young-woman-looking-at-the-camera-1598/1080p.mp4',
    title: 'Portrait Edit',
  },
  {
    id: 5,
    type: 'vertical',
    src: 'https://cdn.coverr.co/videos/coverr-person-using-a-phone-5413/1080p.mp4',
    title: 'Clean Story',
  },
];

const ratio = { reels: 0.6, vertical: 0.4 };

const Showcase = () => {
  const [filter, setFilter] = useState('all');

  const items = useMemo(() => {
    if (filter === 'reel') return samples.filter((s) => s.type === 'reel');
    if (filter === 'vertical') return samples.filter((s) => s.type === 'vertical');
    return samples;
  }, [filter]);

  return (
    <section id="work" className="bg-white px-6 py-16 text-neutral-900 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col items-start justify-between gap-6 sm:mb-10 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl">Selected 9:16 Work</h2>
            <p className="mt-2 max-w-xl text-sm text-neutral-600 sm:text-base">
              Designed for social impact. 60% reels for energy, 40% clean vertical stories for clarity.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white p-1">
            <button
              onClick={() => setFilter('all')}
              className={`rounded-full px-4 py-2 text-sm transition ${
                filter === 'all' ? 'bg-neutral-900 text-white' : 'text-neutral-700 hover:text-neutral-900'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('reel')}
              className={`rounded-full px-4 py-2 text-sm transition ${
                filter === 'reel' ? 'bg-neutral-900 text-white' : 'text-neutral-700 hover:text-neutral-900'
              }`}
            >
              Reels (60%)
            </button>
            <button
              onClick={() => setFilter('vertical')}
              className={`rounded-full px-4 py-2 text-sm transition ${
                filter === 'vertical' ? 'bg-neutral-900 text-white' : 'text-neutral-700 hover:text-neutral-900'
              }`}
            >
              Vertical (40%)
            </button>
          </div>
        </div>

        {/* Ratio bar */}
        <div className="mb-8 h-2 w-full overflow-hidden rounded-full bg-neutral-100">
          <div className="h-full bg-neutral-900" style={{ width: `${ratio.reels * 100}%` }} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white"
            >
              <div className="relative aspect-[9/16] w-full overflow-hidden">
                <video
                  className="h-full w-full object-cover"
                  src={item.src}
                  muted
                  playsInline
                  loop
                  preload="metadata"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                  controls={false}
                />
              </div>
              <div className="flex items-center justify-between p-4">
                <span className="text-sm font-medium text-neutral-900">{item.title}</span>
                <span className="rounded-full border border-neutral-200 px-2 py-1 text-xs text-neutral-600">
                  {item.type === 'reel' ? 'Reel' : 'Vertical'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
