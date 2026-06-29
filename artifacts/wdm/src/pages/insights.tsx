import { useState } from "react";
import { Link } from "wouter";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { InsightCard } from "@/components/ui/insight-card";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = "Education" | "Commercial" | "Residential" | "Hospitality" | "Podcast";
type InsightTab = "All" | Category;

const INSIGHT_TABS: InsightTab[] = ["All", "Education", "Commercial", "Residential", "Hospitality", "Podcast"];

interface Article {
  id: number;
  imageSrc: string;
  category: Category;
  tag: "Article" | "Podcast";
  title: string;
  summary: string;
  author: string;
  date: string;
}

const ARTICLES: Article[] = [
  {
    id: 1,
    imageSrc: "/images/insight-1.png",
    category: "Education",
    tag: "Article",
    title: "How classroom acoustics affect learning outcomes",
    summary: "A review of the evidence linking poor acoustic design to reduced attainment — and what architects can do about it.",
    author: "WDM Studio",
    date: "12 May 2025",
  },
  {
    id: 2,
    imageSrc: "/images/insight-2.png",
    category: "Commercial",
    tag: "Article",
    title: "The case for bringing people back to the office",
    summary: "Design strategies that make the workplace a destination rather than an obligation — and why it matters for occupier value.",
    author: "WDM Studio",
    date: "3 April 2025",
  },
  {
    id: 3,
    imageSrc: "/images/insight-3.png",
    category: "Hospitality",
    tag: "Podcast",
    title: "Designing the guest journey — with Sarah Moss",
    summary: "We sat down with hospitality consultant Sarah Moss to talk about what guests really notice — and what designers often get wrong.",
    author: "WDM Podcast",
    date: "18 March 2025",
  },
  {
    id: 4,
    imageSrc: "/images/insight-1.png",
    category: "Residential",
    tag: "Article",
    title: "Making the case for quality in volume housing",
    summary: "Why the false economy of cost-cutting in residential development always costs more in the long run.",
    author: "WDM Studio",
    date: "7 February 2025",
  },
  {
    id: 5,
    imageSrc: "/images/insight-2.png",
    category: "Education",
    tag: "Podcast",
    title: "Learning environments after COVID — with Dr James Reid",
    summary: "A conversation about how the pandemic changed what we expect from school buildings, and whether the changes will stick.",
    author: "WDM Podcast",
    date: "14 January 2025",
  },
  {
    id: 6,
    imageSrc: "/images/insight-3.png",
    category: "Commercial",
    tag: "Article",
    title: "Embodied carbon in commercial buildings",
    summary: "Why developers and occupiers can no longer defer the question of embodied carbon — and where to start.",
    author: "WDM Studio",
    date: "2 December 2024",
  },
];

export default function Insights() {
  const [activeTab, setActiveTab] = useState<InsightTab>("All");

  const filtered = activeTab === "All"
    ? ARTICLES
    : activeTab === "Podcast"
    ? ARTICLES.filter((a) => a.tag === "Podcast")
    : ARTICLES.filter((a) => a.category === activeTab);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {/* ── Section 1: Editorial Hero ────────────────────────────────── */}
        <SectionWrapper background="white" className="pt-40 pb-16 md:pt-48 md:pb-20">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-6">
                Ideas &amp; Perspectives
              </p>
              <h1 className="text-[var(--color-graphite)] mb-6">
                Thinking beyond the building.
              </h1>
              <p className="lead text-[var(--color-graphite)]/70 max-w-xl">
                Ideas, perspectives and conversations from the Why Design Matters team.
              </p>
            </div>
          </FadeIn>
        </SectionWrapper>

        {/* ── Section 2: Featured Article ──────────────────────────────── */}
        <SectionWrapper background="stone" className="py-20 md:py-[120px]">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-8">
              Featured
            </p>
          </FadeIn>
          <FadeIn delay={60}>
            <div className="flex flex-col lg:flex-row gap-0 group border border-transparent hover:border-[var(--color-yellow)] transition-colors">
              <div className="w-full lg:w-[60%] overflow-hidden">
                <img
                  src="/images/band.png"
                  alt="Featured article"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-72 lg:h-full object-cover hover-image-zoom transition-transform duration-700 min-h-[320px]"
                />
              </div>
              <div className="w-full lg:w-[40%] bg-[var(--color-white)] p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-4 block">
                    Featured Article
                  </span>
                  <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4 text-[var(--color-graphite)] group-hover:text-[var(--color-gold)] transition-colors leading-snug">
                    Why the places we learn in shape what we learn
                  </h2>
                  <p className="body text-[var(--color-graphite)]/75 mb-6 leading-relaxed">
                    Education architecture has been shaped by decades of shifting policy, shrinking budgets, and varying ideas about what learning actually looks like. In this long read, we look at what the evidence really says about the relationship between space and attainment.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-4 text-xs text-[var(--color-graphite)]/50 uppercase tracking-wider mb-6">
                    <span>WDM Studio</span>
                    <span>·</span>
                    <span>26 June 2025</span>
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--color-graphite)] hover:text-[var(--color-gold)] transition-colors">
                    Read More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </SectionWrapper>

        {/* ── Section 3: Filter + Article Grid ────────────────────────── */}
        <SectionWrapper background="white" className="py-20 md:py-[120px]">
          <FadeIn>
            <div className="flex gap-1 flex-wrap mb-12 border-b border-[var(--color-graphite)]/10 pb-0">
              {INSIGHT_TABS.map((tab) => (
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((article, i) => (
              <FadeIn key={article.id} delay={i * 60}>
                <InsightCard
                  imageSrc={article.imageSrc}
                  category={`${article.tag} · ${article.category}`}
                  title={article.title}
                  summary={article.summary}
                  href="#"
                  ctaLabel={article.tag === "Podcast" ? "Listen Now" : "Read More"}
                />
              </FadeIn>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-[var(--color-graphite)]/50 py-16">No articles in this category yet.</p>
          )}
        </SectionWrapper>

        {/* ── Section 4: Podcast Callout ───────────────────────────────── */}
        <SectionWrapper background="graphite" className="py-20 md:py-[120px]">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="overflow-hidden">
                <img
                  src="/images/podcast-artwork.png"
                  alt="Why Design Matters podcast artwork"
                  loading="lazy"
                  decoding="async"
                  className="w-full max-w-sm mx-auto lg:mx-0 aspect-square object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-4">
                  Our Podcast
                </p>
                <h2 className="text-[var(--color-white)] mb-6">Conversations that matter.</h2>
                <p className="lead text-[var(--color-stone)] mb-10">
                  We sit down with architects, clients, educators and business leaders to explore the ideas shaping the built environment. Available wherever you listen to podcasts.
                </p>
                <Button variant="primary" size="lg" asChild>
                  <Link href="/podcasts">Explore All Episodes</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </SectionWrapper>

        {/* ── Section 5: CTA Band ──────────────────────────────────────── */}
        <SectionWrapper background="stone" className="py-20 md:py-[120px]">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-[var(--color-graphite)] mb-6">Have a topic you'd like us to explore?</h2>
              <p className="lead text-[var(--color-graphite)]/80 mb-10">
                We're always looking for new perspectives. If you have an idea for an article or would like to be a guest on our podcast, we'd love to hear from you.
              </p>
              <Button variant="secondary" size="lg" asChild>
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
