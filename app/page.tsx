import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { LogoCloud } from "@/components/logos";
import { Features } from "@/components/features";
import { Bento } from "@/components/bento";
import { How } from "@/components/how";
import { Roles } from "@/components/roles";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { CursorGlow } from "@/components/cursor-glow";

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <Hero />
      <LogoCloud />
      <Features />
      <Bento />
      <How />
      <Roles />
      <Stats />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
