import { Link } from "wouter";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { Rhombus } from "@/components/brand/Rhombus";
import { ArrowRight, Clock, Mic } from "lucide-react";
import { cn } from "@/lib/utils";

interface Episode {
  number: string;
  title: string;
  guest: string;
  summary: string;
  duration: string;
  imageSrc: string;
}

const EPISODES: Episode[] = [
  {
    number: "EP. 12",
    title: "What does great school design actually look like?",
    guest: "Dr Emma Clarke, Education Consultant",
    summary: "Emma has spent 20 years advising on school building programmes. In this conversation we dig into the gap between what research says and what schools actually get — and why the best buildings are the ones nobody notices.",
    duration: "48 min",
    imageSrc: "/images/project-1.png",
  },
  {
    number: "EP. 11",
    title: "The lobby problem — first impressions in hospitality",
    guest: "Marco Ricci, Hospitality Director",
    summary: "Marco has opened hotels across Europe and Asia. We talk about why the lobby is still the most important 30 seconds of any hotel stay, and what designers routinely get wrong about it.",
    duration: "41 min",
    imageSrc: "/images/project-2.png",
  },
  {
    number: "EP. 10",
    title: "Embodied carbon: where do we actually start?",
    guest: "Priya Nair, Sustainability Engineer",
    summary: "A no-nonsense conversation about embodied carbon — what it is, why it matters more than most developers currently think, and the practical steps practices of any size can take right now.",
    duration: "55 min",
    imageSrc: "/images/project-3.png",
  },
  {
    number: "EP. 09",
    title: "Designing homes people actually want to live in",
    guest: "Tom Ashworth, Residential Developer",
    summary: "Tom has delivered over 2,000 homes across the Midlands. We talk about the false economy of value engineering, why placemaking matters, and what he wishes architects understood about viability.",
    duration: "44 min",
    imageSrc: "/images/project-1.png",
  },
];

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
            <div className="max-w-3xl">
              <div className="hero-fade-1">
                <Rhombus className="text-[var(--color-yellow)] w-8 h-8 mb-8" />
              </div>
              <h1 className="text-[var(--color-white)] mb-6 hero-fade-2">
                Conversations that matter.
              </h1>
              <p className="lead text-[var(--color-stone)] mb-10 max-w-xl hero-fade-3">
                We sit down with architects, clients, educators and business leaders to explore the ideas, challenges and opportunities shaping the built environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 hero-fade-4">
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

        {/* ── Section 3: Latest Episodes ───────────────────────────────── */}
        <SectionWrapper background="stone" className="py-20 md:py-[120px]">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-4">
              Recent Episodes
            </p>
            <h2 className="mb-12 text-[var(--color-graphite)]">Latest Episodes.</h2>
          </FadeIn>
          <div className="space-y-4">
            {EPISODES.map((ep, i) => (
              <FadeIn key={ep.number} delay={i * 60}>
                <div className="group flex flex-col sm:flex-row gap-0 bg-[var(--color-white)] hover:bg-[var(--color-stone)] transition-colors border border-transparent hover:border-[var(--color-yellow)]">
                  <div className="sm:w-32 md:w-40 shrink-0 overflow-hidden">
                    <img
                      src={ep.imageSrc}
                      alt={ep.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-40 sm:h-full object-cover hover-image-zoom transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col flex-grow p-6 md:p-8 justify-between">
                    <div>
                      <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-2 block">
                        {ep.number}
                      </span>
                      <h3 className="font-heading font-bold text-xl mb-1 text-[var(--color-graphite)] group-hover:text-[var(--color-gold)] transition-colors">
                        {ep.title}
                      </h3>
                      <p className="text-sm text-[var(--color-graphite)]/50 mb-3 italic">{ep.guest}</p>
                      <p className="text-sm text-[var(--color-graphite)]/75 leading-relaxed">{ep.summary}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--color-graphite)]/10">
                      <span className="flex items-center gap-1.5 text-xs text-[var(--color-graphite)]/50">
                        <Clock className="w-3.5 h-3.5" />
                        {ep.duration}
                      </span>
                      <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-graphite)] hover:text-[var(--color-gold)] transition-colors">
                        Listen Now →
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </SectionWrapper>

        {/* ── Section 4: Episode Archive Teaser ───────────────────────── */}
        <SectionWrapper background="white" className="py-20 md:py-[120px]">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-[var(--color-graphite)] mb-6">More Episodes.</h2>
              <p className="lead text-[var(--color-graphite)]/80 mb-10">
                We publish new episodes regularly. Browse the full archive to find conversations on the topics that matter most to you.
              </p>
              <Button variant="primary" size="lg" asChild>
                <a href="#">Browse All Episodes</a>
              </Button>
            </div>
          </FadeIn>
        </SectionWrapper>

        {/* ── Section 5: CTA Band ──────────────────────────────────────── */}
        <SectionWrapper background="graphite" className="py-20 md:py-[120px]">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-[var(--color-white)] mb-6">Want to be a guest on the podcast?</h2>
              <p className="lead text-[var(--color-stone)] mb-10">
                We're always looking for interesting voices and perspectives. If you have something worth saying about design, architecture or the built environment, we'd love to have the conversation.
              </p>
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </FadeIn>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
