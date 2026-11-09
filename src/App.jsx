import React from 'react';
import UrgencyBar from './components/UrgencyBar';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Philosophy from './components/Philosophy';
import MethodModules from './components/MethodModules';
import Mentor from './components/Mentor';
import Testimonials from './components/Testimonials';
import ValueStack from './components/ValueStack';
import OfferPricing from './components/OfferPricing';
import Faq from './components/Faq';
import Footer from './components/Footer';
import FloatingMobileCta from './components/FloatingMobileCta';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CookieBanner from './components/CookieBanner';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col">
      <UrgencyBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <PainPoints />
        <Philosophy />
        <MethodModules />
        <Mentor />
        <Testimonials />
        <ValueStack />
        <OfferPricing />
        <Faq />
      </main>
      <Footer />
      <FloatingMobileCta />
      <FloatingWhatsApp />
      <CookieBanner />
    </div>
  );
}

