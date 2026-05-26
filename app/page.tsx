import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';

const FeaturedTreatments = dynamic(() => import('@/components/FeaturedTreatments'));
const BeforeAfter = dynamic(() => import('@/components/BeforeAfter'));
const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'));
const Doctors = dynamic(() => import('@/components/Doctors'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const Promo = dynamic(() => import('@/components/Promo'));
const ConsultationFlow = dynamic(() => import('@/components/ConsultationFlow'));
const FAQ = dynamic(() => import('@/components/FAQ'));
const FinalCTA = dynamic(() => import('@/components/FinalCTA'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function Home() {
  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <FeaturedTreatments />
      <BeforeAfter />
      <WhyChooseUs />
      <Doctors />
      <Testimonials />
      <Promo />
      <ConsultationFlow />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
