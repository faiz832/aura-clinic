'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Droplets, Zap, Heart, Activity, Sun } from 'lucide-react';

const treatments = [
  {
    icon: Sparkles,
    title: 'Acne Treatment',
    desc: 'Eliminate acne and prevent future breakouts with advanced medical-grade solutions.',
    benefits: ['Reduces inflammation', 'Prevents scarring', 'Balances oil'],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600',
  },
  {
    icon: Sun,
    title: 'Brightening Facial',
    desc: 'Reveal radiant, even-toned skin with our signature brightening facial treatment.',
    benefits: ['Fades dark spots', 'Boosts glow', 'Hydrates deeply'],
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=600',
  },
  {
    icon: Zap,
    title: 'Laser Treatment',
    desc: 'Cutting-edge laser technology for pigmentation, scars, and skin rejuvenation.',
    benefits: ['Precise targeting', 'Minimal downtime', 'Long-lasting'],
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600',
  },
  {
    icon: Heart,
    title: 'Slimming Treatment',
    desc: 'Non-invasive body contouring to sculpt and tone your ideal silhouette.',
    benefits: ['Targets fat cells', 'Tightens skin', 'No surgery'],
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=600',
  },
  {
    icon: Activity,
    title: 'Botox & Filler',
    desc: 'Premium injectables for natural-looking wrinkle reduction and volume restoration.',
    benefits: ['Reduces wrinkles', 'Restores volume', 'Natural look'],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600',
  },
  {
    icon: Droplets,
    title: 'Skin Rejuvenation',
    desc: 'Complete skin renewal with advanced exfoliation and collagen stimulation.',
    benefits: ['Renews texture', 'Stimulates collagen', 'Youthful glow'],
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=600',
  },
];

export default function FeaturedTreatments() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-accent-gold text-xs uppercase tracking-[0.2em] font-semibold text-center mb-3">
          Our Services
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-center text-charcoal mb-4">
          Featured Treatments
        </h2>
        <p className="text-muted text-center font-light mb-16 max-w-lg mx-auto">
          Comprehensive aesthetic solutions designed to enhance your natural beauty
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/treatments"
                className="group block bg-white rounded-3xl overflow-hidden border border-stone-200/60 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={450}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className="size-5 text-accent-gold" />
                    <h3 className="font-serif text-lg text-charcoal">{item.title}</h3>
                  </div>
                  <p className="text-muted text-sm font-light leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <ul className="space-y-1 mb-4">
                    {item.benefits.map((b) => (
                      <li key={b} className="text-xs text-muted flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-accent-gold" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <span className="text-accent-gold text-xs font-semibold tracking-wide hover:underline cursor-pointer">
                    Learn More →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
