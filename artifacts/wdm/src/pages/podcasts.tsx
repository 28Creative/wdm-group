import { Link } from "wouter";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { Rhombus } from "@/components/brand/Rhombus";
import { ArrowRight, Mic } from "lucide-react";

const PLATFORMS = [
  { name: "Spotify", href: "#" },
  { name: "Apple Podcasts", href: "#" },
  { name: "Google Podcasts", href: "#" },
  { name: "Amazon Music", href: "#" },
];

export default function Podcasts() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {/* ── Section 1: Hero ─────────────────────────────────────────── */}
        <section className="relative h-screen min-h-[640px] bg-[var(--color-graphite)] flex items-center overflow-hidden">
          <img
            src="/images/podcasts-hero.png"
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
                Conversations that matter.
              </h1>
              <p className="lead text-[var(--color-stone)] mb-10 max-w-xl hero-fade-3">
                We sit down with architects, clients, educators and business leaders to explore the ideas, challenges and opportunities shaping the built environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 hero-fade-4 items-center sm:items-start">
                <Button variant="primary" size="lg" asChild>
                  <a href="#">Listen on Spotify</a>
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  asChild
                  className="border-[var(--color-white)] text-[var(--color-white)] hover:bg-[var(--color-white)] hover:text-[var(--color-graphite)]"
                >
                  <a href="#">Listen on Apple Podcasts</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2: About the Podcast ─────────────────────────────── */}
        <SectionWrapper background="white" className="py-20 md:py-[120px]">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="overflow-hidden">
                <img
                  src="/images/podcast-artwork.png"
                  alt="Why Design Matters podcast cover"
                  loading="lazy"
                  decoding="async"
                  className="w-full max-w-sm mx-auto lg:mx-0 aspect-square object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-4">
                  About the Show
                </p>
                <h2 className="text-[var(--color-graphite)] mb-6">
                  Why Design Matters — The Podcast.
                </h2>
                <p className="lead text-[var(--color-graphite)]/80 mb-8">
                  Each episode explores a different aspect of architecture, design and the built environment — through honest conversations with the people who shape it. We talk about what works, what doesn't, and what great design really means for the people who experience it.
                </p>
                <div className="space-y-3">
                  {PLATFORMS.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.href}
                      className="flex items-center gap-3 text-sm font-semibold text-[var(--color-graphite)] hover:text-[var(--color-gold)] transition-colors group"
                    >
                      <Mic className="w-4 h-4 text-[var(--color-gold)]" />
                      {platform.name}
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </SectionWrapper>

        {/* ── Section 3: Coming Soon ───────────────────────────────────── */}
        <SectionWrapper background="stone" className="py-20 md:py-[120px]">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-yellow)] mb-6">
                Coming Soon
              </p>
              <h2 className="text-[var(--color-graphite)] mb-6">
                The podcast is coming soon.
              </h2>
              <p className="lead text-[var(--color-graphite)]/80 mb-10">
                We are putting the finishing touches to our first episodes. Subscribe now so you don't miss them.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
                <span className="flex items-center gap-2 px-5 py-2.5 border border-[var(--color-graphite)]/20 text-sm font-medium text-[var(--color-graphite)]/50 select-none">
                  <Mic className="w-4 h-4" />
                  Spotify
                </span>
                <span className="flex items-center gap-2 px-5 py-2.5 border border-[var(--color-graphite)]/20 text-sm font-medium text-[var(--color-graphite)]/50 select-none">
                  <Mic className="w-4 h-4" />
                  Apple Podcasts
                </span>
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-graphite)]/40">
                Links coming soon
              </p>
            </div>
          </FadeIn>
        </SectionWrapper>

        {/* ── Section 4: CTA Band ──────────────────────────────────────── */}
        <section className="w-full py-20 md:py-[120px] bg-[var(--color-yellow)]">
          <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-16">
            <FadeIn>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-[var(--color-graphite)] mb-6">Want to be a guest on the podcast?</h2>
                <p className="lead text-[var(--color-graphite)]/80 mb-10">
                  We're always looking for interesting voices and perspectives. If you have something worth saying about design, architecture or the built environment, we'd love to have the conversation.
                </p>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
