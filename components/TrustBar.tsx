'use client';

import { motion } from 'framer-motion';
import { Star, Users, Calendar, Award, BadgeCheck } from 'lucide-react';

const items = [
  {
    icon: Star,
    label: 'Google Rating',
    value: '5.0 ★',
  },
  {
    icon: Users,
    label: 'Happy Patients',
    value: '5.000+',
  },
  {
    icon: Calendar,
    label: 'Years Experience',
    value: '10+',
  },
  {
    icon: BadgeCheck,
    label: 'Certified Doctors',
    value: '12',
  },
  {
    icon: Award,
    label: 'Skincare Partners',
    value: '15+',
  },
];

export default function TrustBar() {
  return (
    <section className="bg-cream-secondary border-y border-stone-200/60">
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-5 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex items-center gap-3 rounded-2xl p-3 hover:bg-white/60 transition-colors"
          >
            <item.icon className="size-5 text-accent-gold shrink-0" />
            <div>
              <p className="text-xs text-muted font-light">{item.label}</p>
              <p className="text-sm font-bold text-charcoal">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
