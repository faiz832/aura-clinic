'use client';

import { useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const slides = [
  {
    before: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=600',
    after: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600',
    label: 'Acne Treatment — 6 Sessions',
  },
  {
    before: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600',
    after: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600',
    label: 'Brightening Facial — 4 Sessions',
  },
];

export default function BeforeAfter() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      setSliderPos((x / rect.width) * 100);
    },
    []
  );

  const onMouseDown = () => setDragging(true);
  const onMouseUp = () => setDragging(false);
  const onMouseMove = (e: React.MouseEvent) => { if (dragging) handleMove(e.clientX); };
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  const current = slides[activeIndex];

  return (
    <section id="about" className="py-24 px-6 bg-cream-secondary">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-accent-gold text-xs uppercase tracking-[0.2em] font-semibold text-center mb-3">
            Real Results
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-center text-charcoal mb-4">
            Before & After Transformations
          </h2>
          <p className="text-muted text-center font-light mb-12 max-w-lg mx-auto">
            See the real difference our treatments make — authentic results from our patients
          </p>

          {/* Slider */}
          <div className="relative max-w-2xl mx-auto mb-4">
            <div
              ref={containerRef}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden select-none cursor-ew-resize"
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
              onMouseMove={onMouseMove}
              onTouchMove={onTouchMove}
              onTouchEnd={() => setDragging(false)}
            >
              {/* After (full) */}
              <Image src={current.after} alt="After" fill className="object-cover" sizes="(max-width: 672px) 100vw, 672px" />

              {/* Before (clipped) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <Image
                  src={current.before}
                  alt="Before"
                  fill
                  className="object-cover"
                  sizes="(max-width: 672px) 100vw, 672px"
                  style={{ objectPosition: 'left' }}
                />
              </div>

              {/* Divider line */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-md"
                style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-8 rounded-full bg-white shadow-md flex items-center justify-center">
                  <span className="text-charcoal text-xs font-bold">↔</span>
                </div>
              </div>

              {/* Labels */}
              <span className="absolute top-4 left-4 bg-cream/80 text-charcoal text-xs font-medium px-3 py-1 rounded-full">
                Before
              </span>
              <span className="absolute top-4 right-4 bg-accent-gold/80 text-white text-xs font-medium px-3 py-1 rounded-full">
                After
              </span>
            </div>
          </div>

          <p className="text-center text-muted text-sm font-light mb-2">{current.label}</p>
          <p className="text-center text-muted/60 text-[11px] font-light">
            *Results may vary for each individual
          </p>

          {/* Slide selector */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActiveIndex(i); setSliderPos(50); }}
                className={`size-2 rounded-full transition-all cursor-pointer ${
                  i === activeIndex ? 'bg-accent-gold w-6' : 'bg-stone-300'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
