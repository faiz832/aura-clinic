'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarPlus, Zap, Sparkles, RefreshCcw } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { treatments, type Treatment } from '@/data/treatments';


const categories = [
  { key: 'laser', label: 'Laser', icon: Zap },
  { key: 'facial', label: 'Facial', icon: Sparkles },
  { key: 'anti-aging', label: 'Anti-Aging & Lift', icon: RefreshCcw },
] as const;

export default function TreatmentsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('laser');

  const filtered: Treatment[] = treatments.filter(
    (t) => t.category === activeCategory
  );

  return (
    <div className="bg-cream min-h-screen">
      <Navbar />

      <main className="max-w-6xl mx-auto px-8 md:px-16 pt-28 pb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
        >
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal font-light tracking-wide">
            Treatment Kami
          </h1>
          <p className="text-muted font-light mt-4 max-w-xl leading-relaxed">
            Temukan perawatan yang tepat untuk kebutuhan kulit Anda. Dari laser
            presisi hingga facial menenangkan, setiap layanan dirancang untuk hasil
            optimal.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mt-12 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium border transition-colors ${
                activeCategory === cat.key
                  ? 'bg-accent text-white border-accent'
                  : 'bg-transparent text-muted border-stone-200/60 hover:border-accent hover:text-accent'
              }`}
            >
              <cat.icon className="size-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Treatment List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {filtered.map((treatment) => (
              <motion.div
                key={treatment.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center justify-between p-6 rounded-3xl border border-stone-200/60 bg-cream hover:bg-cream-secondary transition-colors"
              >
                <div className="flex-1">
                  <h3 className="font-serif text-xl text-charcoal">
                    {treatment.name}
                  </h3>
                  <p className="text-muted text-sm font-light mt-1.5 leading-relaxed max-w-2xl">
                    {treatment.description}
                  </p>
                  <span className="inline-block mt-3 text-xs font-medium text-accent border border-accent/30 px-3 py-1 rounded-full">
                    Starts from {treatment.priceStartsFrom}
                  </span>
                </div>
                <Link
                  href={`/reservasi?treatment=${encodeURIComponent(treatment.name)}`}
                  className="ml-4 size-10 flex items-center justify-center rounded-full border border-stone-200/60 text-muted hover:bg-accent hover:text-white hover:border-accent transition-all"
                >
                  <CalendarPlus className="size-5" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
