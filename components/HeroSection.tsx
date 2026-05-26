'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Shield, Award, BadgeCheck } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#FAFAF9] via-[#F5F0EB] to-[#FAFAF9]">
      {/* Abstract luxury shapes */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent-rose/5 blur-3xl pointer-events-none" />
      <div className="absolute top-[30%] left-[5%] w-[300px] h-[300px] rounded-full bg-accent/10 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="size-4 fill-accent-gold text-accent-gold" />
            ))}
            <span className="text-sm text-muted font-light ml-2">5.0 · 5000+ Happy Clients</span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05] text-charcoal mb-6">
            Reveal Your Natural Beauty{' '}
            <span className="italic text-accent-gold font-normal">
              With Professional Aesthetic Care
            </span>
          </h1>

          <p className="text-muted text-base md:text-lg font-sans max-w-lg leading-relaxed mb-8">
            Premium beauty treatments with certified experts, modern technology,
            and personalized skincare solutions tailored for your unique needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Link
              href="/reservasi"
              className="bg-accent-gold text-white hover:bg-[#c4935e] rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide transition-all shadow-md cursor-pointer"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/treatments"
              className="px-8 py-3.5 border border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-cream rounded-full text-sm font-semibold tracking-wide transition-all cursor-pointer"
            >
              View Treatments
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <BadgeCheck className="size-4 text-accent-gold" /> Certified Experts
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="size-4 text-accent-gold" /> BPOM Certified
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="size-4 text-accent-gold" /> 10+ Years Experience
            </span>
          </div>
        </motion.div>

        {/* Right - Model Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative"
        >
          {/* Glow effect behind image */}
          <div className="absolute inset-0 bg-accent-gold/10 rounded-[40px] blur-3xl -z-10" />
          <div className="aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800"
              alt="Glowing skin beauty"
              width={800}
              height={1067}
              className="object-cover w-full h-full"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-5 py-3 shadow-lg">
            <p className="text-xs text-muted font-light">Glowing Skin</p>
            <p className="text-sm font-bold text-charcoal">Natural Results</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
