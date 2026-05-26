import Link from "next/link";
import { Crown, MapPin, Clock, Mail, Phone } from "lucide-react";
import Image from "next/image";

const WA_NUMBER = "6281234567890";

const instaGallery = [
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=200",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=200",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=200",
  "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=200",
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=200",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 mb-4 cursor-pointer"
            >
              <Crown className="size-5 text-accent-gold" />
              <span className="font-serif text-lg font-medium tracking-widest text-white uppercase">
                Aura Clinic
              </span>
            </Link>
            <p className="text-white/50 text-sm font-light leading-relaxed mb-4">
              Pusat estetika &amp; laser premium. Membantu Anda tampil percaya
              diri dengan perawatan profesional.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 rounded-full border border-white/20 flex items-center justify-center hover:border-accent-gold hover:text-accent-gold transition-all cursor-pointer"
              >
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 rounded-full border border-white/20 flex items-center justify-center hover:border-accent-gold hover:text-accent-gold transition-all cursor-pointer"
              >
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
              Tautan
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-white/50 hover:text-accent-gold transition-colors cursor-pointer"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments"
                  className="text-white/50 hover:text-accent-gold transition-colors cursor-pointer"
                >
                  Treatment
                </Link>
              </li>
              <li>
                <Link
                  href="/reservasi"
                  className="text-white/50 hover:text-accent-gold transition-colors cursor-pointer"
                >
                  Reservasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
              Kontak
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="size-4 text-accent-gold shrink-0 mt-0.5" />
                <span className="text-white/50">
                  Jl. Gunawarman No. 21, Kebayoran Baru, Jakarta
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-accent-gold shrink-0" />
                <span className="text-white/50">(021) 123 - 456</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-accent-gold shrink-0" />
                <span className="text-white/50">info@auraclinic.co.id</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="size-4 text-accent-gold shrink-0" />
                <span className="text-white/50">Mon - Sat: 09:00 - 20:00</span>
              </li>
            </ul>
          </div>

          {/* Instagram Gallery */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
              Instagram
            </h4>
            <div className="grid grid-cols-3 gap-1.5">
              {instaGallery.map((src, i) => (
                <Link
                  key={i}
                  href="/"
                  className="aspect-square rounded-lg overflow-hidden opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                >
                  <Image
                    src={src}
                    alt="Gallery"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; 2026 Aura Clinic. Hak cipta dilindungi.</p>
          <p className="font-light">Pusat Estetika &amp; Laser Premium</p>
        </div>
      </div>
    </footer>
  );
}
