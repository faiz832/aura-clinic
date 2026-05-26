import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservasi",
  description:
    "Booking konsultasi dan perawatan di Aura Clinic. Isi form reservasi online dan kami akan mengonfirmasi jadwal Anda via WhatsApp.",
  openGraph: {
    title: "Reservasi | Aura Clinic",
    description:
      "Booking konsultasi dan perawatan di Aura Clinic.",
  },
};

export default function ReservasiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
