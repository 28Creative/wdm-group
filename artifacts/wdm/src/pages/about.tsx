import { useState } from "react";
import { Link } from "wouter";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ImageBand } from "@/components/ui/image-band";
import { TeamCard } from "@/components/ui/team-card";
import { Button } from "@/components/ui/button";
import { Rhombus } from "@/components/brand/Rhombus";
import { FadeIn } from "@/components/ui/fade-in";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Ear,
  Compass,
  Scale,
  Heart,
  Sliders,
  Lightbulb,
  TrendingUp,
  Shield,
} from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────

const WDM_DIFFERENCE = [
  {
    icon: <Ear className="w-6 h-6" />,
    title: "We Listen Before We Design",
    body: "Most projects benefit from slowing down at the start. We invest time in understanding what clients and communities truly need before any design work begins.",
  },
  {
    icon: <Compass className="w-6 h-6" />,
    title: "We Guide Projects With Confidence",
    body: "Architecture involves navigating complexity — planning, procurement, programme and people. We guide clients through every stage with clarity and steady expertise.",
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "We Balance Creativity With Commercial Reality",
    body: "Ambitious design doesn't have to mean undeliverable design. We bring creativity and commercial awareness together so projects are inspiring and achievable.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "We Design for Human Experience",
    body: "Every decision we make is tested against a simple question: how will this feel for the people who use it? That question drives everything.",
  },
];

const VALUES = [
  {
    icon: <Sliders className="w-5 h-5" />,
    title: "Harmonic Alignment",
    descriptor: "Finding the balance between people, place and purpose.",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Empathy in Action",
    descriptor: "Listening carefully before we respond.",
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Creative Courage",
    descriptor: "Exploring ideas that go beyond the obvious.",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Commercially Innovative",
    descriptor: "Delivering ambition within real-world constraints.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Authentic Authority",
    descriptor: "Confident, grounded and honest in everything we do.",
  },
];

interface DirectorProfile {
  id: string;
  name: string;
  role: string;
  imageSrc: string;
  bioExcerpt: string;
  bio: string;
  superpower: string;
  favouriteValue: string;
  inspiredBy: string;
  coffeeOrder: string;
  whatDrives: string;
}

export const DIRECTORS: DirectorProfile[] = [
  {
    id: "martin",
    name: "Martin Beaumont",
    role: "Director | Architect",
    imageSrc: "/images/team-1.png",
    bioExcerpt:
      "Martin leads every project with a listening-first approach, taking time to understand what clients and communities truly need before a single line is drawn.",
    bio: "Martin founded Why Design Matters on the belief that architecture should begin with people, not drawings. With decades of experience across education, commercial and community projects, he brings a calm, considered approach to every brief — asking the questions that reveal what a project is really about before the design process begins.",
    superpower:
      "Listening. Martin has an ability to hear what clients mean, not just what they say — and to translate that understanding into spaces that genuinely work.",
    favouriteValue: "Empathy in Action",
    inspiredBy:
      "The moment a client walks into a completed space and says it feels exactly right.",
    coffeeOrder: "Builder's tea, strong.",
    whatDrives:
      "The belief that a well-designed space can genuinely change how people feel about their day.",
  },
  {
    id: "simon",
    name: "Simon Jesson",
    role: "Director | Architect",
    imageSrc: "/images/team-2.png",
    bioExcerpt:
      "Simon translates ideas into buildable, deliverable solutions — bridging the gap between creative ambition and practical reality.",
    bio: "Simon is the bridge between creative ambition and practical delivery. Where others see constraints, Simon sees the puzzle — finding ways to achieve more with what's available, and ensuring every project is as buildable as it is beautiful.",
    superpower:
      "Making ideas work. Simon takes creative concepts and turns them into deliverable, cost-conscious solutions without losing the spark that made them compelling.",
    favouriteValue: "Commercially Innovative",
    inspiredBy:
      "Seeing a project come off the drawing board exactly as imagined — and watching it perform even better in use.",
    coffeeOrder: "Flat white, no sugar.",
    whatDrives:
      "Proving that doing things properly and doing things affordably aren't mutually exclusive.",
  },
  {
    id: "parminder",
    name: "Parminder Degan",
    role: "Director | Architect",
    imageSrc: "/images/team-3.png",
    bioExcerpt:
      "Parminder designs from the inside out, considering how spaces feel to the people who move through them every day.",
    bio: "Parminder approaches every project from the inside out — starting with the experience of the people who will use the space and working outward from there. Her work is characterised by sensitivity, detail and a deep understanding of how environments shape mood, behaviour and belonging.",
    superpower:
      "Spatial empathy. Parminder can walk into a space and immediately understand how it will feel to the people who inhabit it — and what needs to change.",
    favouriteValue: "Harmonic Alignment",
    inspiredBy:
      "Spaces that make people feel at home even when they've never been there before.",
    coffeeOrder: "Oat latte, always.",
    whatDrives:
      "Creating environments where people feel genuinely seen and considered.",
  },
];

// ── Director Profile Modal ──────────────────────────────────────────

function DirectorModal({ director }: { director: DirectorProfile }) {
  const facts = [
    { label: "Design Superpower", value: director.superpower },
    { label: "Favourite Value", value: director.favouriteValue },
    { label: "Inspired By", value: director.inspiredBy },
    { label: "Coffee Order", value: director.coffeeOrder },
    { label: "What Drives Them", value: director.whatDrives },
  ];

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-5">
      {/* Portrait */}
      <div className="sm:col-span-2 bg-[var(--color-stone)]">
        <img
          src={director.imageSrc}
          alt={director.name}
          loading="eager"
          decoding="async"
          className="w-full h-64 sm:h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="sm:col-span-3 p-8 overflow-y-auto">
        <div className="mb-1">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">
            {director.role}
          </span>
        </div>
        <h2 className="font-heading font-bold text-2xl text-[var(--color-graphite)] mb-6">
          {director.name}
        </h2>
        <p className="text-sm leading-relaxed text-[var(--color-graphite)]/80 mb-8">
          {director.bio}
        </p>

        <div className="space-y-5">
          {facts.map(({ label, value }) => (
            <div key={label} className="border-l-2 border-[var(--color-yellow)] pl-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)] mb-1">
                {label}
              </p>
              <p className="text-sm leading-relaxed text-[var(--color-graphite)]">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────

export default function About() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-grow">

        {/* ── Section 1: Hero ───────────────────────────────────────── */}
        <section className="relative h-screen min-h-[640px] bg-[var(--color-graphite)] flex items-center overflow-hidden">
          <img
            src="/images/about-hero.png"
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
                Design that starts with people.
              </h1>
              <p className="lead text-[var(--color-stone)] mb-10 max-w-xl hero-fade-3">
                At Why Design Matters, we believe great design begins long before the first sketch. It starts with listening.
              </p>
              <div className="hero-fade-4">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/contact">Start a Conversation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2: The Story ──────────────────────────────────── */}
        <SectionWrapper background="white" className="py-20 md:py-[120px]">
          <FadeIn>
            <div className="max-w-[800px] mx-auto">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)] mb-6">
                Our Story
              </p>
              <div className="space-y-6 text-[var(--color-graphite)] leading-relaxed">
                <p className="lead">
                  Why Design Matters was founded on a simple belief — that the quality of the spaces we inhabit has a profound effect on the quality of our lives. We exist to create architecture that takes that responsibility seriously.
                </p>
                <p>
                  Our practice brings together three directors — Martin, Simon and Parminder — each with a distinct perspective, and a shared commitment to design that begins with understanding people, place and purpose. We don't begin with aesthetics. We begin with questions.
                </p>
                <p>
                  What do the people who will use this space actually need? What does this place want to become? How can the design of this building contribute something meaningful to its community? These questions shape everything we do — from the earliest conversations with clients to the final details of a completed building.
                </p>
                <p>
                  Over the years, we have worked across education, commercial, residential and hospitality sectors, on projects ranging from intimate private homes to major public buildings. What connects all of this work is a consistent belief: that good design is never just about appearance. It's about performance. It's about how a space makes people feel, how it supports what they're trying to do, and how it reflects the values of the people and organisations who inhabit it.
                </p>
                <p>
                  We are a studio that takes its responsibilities seriously. To our clients. To the communities our buildings serve. And to the long-term impact of the environments we create.
                </p>
              </div>
            </div>
          </FadeIn>
        </SectionWrapper>

        {/* ── Section 3: Mission Statement Band ────────────────────── */}
        <ImageBand
          imageSrc="/images/interior-1.png"
          imageAlt="WDM studio interior"
          className="h-[60vh] min-h-[420px]"
        >
          <FadeIn>
            <blockquote className="max-w-3xl">
              <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold italic text-[var(--color-white)] leading-snug">
                "We design contextual, biophilic architecture that begins with real listening — creating environments that perform for people, purpose and place."
              </p>
            </blockquote>
          </FadeIn>
        </ImageBand>

        {/* ── Section 4: The WDM Difference ────────────────────────── */}
        <SectionWrapper background="stone" className="py-20 md:py-[120px]">
          <FadeIn>
            <div className="mb-14">
              <h2 className="mb-4">What Makes Us Different</h2>
              <div className="w-16 h-1 bg-[var(--color-yellow)] mb-6" />
              <p className="lead text-[var(--color-graphite)]/80 max-w-2xl">
                There are many ways to approach architecture. This is ours.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {WDM_DIFFERENCE.map(({ icon, title, body }) => (
                <div
                  key={title}
                  className="bg-[var(--color-white)] p-8 flex flex-col gap-5"
                >
                  <div className="w-12 h-12 bg-[var(--color-yellow)] flex items-center justify-center text-[var(--color-graphite)] flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-[var(--color-graphite)] mb-3">
                      {title}
                    </h4>
                    <p className="text-sm leading-relaxed text-[var(--color-graphite)]/80">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </SectionWrapper>

        {/* ── Section 5: Values Strip ───────────────────────────────── */}
        <SectionWrapper background="white" className="py-20 md:py-[120px]">
          <FadeIn>
            <div className="mb-14">
              <h2 className="mb-4">The principles that guide how we think, work and collaborate.</h2>
              <div className="w-16 h-1 bg-[var(--color-yellow)]" />
            </div>

            <div className="grid grid-cols-2 md:flex md:flex-wrap gap-6 lg:gap-8">
              {VALUES.map(({ icon, title, descriptor }) => (
                <div
                  key={title}
                  className="flex flex-col gap-4 md:flex-1 md:min-w-[180px] bg-[var(--color-stone)] p-6"
                >
                  <div className="w-10 h-10 bg-[var(--color-yellow)] flex items-center justify-center text-[var(--color-graphite)] flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <h5 className="font-heading font-semibold text-sm text-[var(--color-graphite)] mb-2">
                      {title}
                    </h5>
                    <p className="text-xs leading-relaxed text-[var(--color-graphite)]/75">
                      {descriptor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </SectionWrapper>

        {/* ── Section 6: Team Section ───────────────────────────────── */}
        <SectionWrapper background="stone" className="py-20 md:py-[120px]">
          <FadeIn>
            <div className="mb-14">
              <h2 className="mb-4">Behind every project is a team that genuinely cares.</h2>
              <div className="w-16 h-1 bg-[var(--color-yellow)] mb-6" />
              <p className="lead text-[var(--color-graphite)]/80 max-w-2xl">
                Martin, Simon and Parminder each bring a distinct perspective to the practice. Together they create an environment where listening, creativity and delivery work in step.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14" data-testid="team-grid">
              {DIRECTORS.map((director, index) => (
                <TeamCard
                  key={director.id}
                  imageSrc={director.imageSrc}
                  name={director.name}
                  role={director.role}
                  bioExcerpt={director.bioExcerpt}
                  loading={index === 0 ? "eager" : "lazy"}
                  ctaLabel={`Read ${director.name.split(" ")[0]}'s Story`}
                  onViewProfile={() => setOpenModal(director.id)}
                />
              ))}
            </div>
          </FadeIn>
        </SectionWrapper>

        {/* Director Modals — rendered outside section to avoid stacking context issues */}
        {DIRECTORS.map((director) => (
          <Dialog
            key={director.id}
            open={openModal === director.id}
            onOpenChange={(open) => !open && setOpenModal(null)}
          >
            <DialogContent
              className="sm:max-w-3xl w-full max-h-[95dvh] sm:max-h-[90dvh] overflow-hidden p-0"
              aria-describedby={`director-bio-${director.id}`}
            >
              <DialogHeader className="sr-only">
                <DialogTitle>{director.name}</DialogTitle>
                <DialogDescription id={`director-bio-${director.id}`}>
                  {director.role} — full profile
                </DialogDescription>
              </DialogHeader>
              <div className="overflow-y-auto max-h-[95dvh] sm:max-h-[90dvh]">
                <DirectorModal director={director} />
              </div>
            </DialogContent>
          </Dialog>
        ))}

        {/* ── Section 7: CTA Box ────────────────────────────────────── */}
        <SectionWrapper background="white" className="py-20 md:py-[120px]">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-12 h-1 bg-[var(--color-yellow)] mx-auto mb-8" />
              <h2 className="mb-6 text-[var(--color-graphite)]">
                Ready to discuss your project?
              </h2>
              <p className="lead text-[var(--color-graphite)]/80 mb-10">
                Every conversation starts with listening. Tell us what you're working on and we'll take it from there.
              </p>
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact">Talk to Our Team</Link>
              </Button>
            </div>
          </FadeIn>
        </SectionWrapper>

      </main>

      <Footer />
    </div>
  );
}
