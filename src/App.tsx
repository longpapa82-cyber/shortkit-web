// 숏킷 홍보 웹 — Hero + P1 섹션(How It Works/Features/Pricing/FAQ) + Footer.
import { Hero } from './sections/Hero';
import { HowItWorks } from './sections/HowItWorks';
import { Features } from './sections/Features';
import { AppShowcase } from './sections/AppShowcase';
import { Pricing } from './sections/Pricing';
import { FAQ } from './sections/FAQ';
import { Footer } from './sections/Footer';

export function App() {
  return (
    <>
      <Hero />
      <main>
        <HowItWorks />
        <Features />
        <AppShowcase />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
