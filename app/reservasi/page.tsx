"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { treatments } from "@/data/treatments";

const WA_NUMBER = "6281234567890";

function ReservasiForm() {
  const searchParams = useSearchParams();
  const prefillTreatment = searchParams.get("treatment") || "";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState(prefillTreatment);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    if (prefillTreatment) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTreatment(prefillTreatment);
    }
  }, [prefillTreatment]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !treatment || !date || !time) {
      return;
    }

    const message = `Halo Aura Clinic, saya ingin booking treatment ${treatment} untuk jadwal ${date}/${time} atas nama ${name}.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WA_NUMBER}?text=${encoded}`, "_blank");
  };

  const treatmentOptions = treatments.map((t) => t.name);
  const uniqueTreatments = [...new Set(treatmentOptions)];

  return (
    <div className="bg-cream min-h-screen">
      <Navbar />

      <main className="max-w-2xl mx-auto pt-28 pb-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
        >
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal font-light tracking-wide">
            Reservasi
          </h1>
          <p className="text-muted font-light mt-4 max-w-xl leading-relaxed">
            Isi form di bawah dan kami akan mengonfirmasi jadwal Anda via
            WhatsApp.
          </p>

          <div className="mt-12 p-8 rounded-3xl border border-stone-200/60 bg-cream">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-charcoal mb-1.5"
                >
                  Nama Lengkap
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Masukkan nama lengkap Anda"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200/60 bg-white text-charcoal text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-charcoal mb-1.5"
                >
                  Nomor Telepon
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="Contoh: 08123456789"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200/60 bg-white text-charcoal text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              {/* Treatment Category */}
              <div>
                <label
                  htmlFor="treatment"
                  className="block text-sm font-medium text-charcoal mb-1.5"
                >
                  Pilih Treatment
                </label>
                <select
                  id="treatment"
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-stone-200/60 bg-white text-charcoal text-sm focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="" disabled>
                    Pilih treatment...
                  </option>
                  {uniqueTreatments.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-charcoal mb-1.5"
                  >
                    Tanggal
                  </label>
                  <input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200/60 bg-white text-charcoal text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-charcoal mb-1.5"
                  >
                    Jam
                  </label>
                  <input
                    id="time"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200/60 bg-white text-charcoal text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, opacity: 0.95 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-whatsapp text-white py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Konfirmasi Jadwal via WhatsApp
              </motion.button>
            </form>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default function ReservasiPage() {
  return (
    <Suspense fallback={null}>
      <ReservasiForm />
    </Suspense>
  );
}
