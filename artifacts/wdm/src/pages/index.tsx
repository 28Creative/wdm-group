import { Link } from "wouter";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/card-custom";
import { ImageBand } from "@/components/ui/image-band";
import { TeamCard } from "@/components/ui/team-card";
import { SectorCard } from "@/components/ui/sector-card";
import { InsightCard } from "@/components/ui/insight-card";
import { Button } from "@/components/ui/button";
import { Rhombus } from "@/components/brand/Rhombus";
import { FadeIn } from "@/components/ui/fade-in";
import { Users, Building2, Network } from "lucide-react";

const HOW_WE_THINK = [
  {
    icon: <Users className="w-5 h-5" />,
    title: "Design for People",
    body: "Every decision begins with the people who will use the space — their needs, their routines, their wellbeing.",
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "Places That Perform",
    body: "Great spaces do more than look impressive. They support the activities that happen within them.",
  },
  {
    icon: <Network className="w-5 h-5" />,
    title: "Connected Thinking",
    body: "Architecture doesn't exist in isolation. We consider context, community and the wider world in every project.",
  },
];

const SECTORS = [
  { image: "/images/sector-education.png", title: "Education", descriptor: "Spaces that support learning, wellbeing and community.", href: "/sector/education" },
  { image: "/images/sector-commercial.png", title: "Commercial & Workplace", descriptor: "Environments that help organisations and their people thrive.", href: "/sector/commercial" },
  { image: "/images/sector-residential.png", title: "Residential", descriptor: "Homes and developments that reflect how people want to live.", href: "/sector/residential" },
  { image: "/images/sector-hospitality.png", title: "Hospitality", descriptor: "Experience-led spaces that connect with guests and create lasting impressions.", href: "/sector/hospitality" },
];

const PROJECTS = [
  { image: "/images/project-1.png", title: "The Marlowe Library", tag: "Education", summary: "A new community library that redefines public gathering for the post-pandemic era." },
  { image: "/images/project-2.png", title: "Halcyon Works", tag: "Commercial", summary: "A 1970s office building transformed into a human-centred workplace for a growing consultancy." },
  { image: "/images/project-3.png", title: "The Granary Quarter", tag: "Residential", summary: "Twelve homes that balance individual privacy with shared outdoor living." },
];

const TEAM = [
  {
    image: "/images/martin-beaumont.jpg",
    name: "Martin Beaumont",
    role: "Director | Architect",
    bio: "Martin leads every project with a listening-first approach, taking time to understand what clients and communities truly need before a single line is drawn.",
    loading: "eager" as const,
  },
  {
    image: "/images/simon-jesson.jpg",
    name: "Simon Jesson",
    role: "Director | Architect",
    bio: "Simon translates ideas into buildable, deliverable solutions — bridging the gap between creative ambition and practical reality.",
    loading: "lazy" as const,
  },
  {
    image: "/images/parminder-degan.jpg",
    name: "Parminder Degan",
    role: "Director | Architect",
    bio: "Parminder designs from the inside out, considering how spaces feel to the people who move through them every day.",
    loading: "lazy" as const,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-grow">

        {/* ── Section 1: Hero ────────────────────────────────────────── */}
        <section className="relative h-screen min-h-[640px] bg-[var(--color-graphite)] flex items-center overflow-hidden">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            src="/videos/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[var(--color-graphite)]/65" />
          {/* Decorative rhombus */}
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
                Design matters because places shape people.
              </h1>
              <p className="lead text-[var(--color-stone)] mb-10 max-w-xl hero-fade-3">
                We create thoughtful architecture that considers how people live, learn, work and connect.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 hero-fade-4 items-center sm:items-start">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/contact">Start a Conversation</Link>
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  asChild
                  className="border-[var(--color-white)] text-[var(--color-white)] hover:bg-[var(--color-white)] hover:text-[var(--color-graphite)]"
                >
                  <Link href="/projects">Explore Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2: Why Design Matters Intro ────────────────────── */}
        <SectionWrapper background="stone" className="py-20 md:py-[120px]">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              {/* Left */}
              <div className="space-y-8">
                <p className="lead text-[var(--color-graphite)]">
                  Design matters because the spaces we inhabit shape the way we feel, think, work and connect. Whether we are aware of it or not, the environments around us influence our mood, our behaviour and our sense of belonging.
                </p>
                <blockquote className="border-l-4 border-[var(--color-yellow)] pl-6 mt-4">
                  <p className="text-xl font-bold italic text-[var(--color-graphite)] leading-relaxed">
                    "How can this place improve the lives of the people who use it?"
                  </p>
                </blockquote>
              </div>

              {/* Right — How We Think */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)] mb-8">
                  How We Think
                </p>
                <div className="space-y-4">
                  {HOW_WE_THINK.map(({ icon, title, body }) => (
                    <div key={title} className="flex gap-4 p-6 bg-[var(--color-white)]">
                      <div className="flex-shrink-0 w-10 h-10 bg-[var(--color-yellow)] flex items-center justify-center text-[var(--color-graphite)]">
                        {icon}
                      </div>
                      <div>
                        <h5 className="font-heading font-semibold text-base mb-1 text-[var(--color-graphite)]">
                          {title}
                        </h5>
                        <p className="text-sm leading-relaxed text-[var(--color-graphite)]/75">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </SectionWrapper>

        {/* ── Section 3: Full-Width Image Band ───────────────────────── */}
        <ImageBand
          imageSrc="/images/band.png"
          imageAlt="WDM project interior"
          className="h-[70vh] min-h-[480px]"
        >
          <FadeIn>
            <p className="lead text-[var(--color-white)] mb-8 max-w-2xl">
              At Why Design Matters, we create environments that perform — for the people who use them, the organisations that run them, and the communities they serve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact">Start a Conversation</Link>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                asChild
                className="border-[var(--color-white)] text-[var(--color-white)] hover:bg-[var(--color-white)] hover:text-[var(--color-graphite)]"
              >
                <Link href="/projects">Explore Our Work</Link>
              </Button>
            </div>
          </FadeIn>
        </ImageBand>

        {/* ── Section 4: Sector Grid ─────────────────────────────────── */}
        <SectionWrapper background="white" className="py-20 md:py-[120px]">
          <FadeIn>
            <div className="mb-14">
              <h2 className="mb-4">Expertise That Starts with Understanding</h2>
              <div className="w-16 h-1 bg-[var(--color-yellow)] mb-6" />
              <p className="lead text-[var(--color-graphite)]/80 max-w-2xl">
                Every sector brings its own culture, challenges and expectations. Our work begins with understanding what makes each one unique.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
              {SECTORS.map((sector) => (
                <SectorCard
                  key={sector.href}
                  imageSrc={sector.image}
                  title={sector.title}
                  descriptor={sector.descriptor}
                  ctaHref={sector.href}
                  stacked
                />
              ))}
            </div>
          </FadeIn>
        </SectionWrapper>

        {/* ── Section 5: Projects Strip ──────────────────────────────── */}
        <SectionWrapper background="stone" className="py-20 md:py-[120px]">
          <FadeIn>
            <div className="mb-14">
              <h2 className="mb-4">From vision to reality.</h2>
              <div className="w-16 h-1 bg-[var(--color-yellow)] mb-6" />
              <p className="lead text-[var(--color-graphite)]/80 max-w-2xl">
                Every project begins with a conversation and ends with a place that matters.
              </p>
            </div>

            {/* Horizontal scroll on mobile, 3-col grid on desktop */}
            <div className="flex gap-6 overflow-x-auto pb-6 -mx-6 px-6 md:overflow-visible md:grid md:grid-cols-3 md:gap-8 md:pb-0 md:mx-0 md:px-0">
              {PROJECTS.map((project) => (
                <div key={project.title} className="min-w-[300px] flex-shrink-0 md:min-w-0">
                  <span className="inline-block mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">
                    {project.tag}
                  </span>
                  <Card
                    imageSrc={project.image}
                    imageAlt={project.title}
                    title={project.title}
                    body={project.summary}
                    ctaText="View Project"
                    ctaHref="#"
                    useRhombusClip
                    className="bg-[var(--color-stone)]"
                  />
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--color-graphite)] hover:text-[var(--color-gold)] transition-colors"
              >
                View All Projects →
              </Link>
            </div>
          </FadeIn>
        </SectionWrapper>

        {/* ── Section 6: Meet the Team ───────────────────────────────── */}
        <SectionWrapper background="white" className="py-20 md:py-[120px]">
          <FadeIn>
            <div className="mb-14">
              <h2 className="mb-4">Three perspectives. One belief.</h2>
              <div className="w-16 h-1 bg-[var(--color-yellow)] mb-6" />
              <p className="lead text-[var(--color-graphite)]/80 max-w-2xl">
                Martin, Simon and Parminder bring different strengths to every project. What they share is a commitment to design that begins with listening.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {TEAM.map((member) => (
                <TeamCard
                  key={member.name}
                  imageSrc={member.image}
                  name={member.name}
                  role={member.role}
                  bioExcerpt={member.bio}
                  loading={member.loading}
                />
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--color-graphite)] hover:text-[var(--color-gold)] transition-colors"
              >
                Meet The Team →
              </Link>
            </div>
          </FadeIn>
        </SectionWrapper>

        {/* ── Section 7: Insights Strip ──────────────────────────────── */}
        <SectionWrapper background="stone" className="py-20 md:py-[120px]">
          <FadeIn>
            <div className="mb-14">
              <h2 className="mb-4">Thinking beyond the building.</h2>
              <div className="w-16 h-1 bg-[var(--color-yellow)] mb-6" />
              <p className="lead text-[var(--color-graphite)]/80 max-w-2xl">
                Our insights explore the ideas, challenges and conversations that shape great design.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <InsightCard
                imageSrc="/images/insight-1.png"
                category="Article"
                title="Why the best buildings begin with listening"
                summary="The most enduring architecture starts not with sketches, but with conversations. Here's how deep listening shapes every project we take on."
                href="#"
              />
              <InsightCard
                imageSrc="/images/insight-2.png"
                category="Article"
                title="Material honesty and what it means today"
                summary="As trends cycle through surface and spectacle, we explore why authentic material choices still produce the most powerful spaces."
                href="#"
              />
              <InsightCard
                imageSrc="/images/insight-3.png"
                category="Podcast"
                title="On designing for belonging — with Dr Leila Hassan"
                summary="A conversation about how architecture can foster genuine community and the growing evidence that spatial design shapes wellbeing."
                href="#"
                ctaLabel="Listen Now"
              />
            </div>

            <div className="mt-12">
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--color-graphite)] hover:text-[var(--color-gold)] transition-colors"
              >
                Explore All Insights →
              </Link>
            </div>
          </FadeIn>
        </SectionWrapper>

        {/* ── Section 8: Final CTA Band ──────────────────────────────── */}
        <section className="relative w-full py-20 md:py-[120px] bg-[var(--color-yellow)] overflow-hidden">
          <Rhombus
            aria-hidden="true"
            className="absolute -right-20 top-1/2 -translate-y-1/2 w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] text-[var(--color-graphite)] opacity-[0.06] pointer-events-none"
          />
          <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12 lg:px-16">
            <FadeIn>
              <div className="max-w-2xl">
                <h2 className="text-[var(--color-graphite)] mb-6">
                  Let's Create Something That Matters
                </h2>
                <p className="lead text-[var(--color-graphite)]/80 mb-10">
                  Every place tells a story. We'd love to help you tell yours. Whether you have a brief ready or an idea you're still shaping, the conversation starts here.
                </p>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/contact">Start a Conversation</Link>
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
