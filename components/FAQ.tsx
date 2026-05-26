'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Apakah treatment ini sakit?',
    a: 'Sebagian besar treatment kami menggunakan teknologi modern yang minim rasa sakit. Beberapa treatment mungkin terasa sedikit tidak nyaman, namun dokter kami akan memastikan kenyamanan Anda selama prosedur.',
  },
  {
    q: 'Berapa lama waktu pemulihan?',
    a: 'Waktu pemulihan bervariasi tergantung jenis treatment. Treatment non-invasif seperti facial biasanya tidak memerlukan downtime, sementara laser mungkin membutuhkan 1-3 hari pemulihan.',
  },
  {
    q: 'Apakah treatment di Aura Clinic aman?',
    a: 'Sangat aman. Semua treatment dilakukan oleh dokter certified dengan pengalaman luas. Kami menggunakan produk dan alat yang sudah BPOM dan FDA certified.',
  },
  {
    q: 'Berapa harga treatment di Aura Clinic?',
    a: 'Harga bervariasi tergantung jenis dan paket treatment yang dipilih. Konsultasi gratis kami akan membantu Anda menentukan treatment yang sesuai dengan budget dan kebutuhan.',
  },
  {
    q: 'Apakah konsultasi benar-benar gratis?',
    a: 'Ya, konsultasi awal di Aura Clinic 100% gratis tanpa biaya tersembunyi. Anda bisa berkonsultasi tentang kondisi kulit dan rekomendasi treatment tanpa kewajiban.',
  },
  {
    q: 'Berapa sesi treatment yang diperlukan?',
    a: 'Jumlah sesi tergantung pada kondisi kulit dan goals Anda. Dokter akan merekomendasikan jumlah sesi yang optimal saat konsultasi.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-cream-secondary">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-accent-gold text-xs uppercase tracking-[0.2em] font-semibold text-center mb-3">
            FAQ
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-center text-charcoal mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-stone-200/60 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer"
                >
                  <span className="text-sm font-medium text-charcoal">{faq.q}</span>
                  <ChevronDown
                    className={`size-4 text-muted shrink-0 transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-4 text-sm text-muted font-light leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
