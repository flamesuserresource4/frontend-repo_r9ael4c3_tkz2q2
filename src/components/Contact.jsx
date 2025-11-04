import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="bg-white px-6 pb-20 pt-6 text-neutral-900">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10"
        >
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Let’s build something striking</h3>
          <p className="mt-2 max-w-xl text-sm text-neutral-600 sm:text-base">
            Share your brief and I’ll reply with a concept and timeline within 24 hours.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            <div className="sm:col-span-1">
              <label className="mb-1 block text-xs font-medium text-neutral-700">Name</label>
              <input
                type="text"
                required
                className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-900"
                placeholder="Your name"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1 block text-xs font-medium text-neutral-700">Email</label>
              <input
                type="email"
                required
                className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-900"
                placeholder="you@example.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-xs font-medium text-neutral-700">Project details</label>
              <textarea
                rows={5}
                required
                className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-900"
                placeholder="Tell me about your brand, goals, and deadline."
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full rounded-xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                Send Brief
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
