import { Link } from "wouter";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { SectorCard } from "@/components/ui/sector-card";
import { FadeIn } from "@/components/ui/fade-in";
import { Rhombus } from "@/components/brand/Rhombus";
import { Check, ChevronDown } from "lucide-react";

const SECTORS = [
  {
    imageSrc: "/images/sector-education.png",
    title: "Education & Learning",
    descriptor:
      "Schools, colleges, and universities designed around how people actually learn — spaces that balance collaboration, focus, and wellbeing.",
    features: ["Primary and secondary schools", "Higher education campuses", "Early years facilities"],
    ctaHref: "/sector/education",
    ctaLabel: "Explore Education",
  },
  {
    imageSrc: "/images/sector-commercial.png",
    title: "Commercial & Workplace",
    descriptor:
      "Office and mixed-use developments that go beyond the brief — buildings designed to attract talent, support performance, and signal intent.",
    features: ["Office developments", "Mixed-use schemes", "Workplace fit-out"],
    ctaHref: "/sector/commercial",
    ctaLabel: "Explore Commercial",
  },
  {
    imageSrc: "/images/sector-residential.png",
    title: "Residential",
    descriptor:
      "From urban apartment schemes to bespoke private homes, residential work that respects context and delivers lasting quality.",
    features: ["Residential development", "Private homes & extensions", "Later living"],
    ctaHref: "/sector/residential",
    ctaLabel: "Explore Residential",
  },
  {
    imageSrc: "/images/sector-hospitality.png",
    title: "Hospitality & Leisure",
    descriptor:
      "Hotels, restaurants, and cultural venues where every design decision is mapped to the guest experience and operational performance.",
    features: ["Hotels and serviced apartments", "Restaurants and bars", "Cultural and leisure venues"],
    ctaHref: "/sector/hospitality",
    ctaLabel: "Explore Hospitality",
  },
];

const WHY_POINTS = [
  {
    title: "Context shapes outcomes",
    body: "Generic solutions produce generic results. Understanding the specific pressures, constraints, and ambitions of a sector allows us to ask better questions and propose more targeted responses.",
  },
  {
    title: "We know the regulatory landscape",
    body: "Each sector carries distinct planning requirements, accessibility standards, and compliance obligations. Sector experience means fewer surprises and smoother delivery.",
  },
  {
    title: "We understand who uses the building",
    body: "A school serves children, teachers, parents, and facilities managers simultaneously. A hotel serves guests, staff, operators, and investors. We design for everyone in the building, not just the client.",
  },
];

export default function SectorExpertise() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {/* ── Section 1: Hero ─────────────────────────────────────────── */}
        <section className="relative h-screen min-h-[640px] bg-[var(--color-graphite)] flex items-center overflow-hidden">
          <img
            src="/images/sector-hub-hero.png"
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
            <div className="max-w-3xl">
              <div className="hero-fade-1">
                <Rhombus className="text-[var(--color-yellow)] w-8 h-8 mb-8" />
              </div>
              <h1 className="text-[var(--color-white)] mb-6 hero-fade-2">
                Sector Expertise
              </h1>
              <p className="lead text-[var(--color-stone)] mb-10 max-w-xl hero-fade-3">
                Deep contextual knowledge shapes every decision we make. We bring specific understanding to each sector we serve — from the first brief to handover.
              </p>
              <div className="hero-fade-4">
                <Button
                  variant="ghost"
                  size="lg"
                  asChild
                  className="border-[var(--color-white)] text-[var(--color-white)] hover:bg-[var(--color-white)] hover:text-[var(--color-graphite)]"
                >
                  <a href="#sector-grid">
                    Explore Our Sectors
                    <ChevronDown className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2: Intro ─────────────────────────────────────────── */}
        <SectionWrapper background="white" className="py-20 md:py-[120px]">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-6">
                Our Approach
              </p>
              <h2 className="mb-6 text-[var(--color-graphite)]">
                Understanding context is the foundation of purposeful design
              </h2>
              <p className="lead text-[var(--color-graphite)]/80 mb-4">
                Every building type imposes its own demands — on the people who use it, the operators who run it, and the communities that surround it. Architecture that ignores sector context produces buildings that look right but work wrong.
              </p>
              <p className="body text-[var(--color-graphite)]/70">
                Our team has spent years building genuine expertise across education, commercial, residential, and hospitality. That depth of knowledge informs every decision, from massing and materiality to room adjacencies and procurement strategy.
              </p>
            </div>
          </FadeIn>
        </SectionWrapper>

        {/* ── Section 3: Sector Grid ───────────────────────────────────── */}
        <SectionWrapper background="stone" className="py-20 md:py-[120px]" id="sector-grid">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-4">
              Sectors We Serve
            </p>
            <h2 className="mb-12 text-[var(--color-graphite)]">
              Where we have built real expertise
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {SECTORS.map((sector, i) => (
              <FadeIn key={sector.ctaHref} delay={i * 80}>
                <SectorCard {...sector} stacked loading="lazy" />
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={320}>
            <div className="border-t border-[var(--color-graphite)]/15 pt-16">
              <SectorCard
                imageSrc="/images/architecture-1.png"
                title="Community & Public Spaces"
                descriptor="Libraries, cultural buildings, and civic spaces where design must serve many different communities at once. Every WDM project starts from the same question: who is this really for?"
                features={["Libraries and archives", "Community centres", "Civic and cultural buildings"]}
                ctaHref="/contact"
                ctaLabel="Start a Conversation"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </SectionWrapper>

        {/* ── Section 4: Why Sector Understanding Matters ──────────────── */}
        <SectionWrapper background="white" className="py-20 md:py-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeIn>
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-6">
                Why It Matters
              </p>
              <h2 className="text-[var(--color-graphite)]">
                Why sector understanding matters
              </h2>
            </FadeIn>
            <div className="space-y-8">
              {WHY_POINTS.map((point, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div className="flex gap-4 items-start">
                    <Check className="w-5 h-5 mt-1 text-[var(--color-gold)] shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-lg mb-2 text-[var(--color-graphite)]">
                        {point.title}
                      </h4>
                      <p className="body text-[var(--color-graphite)]/75 leading-relaxed">
                        {point.body}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* ── Section 5: CTA Band ──────────────────────────────────────── */}
        <SectionWrapper background="graphite" className="py-20 md:py-[120px]">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-[var(--color-white)] mb-6">
                Ready to work with a team who understands your sector?
              </h2>
              <p className="lead text-[var(--color-stone)] mb-10">
                Tell us about your project and we will bring the right knowledge to bear from day one.
              </p>
              <Button
                variant="ghost"
                size="lg"
                asChild
                className="border-[var(--color-white)] text-[var(--color-white)] hover:bg-[var(--color-white)] hover:text-[var(--color-graphite)]"
              >
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
