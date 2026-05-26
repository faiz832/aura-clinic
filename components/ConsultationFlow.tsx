'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Search, Sparkles, Smile } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    step: '01',
    title: 'Consultation',
    desc: 'Hubungi kami via WhatsApp atau booking online untuk konsultasi awal gratis.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Skin Analysis',
    desc: 'Dokter akan menganalisis kondisi kulit Anda dengan teknologi diagnostik terkini.',
  },
  {
    icon: Sparkles,
    step: '03',
    title: 'Personalized Treatment',
    desc: 'Dapatkan rencana treatment yang disesuaikan dengan kebutuhan dan goals kulit Anda.',
  },
  {
    icon: Smile,
    step: '04',
    title: 'Glow Result',
    desc: 'Nikmati hasil kulit yang sehat, bercahaya, dan percaya diri setiap hari.',
  },
];

export default function ConsultationFlow() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-accent-gold text-xs uppercase tracking-[0.2em] font-semibold text-center mb-3">
            How It Works
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-center text-charcoal mb-4">
            Your Consultation Journey
          </h2>
          <p className="text-muted text-center font-light mb-16 max-w-lg mx-auto">
            Four simple steps to achieving your dream skin
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-stone-200 -z-10" />

            {steps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <div className="size-24 rounded-full bg-accent-gold/10 flex items-center justify-center mx-auto mb-5 relative">
                  <item.icon className="size-7 text-accent-gold" />
                  <span className="absolute -top-1 -right-1 size-6 rounded-full bg-accent-gold text-white text-[10px] font-bold flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-serif text-lg text-charcoal mb-2">{item.title}</h3>
                <p className="text-muted text-sm font-light leading-relaxed max-w-[220px] mx-auto">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
