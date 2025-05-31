import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Testimonials } from '@/components/sections/testimonials';
import { Showcase } from '@/components/sections/showcase';
import { FAQ } from '@/components/sections/faq';
import { CTA } from '@/components/sections/cta';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <Features />
      <HowItWorks />
      <Showcase />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
}