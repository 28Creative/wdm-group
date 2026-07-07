import { Link } from "wouter";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { Rhombus } from "@/components/brand/Rhombus";

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {/* ── Section 1: Hero ─────────────────────────────────────────── */}
        <section className="relative h-screen min-h-[640px] bg-[var(--color-graphite)] flex items-center overflow-hidden">
          <img
            src="/images/projects-hero.png"
            alt=""
            loading="eager"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-graphite)]/65" />
          <Rhombus
            aria-hidden="true"
            className="absolute -right-16 bottom-0 w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] text-[var(--color-yellow)] opacity-[0.06] pointer-events-none"
          />
          <div className="relative z-10 w-full mx-auto max-w-[1280px] px-6 md:px-12 lg:px-16 pt-24">
            <div className="max-w-3xl text-center md:text-left">
              <div className="hero-fade-1">
                <Rhombus className="text-[var(--color-yellow)] w-8 h-8 mb-8" />
              </div>
              <h1 className="text-[var(--color-white)] mb-6 hero-fade-2">
                From vision to reality.
              </h1>
              <p className="lead text-[var(--color-stone)] mb-10 max-w-xl hero-fade-3">
                Every project begins with a conversation and ends with a place that matters. Here is a selection of the work we are proud to have delivered.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 2: Coming Soon ───────────────────────────────────── */}
        <SectionWrapper background="stone" className="py-20 md:py-[120px]">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-yellow)] mb-6">
                Coming Soon
              </p>
              <h2 className="text-[var(--color-graphite)] mb-6">
                Our project portfolio is on its way.
              </h2>
              <p className="lead text-[var(--color-graphite)]/80 mb-10">
                We are currently compiling our project case studies. Check back soon or get in touch to discuss your project directly.
              </p>
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact">Start a Conversation</Link>
              </Button>
            </div>
          </FadeIn>
        </SectionWrapper>

        {/* ── Section 3: CTA Band ──────────────────────────────────────── */}
        <SectionWrapper background="graphite" className="py-20 md:py-[120px]">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-[var(--color-white)] mb-6">Have a project in mind?</h2>
              <p className="lead text-[var(--color-stone)] mb-10">
                We'd love to hear about it. Every conversation starts with listening.
              </p>
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact">Start a Conversation</Link>
              </Button>
            </div>
          </FadeIn>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
