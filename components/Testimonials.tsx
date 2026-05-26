'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: 'Dian Permata',
    handle: '@dianpermatasari',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
    text: 'Setelah 3 sesi laser di Aura Clinic, bekas jerawat saya memudar drastis. Dokternya sangat profesional dan menjelaskan setiap langkah dengan detail. Highly recommended!',
    rating: 5,
    label: 'Verified Patient',
  },
  {
    name: 'Sari Dewi',
    handle: '@saridewi_',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200',
    text: 'Hasil brightening facial-nya luar biasa! Wajah terasa lebih cerah dan lembap. Suasana klinik juga mewah dan nyaman. Pasti balik lagi!',
    rating: 5,
    label: 'Verified Patient',
  },
  {
    name: 'Maya Angelina',
    handle: '@mayaangelina',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200',
    text: 'Awalnya ragu, tapi setelah konsultasi gratis saya langsung yakin. Dr. Sarah menjelaskan treatment yang cocok untuk kulit berminyak saya. Hasilnya amazing!',
    rating: 5,
    label: 'Verified Patient',
  },
  {
    name: 'Rina Kusuma',
    handle: '@rinakus',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200',
    text: 'Treatment slimming-nya beneran works! 4 sesi dan lingkar pinggang turun 5cm. No pain, hasil nyata. Thank you Aura Clinic!',
    rating: 5,
    label: 'Verified Patient',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((i) => (i + 1) % reviews.length);

  const r = reviews[index];

  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-accent-gold text-xs uppercase tracking-[0.2em] font-semibold text-center mb-3">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-center text-charcoal mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted text-center font-light mb-12 max-w-lg mx-auto">
            Real stories from real patients who trust their beauty to Aura Clinic
          </p>

          <div className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200/60 shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="size-4 fill-accent-gold text-accent-gold" />
                  ))}
                </div>

                <p className="text-charcoal text-base font-light leading-relaxed mb-6">
                  &ldquo;{r.text}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <Image
                    src={r.image}
                    alt={r.name}
                    width={48}
                    height={48}
                    className="size-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-charcoal">{r.name}</p>
                    <p className="text-xs text-muted">{r.handle}</p>
                    <span className="text-[10px] text-accent-gold font-medium">{r.label}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-stone-200/60">
              <div className="flex gap-1">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`size-2 rounded-full transition-all cursor-pointer ${
                      i === index ? 'bg-accent-gold w-5' : 'bg-stone-300'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="size-9 rounded-full border border-stone-200/60 flex items-center justify-center hover:bg-cream-secondary transition-colors cursor-pointer"
                >
                  <ChevronLeft className="size-4 text-muted" />
                </button>
                <button
                  onClick={next}
                  className="size-9 rounded-full border border-stone-200/60 flex items-center justify-center hover:bg-cream-secondary transition-colors cursor-pointer"
                >
                  <ChevronRight className="size-4 text-muted" />
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/reservasi"
              className="text-accent-gold text-sm font-medium hover:underline cursor-pointer"
            >
              Share Your Experience →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
