'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import Metrics from '@/components/Metrics';
import CoreProducts from '@/components/CoreProducts';
import Integration from '@/components/Integration';
import Capabilities from '@/components/Capabilities';
import Coverage from '@/components/Coverage';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <Metrics />
      <CoreProducts />
      <Integration />
      <Capabilities />
      <Coverage />
      <CTA />
      <Footer />

    </>
  );
}