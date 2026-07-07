import { useState } from "react";
import { Link } from "wouter";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card-custom";
import { FadeIn } from "@/components/ui/fade-in";
import { Rhombus } from "@/components/brand/Rhombus";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

type Sector = "Education" | "Commercial" | "Residential" | "Hospitality";
type Tab = "All" | Sector;

const TABS: Tab[] = ["All", "Education", "Commercial", "Residential", "Hospitality"];

interface Project {
  id: number;
  title: string;
  sector: Sector;
  location: string;
  summary: string;
  imageSrc: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Ashfield Academy",
    sector: "Education",
    location: "Birmingham, West Midlands",
    summary: "A secondary school masterplan designed around natural light, flexible learning clusters, and a strong community threshold.",
    imageSrc: "/images/project-1.png",
  },
  {
    id: 2,
    title: "One Meridian Square",
    sector: "Commercial",
    location: "Manchester City Centre",
    summary: "A 12-storey mixed-use development bringing 45,000 sq ft of Grade A office space to a prominent city-centre gateway site.",
    imageSrc: "/images/project-2.png",
  },
  {
    id: 3,
    title: "Riverside Quarter",
    sector: "Residential",
    location: "Lichfield, Staffordshire",
    summary: "156 homes delivered across three phases — a mix of apartments, townhouses, and later-living units set around a shared public square.",
    imageSrc: "/images/project-3.png",
  },
  {
    id: 4,
    title: "The Harlow Hotel",
    sector: "Hospitality",
    location: "Stratford-upon-Avon",
    summary: "A boutique 48-room hotel in a converted Victorian mill, retaining historic fabric while delivering a contemporary guest experience.",
    imageSrc: "/images/project-1.png",
  },
  {
    id: 5,
    title: "Redwood Primary School",
    sector: "Education",
    location: "Stafford, Staffordshire",
    summary: "A two-form entry primary school designed around play-based learning, acoustic performance, and the wellbeing of its youngest occupants.",
    imageSrc: "/images/project-2.png",
  },
  {
    id: 6,
    title: "Highfield Business Park",
    sector: "Commercial",
    location: "Tamworth, Staffordshire",
    summary: "Four low-rise commercial units with shared amenity space, landscaped courtyard, and active travel infrastructure.",
    imageSrc: "/images/project-3.png",
  },
];

const SECTOR_PILL_COLOURS: Record<Sector, string> = {
  Education: "bg-[var(--color-yellow)] text-[var(--color-graphite)]",
  Commercial: "bg-[var(--color-graphite)] text-[var(--color-white)]",
  Residential: "bg-[var(--color-stone)] text-[var(--color-graphite)]",
  Hospitality: "bg-[var(--color-gold)] text-[var(--color-white)]",
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>("All");

  const filtered = activeTab === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.sector === activeTab);

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

        {/* ── Section 2: Filter + Grid ─────────────────────────────────── */}
        <SectionWrapper background="white" className="py-20 md:py-[120px]">
          <FadeIn>
            {/* Tab bar */}
            <div className="flex gap-1 flex-wrap mb-12 border-b border-[var(--color-graphite)]/10 pb-0">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-5 py-3 text-sm font-semibold uppercase tracking-wider transition-colors border-b-2 -mb-px",
                    activeTab === tab
                      ? "border-[var(--color-yellow)] text-[var(--color-graphite)] bg-[var(--color-yellow)]/10"
                      : "border-transparent text-[var(--color-graphite)]/60 hover:text-[var(--color-graphite)]"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Project grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <FadeIn key={project.id} delay={i * 60}>
                <div className="group flex flex-col h-full bg-[var(--color-white)] border border-[var(--color-graphite)]/8 hover:border-[var(--color-yellow)] transition-colors">
                  <div className="overflow-hidden">
                    <img
                      src={project.imageSrc}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-56 object-cover hover-image-zoom transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className={cn("text-xs font-semibold tracking-widest uppercase px-3 py-1 mb-4 w-fit", SECTOR_PILL_COLOURS[project.sector])}>
                      {project.sector}
                    </span>
                    <h3 className="font-heading font-bold text-xl mb-1 text-[var(--color-graphite)]">{project.title}</h3>
                    <p className="flex items-center gap-1 text-xs text-[var(--color-graphite)]/50 mb-3 uppercase tracking-wider">
                      <MapPin className="w-3 h-3" />{project.location}
                    </p>
                    <p className="text-sm text-[var(--color-graphite)]/75 leading-relaxed flex-grow mb-4">{project.summary}</p>
                    <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-gold)] hover:text-[var(--color-graphite)] transition-colors mt-auto">
                      View Project →
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-[var(--color-graphite)]/50 py-16">No projects in this sector yet.</p>
          )}
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
