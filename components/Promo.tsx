'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Gift, Percent, Sparkles } from 'lucide-react';

const promos = [
  {
    icon: Gift,
    title: 'Free Skin Analysis',
    desc: 'Dapatkan analisis kulit gratis dari dokter aesthetic kami. Konsultasi tanpa biaya!',
    tag: 'FREE',
  },
  {
    icon: Percent,
    title: '20% Off First Treatment',
    desc: 'Pasien baru dapat diskon 20% untuk treatment pertama Anda di Aura Clinic.',
    tag: '-20%',
  },
  {
    icon: Sparkles,
    title: 'Limited Monthly Promo',
    desc: 'Paket treatment spesial setiap bulan. Hubungi kami untuk promo terbaru!',
    tag: 'LIMITED',
  },
];

export default function Promo() {
  return (
    <section id="promo" className="py-24 px-6 bg-gradient-to-br from-accent-gold/5 via-cream to-accent-rose/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-accent-gold text-xs uppercase tracking-[0.2em] font-semibold text-center mb-3">
            Special Offers
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-center text-charcoal mb-4">
            Promo & Special Offers
          </h2>
          <p className="text-muted text-center font-light mb-16 max-w-lg mx-auto">
            Limited-time promotions to help you start your beauty journey
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promos.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-3xl p-7 border border-stone-200/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative"
              >
                <span className="absolute top-4 right-4 bg-accent-gold text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.tag}
                </span>
                <item.icon className="size-8 text-accent-gold mb-4" />
                <h3 className="font-serif text-lg text-charcoal mb-2">{item.title}</h3>
                <p className="text-muted text-sm font-light leading-relaxed mb-5">{item.desc}</p>
                <Link
                  href="/reservasi"
                  className="text-accent-gold text-xs font-semibold hover:underline cursor-pointer"
                >
                  Claim Your Promo →
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/reservasi"
              className="inline-block bg-accent-gold text-white hover:bg-[#c4935e] rounded-full px-10 py-3.5 text-sm font-semibold tracking-wide transition-all shadow-md cursor-pointer"
            >
              Claim Your Promo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
