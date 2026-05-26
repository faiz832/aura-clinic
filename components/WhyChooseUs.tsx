'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, Cpu, Heart, Shield, Sparkles, ArmchairIcon } from 'lucide-react';

const points = [
  {
    icon: BadgeCheck,
    title: 'Certified Professionals',
    desc: 'Our team consists of licensed aesthetic doctors with international certifications.',
  },
  {
    icon: Cpu,
    title: 'Advanced Technology',
    desc: 'We use FDA-approved and BPOM-certified medical devices for all treatments.',
  },
  {
    icon: Heart,
    title: 'Personalized Treatment',
    desc: 'Every treatment plan is customized to your unique skin type and goals.',
  },
  {
    icon: Shield,
    title: 'Hygienic & Safe',
    desc: 'Strict sterilization protocols and premium single-use materials for your safety.',
  },
  {
    icon: Sparkles,
    title: 'Premium Products',
    desc: 'We use only medical-grade, dermatologist-recommended skincare brands.',
  },
  {
    icon: ArmchairIcon,
    title: 'Comfortable Experience',
    desc: 'Relax in our luxurious clinic designed for your comfort and privacy.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-accent-gold text-xs uppercase tracking-[0.2em] font-semibold text-center mb-3">
          Why Aura Clinic
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-center text-charcoal mb-4">
          Why Choose Us
        </h2>
        <p className="text-muted text-center font-light mb-16 max-w-lg mx-auto">
          We combine expertise, technology, and care to deliver exceptional results
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white rounded-3xl p-6 border border-stone-200/60 hover:border-accent-gold/30 hover:shadow-lg transition-all duration-500"
            >
              <item.icon className="size-7 text-accent-gold mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-serif text-lg text-charcoal mb-2">{item.title}</h3>
              <p className="text-muted text-sm font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
