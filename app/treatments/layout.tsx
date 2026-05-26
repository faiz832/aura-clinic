import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Treatment",
  description:
    "Jelajahi rangkaian perawatan estetika premium Aura Clinic: Laser CO2, Hair Removal, HydraFacial, Microneedling RF, Thread Lift, dan banyak lagi.",
  openGraph: {
    title: "Treatment | Aura Clinic",
    description:
      "Jelajahi rangkaian perawatan estetika premium Aura Clinic.",
  },
};

export default function TreatmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
