'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar } from 'lucide-react';

const WA_NUMBER = '6281234567890';

export default function FinalCTA() {
  return (
    <section className="py-28 px-6 bg-gradient-to-br from-charcoal via-[#1a1817] to-charcoal relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-[-30%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-accent-rose/5 blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-serif text-3xl md:text-5xl text-white font-light tracking-wide leading-tight mb-5">
            Start Your Beauty Journey Today
          </h2>
          <p className="text-white/60 text-sm md:text-base font-sans font-light max-w-xl mx-auto mb-10 leading-relaxed">
            Consult with our beauty experts and get personalized treatment
            recommendations tailored to your unique skin needs.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-gold text-white hover:bg-[#c4935e] rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide transition-all shadow-md cursor-pointer"
            >
              <MessageCircle className="size-4" />
              WhatsApp Consultation
            </a>
            <Link
              href="/reservasi"
              className="inline-flex items-center gap-2 bg-white text-charcoal hover:bg-stone-100 rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide transition-all shadow-md cursor-pointer"
            >
              <Calendar className="size-4" />
              Book Appointment
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
