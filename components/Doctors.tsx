'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Sarah Wijaya',
    spec: 'Medical Aesthetic Specialist',
    exp: '12 years experience',
    quote: 'Beauty begins with healthy skin. Our mission is to help you feel confident in your own skin.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600',
  },
  {
    name: 'Dr. Rina Putri',
    spec: 'Dermatology & Laser Expert',
    exp: '10 years experience',
    quote: 'Every skin has its own story. We listen, understand, and create the perfect treatment for you.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=600',
  },
];

export default function Doctors() {
  return (
    <section className="py-24 px-6 bg-cream-secondary">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-accent-gold text-xs uppercase tracking-[0.2em] font-semibold text-center mb-3">
            Our Experts
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-center text-charcoal mb-4">
            Meet Our Doctors
          </h2>
          <p className="text-muted text-center font-light mb-16 max-w-lg mx-auto">
            Experienced professionals dedicated to your beauty and wellness journey
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {doctors.map((doc, i) => (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/60 hover:shadow-xl transition-all duration-500"
              >
                <div className="sm:grid sm:grid-cols-2">
                  <div className="relative sm:h-full overflow-hidden">
                    <div className="pb-[133%] sm:hidden" />
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      className="object-cover sm:absolute sm:inset-0"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <Quote className="size-6 text-accent-gold/40 mb-3" />
                    <p className="text-muted text-sm font-light italic leading-relaxed mb-5">
                      &ldquo;{doc.quote}&rdquo;
                    </p>
                    <h3 className="font-serif text-xl text-charcoal">{doc.name}</h3>
                    <p className="text-accent-gold text-xs font-medium mt-1">{doc.spec}</p>
                    <p className="text-muted text-xs font-light mt-1">{doc.exp}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
