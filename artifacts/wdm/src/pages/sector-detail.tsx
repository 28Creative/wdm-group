import { Link, useRoute } from "wouter";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { InsightCard } from "@/components/ui/insight-card";
import { ImageBand } from "@/components/ui/image-band";
import { ProcessStep } from "@/components/ui/process-step";
import { Card } from "@/components/ui/card-custom";
import { FadeIn } from "@/components/ui/fade-in";
import { Rhombus } from "@/components/brand/Rhombus";
import {
  Check,
  ArrowLeft,
  BookOpen,
  Users,
  Sun,
  Leaf,
  Building2,
  Briefcase,
  BarChart2,
  Globe,
  Home,
  Key,
  Heart,
  Compass,
  MapPin,
  Star,
  Coffee,
  RotateCcw,
  Lightbulb,
  Shield,
  Award,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────
   Shared sub-components
───────────────────────────────────────────────────────────────────────── */

function HeroSection({
  imageSrc,
  h1,
  subtitle,
  children,
}: {
  imageSrc: string;
  h1: string;
  subtitle: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative h-screen min-h-[640px] bg-[var(--color-graphite)] flex items-center overflow-hidden">
      <img
        src={imageSrc}
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
          <h1 className="text-[var(--color-white)] mb-6 hero-fade-2">{h1}</h1>
          <p className="lead text-[var(--color-stone)] mb-10 max-w-xl hero-fade-3">{subtitle}</p>
          {children && <div className="hero-fade-4">{children}</div>}
        </div>
      </div>
    </section>
  );
}

function BackLink() {
  return (
    <Link
      href="/sector-expertise"
      className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)] hover:text-[var(--color-graphite)] transition-colors mb-12"
    >
      <ArrowLeft className="w-4 h-4" />
      All Sectors
    </Link>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <Check className="w-5 h-5 mt-0.5 text-[var(--color-gold)] shrink-0" />
      <span className="body text-[var(--color-graphite)]/80">{text}</span>
    </li>
  );
}

function CtaBand() {
  return (
    <section className="w-full py-20 md:py-[120px] bg-[var(--color-yellow)]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-16">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-[var(--color-graphite)] mb-6">
              Ready to discuss your project?
            </h2>
            <p className="lead text-[var(--color-graphite)]/80 mb-10">
              Tell us about your brief and we will bring the right expertise to the conversation from day one.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Start a Conversation</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Education
───────────────────────────────────────────────────────────────────────── */

const EDU_WHY_ITEMS = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Learning through space",
    body: "Research consistently shows that classroom design affects concentration, behaviour, and attainment. We design with the evidence in mind.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Multiple users, one building",
    body: "A school serves pupils, teachers, support staff, parents, and the wider community. Good design accommodates all of them without compromise.",
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: "Natural light and air",
    body: "Daylighting and ventilation are the single biggest environmental levers in school design. We optimise both from the earliest massing decisions.",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Long-term sustainability",
    body: "Schools are civic assets built to last. We design for operational efficiency and low carbon from day one, not as an afterthought.",
  },
];

const EDU_EXPERTISE = [
  { imageSrc: "/images/sector-education.png", title: "Primary Education", descriptor: "Nurturing environments for early and primary years, balancing play, learning, and safety." },
  { imageSrc: "/images/interior-1.png", title: "Secondary Schools", descriptor: "Flexible, aspirational spaces that support the full breadth of secondary curriculum." },
  { imageSrc: "/images/architecture-1.png", title: "Further Education", descriptor: "Colleges and vocational centres where design reflects professional environments." },
  { imageSrc: "/images/process-1.png", title: "Higher Education", descriptor: "University buildings that advance research, teaching, and campus identity." },
  { imageSrc: "/images/band.png", title: "Special Educational Needs", descriptor: "Sensitive, expert environments that give every learner the best possible conditions." },
];

const EDU_WELLBEING = [
  { icon: <Sun className="w-6 h-6" />, title: "Maximised daylighting" },
  { icon: <Leaf className="w-6 h-6" />, title: "Natural ventilation" },
  { icon: <Users className="w-6 h-6" />, title: "Safe social spaces" },
  { icon: <Heart className="w-6 h-6" />, title: "Calm retreat areas" },
  { icon: <Compass className="w-6 h-6" />, title: "Legible wayfinding" },
  { icon: <BookOpen className="w-6 h-6" />, title: "Inspiring learning zones" },
];

const EDU_PROCESS_STEPS = [
  { number: "01", title: "Evidence Review", descriptor: "We begin by reviewing research evidence on learning environments specific to your age range and curriculum.", icon: <BookOpen className="w-5 h-5" /> },
  { number: "02", title: "Stakeholder Engagement", descriptor: "Pupils, staff, governors, and community groups all have a voice in shaping the brief before a line is drawn.", icon: <Users className="w-5 h-5" /> },
  { number: "03", title: "Design Development", descriptor: "From concept through planning, we test every decision against the brief, the evidence, and the site.", icon: <Lightbulb className="w-5 h-5" /> },
  { number: "04", title: "Handover & Post-Occupancy", descriptor: "We stay involved after handover to ensure the building performs as intended and occupants feel supported.", icon: <Award className="w-5 h-5" /> },
];

const EDU_INSIGHTS = [
  { imageSrc: "/images/insight-1.png", category: "Education", title: "How classroom acoustics affect learning outcomes", summary: "A review of the evidence linking poor acoustic design to reduced attainment — and how to address it.", href: "/insights" },
  { imageSrc: "/images/insight-2.png", category: "Education", title: "Designing the post-pandemic school", summary: "Lessons from recent projects about ventilation, flexibility, and the changing role of the school building.", href: "/insights" },
];

const EDU_PROJECTS = [
  { title: "Redwood Primary School", body: "A two-form entry primary school designed around natural light, flexible learning clusters, and a strong community threshold." },
  { title: "Ashfield Academy", body: "A secondary school masterplan that phases 1,200-pupil expansion while maintaining continuity of teaching across four years of construction." },
  { title: "City College Annex", body: "A further education annex providing specialist workshop space for construction and engineering disciplines." },
];

function EducationPage() {
  return (
    <main className="flex-grow">
      <HeroSection
        imageSrc="/images/education-hero.png"
        h1="Education & Learning Environments"
        subtitle="Schools, colleges, and universities designed around how people actually learn — spaces that balance rigour, creativity, and the wellbeing of every occupant."
      />

      {/* Section 2: Why the learning environment matters */}
      <SectionWrapper background="white" className="py-20 md:py-[120px]">
        <FadeIn>
          <BackLink />
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-6">
            Our Perspective
          </p>
          <h2 className="mb-12 max-w-2xl text-[var(--color-graphite)]">
            Why the learning environment matters
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {EDU_WHY_ITEMS.map((item, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="flex gap-4 items-start p-6 bg-[var(--color-stone)]">
                <div className="w-12 h-12 flex items-center justify-center bg-[var(--color-yellow)] text-[var(--color-graphite)] shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-2 text-[var(--color-graphite)]">{item.title}</h4>
                  <p className="text-sm text-[var(--color-graphite)]/75 leading-relaxed">{item.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Section 3: Expertise strip */}
      <SectionWrapper background="stone" className="py-20 md:py-[120px]">
        <FadeIn>
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-4">
            Where We Work
          </p>
          <h2 className="mb-10 text-[var(--color-graphite)]">Education expertise</h2>
        </FadeIn>
        <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 md:-mx-0 md:px-0 md:grid md:grid-cols-3 lg:grid-cols-5 md:overflow-x-visible">
          {EDU_EXPERTISE.map((item, i) => (
            <FadeIn key={i} delay={i * 60} className="min-w-[260px] md:min-w-0">
              <div className="flex flex-col h-full">
                <div className="overflow-hidden mb-4">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[4/3] object-cover hover-image-zoom transition-transform duration-500"
                  />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2 text-[var(--color-graphite)]">{item.title}</h4>
                <p className="text-sm text-[var(--color-graphite)]/75 leading-relaxed">{item.descriptor}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Section 4: ImageBand quote */}
      <ImageBand imageSrc="/images/interior-1.png" imageAlt="Education interior">
        <FadeIn>
          <blockquote className="max-w-2xl">
            <p className="text-2xl md:text-3xl font-heading font-bold text-[var(--color-white)] leading-snug mb-4">
              "The best schools are not designed for education — they are designed for children."
            </p>
            <cite className="text-sm tracking-widest uppercase text-[var(--color-stone)] not-italic">WDM Education Studio</cite>
          </blockquote>
        </FadeIn>
      </ImageBand>

      {/* Section 5: Wellbeing icon grid */}
      <SectionWrapper background="white" className="py-20 md:py-[120px]">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-4">
              Design Priorities
            </p>
            <h2 className="text-[var(--color-graphite)]">Designing for wellbeing</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {EDU_WELLBEING.map((item, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div className="flex flex-col items-center text-center p-6 bg-[var(--color-stone)]">
                <div className="w-12 h-12 flex items-center justify-center bg-[var(--color-yellow)] text-[var(--color-graphite)] mb-4">
                  {item.icon}
                </div>
                <span className="font-heading font-semibold text-[var(--color-graphite)]">{item.title}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Section 6: Related Insights */}
      <SectionWrapper background="stone" className="py-20 md:py-[120px]">
        <FadeIn>
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-4">
            Thinking
          </p>
          <h2 className="mb-10 text-[var(--color-graphite)]">Related insights</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDU_INSIGHTS.map((insight, i) => (
            <FadeIn key={i} delay={i * 100}>
              <InsightCard {...insight} />
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Section 7: Our Approach — process steps */}
      <SectionWrapper background="white" className="py-20 md:py-[120px]">
        <FadeIn>
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-4">
            How We Work
          </p>
          <h2 className="mb-12 text-[var(--color-graphite)]">Our approach to education projects</h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {EDU_PROCESS_STEPS.map((step, i) => (
            <FadeIn key={i} delay={i * 80}>
              <ProcessStep {...step} />
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Section 8: Education Projects */}
      <SectionWrapper background="stone" className="py-20 md:py-[120px]">
        <FadeIn>
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-4">
            Selected Projects
          </p>
          <h2 className="mb-10 text-[var(--color-graphite)]">Education projects</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EDU_PROJECTS.map((project, i) => (
            <FadeIn key={i} delay={i * 80}>
              <Card
                imageSrc="/images/project-1.png"
                imageAlt={project.title}
                title={project.title}
                body={project.body}
                ctaText="View Project"
                ctaHref="/projects"
                loading="lazy"
              />
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Section 9: CTA */}
      <CtaBand />
    </main>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Commercial
───────────────────────────────────────────────────────────────────────── */

const COM_EXPERIENCE = [
  { imageSrc: "/images/sector-commercial.png", title: "Office Development", descriptor: "New-build and refurbished offices that make the case for coming to work." },
  { imageSrc: "/images/architecture-1.png", title: "Mixed-Use Schemes", descriptor: "Commercial buildings that activate ground floors and integrate into their surroundings." },
  { imageSrc: "/images/interior-1.png", title: "Workplace Fit-Out", descriptor: "Interior design and fit-out that translates brand values into the daily experience of work." },
  { imageSrc: "/images/band.png", title: "Retrofit & Upgrade", descriptor: "Existing buildings brought up to modern performance, appearance, and occupant expectations." },
  { imageSrc: "/images/process-1.png", title: "Corporate Campus", descriptor: "Multi-building campuses designed around the movement, collaboration, and culture of an organisation." },
];

const COM_INSIGHTS = [
  { imageSrc: "/images/insight-2.png", category: "Commercial", title: "The case for bringing people back to the office", summary: "Design strategies that make the workplace a destination rather than an obligation.", href: "/insights" },
  { imageSrc: "/images/insight-3.png", category: "Commercial", title: "Embodied carbon in commercial buildings", summary: "Why developers and occupiers can no longer defer the question of embodied carbon.", href: "/insights" },
];

function CommercialPage() {
  return (
    <main className="flex-grow">
      <HeroSection
        imageSrc="/images/commercial-hero.png"
        h1="Commercial & Workplace"
        subtitle="Buildings that attract talent, enable performance, and signal the ambition of the organisations they house. We go beyond the brief to understand what commercial architecture really needs to do."
      />

      {/* Section 2: Looking Beyond the Brief */}
      <SectionWrapper background="white" className="py-20 md:py-[120px]">
        <FadeIn>
          <BackLink />
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-6">
              Our Approach
            </p>
            <h2 className="text-[var(--color-graphite)]">Looking beyond the brief</h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="lead text-[var(--color-graphite)]/80 mb-6">
              A commercial brief typically specifies area, cost, and programme. But a building that only delivers on those terms is unlikely to perform well in use. We bring a deeper inquiry to every commercial project — asking what the building needs to communicate, how it needs to function, and how it will remain relevant over time.
            </p>
            <p className="body text-[var(--color-graphite)]/70 mb-6">
              From the relationship between the ground floor and the street to the quality of light in the deepest part of the floorplate, every decision shapes how people feel about the building they work in. We believe that matters — for occupancy, retention, and value.
            </p>
            <ul className="space-y-3">
              {["Workplace strategy integration", "BREEAM and WELL alignment", "Occupier engagement", "Graded handover and documentation"].map((item, i) => (
                <CheckItem key={i} text={item} />
              ))}
            </ul>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* Section 3: Supporting Performance Through Design */}
      <SectionWrapper background="stone" className="py-20 md:py-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <FadeIn delay={100}>
            <p className="lead text-[var(--color-graphite)]/80 mb-6">
              Commercial buildings are not neutral. The quality of light, the acoustics of a meeting room, the ease of moving between floors — all of these affect how people think, collaborate, and feel. We treat performance as a design outcome, not a technical afterthought.
            </p>
            <ul className="space-y-3">
              {["Acoustic performance standards", "Thermal comfort modelling", "Active and passive travel infrastructure", "End-of-trip facilities"].map((item, i) => (
                <CheckItem key={i} text={item} />
              ))}
            </ul>
          </FadeIn>
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-6">
              Performance by Design
            </p>
            <h2 className="text-[var(--color-graphite)]">Supporting performance through design</h2>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* Section 4: ImageBand */}
      <ImageBand imageSrc="/images/architecture-1.png" imageAlt="Commercial architecture">
        <FadeIn>
          <blockquote className="max-w-2xl">
            <p className="text-2xl md:text-3xl font-heading font-bold text-[var(--color-white)] leading-snug mb-4">
              "The workplace that attracts the best people is the one they actually want to be in."
            </p>
            <cite className="text-sm tracking-widest uppercase text-[var(--color-stone)] not-italic">WDM Commercial Studio</cite>
          </blockquote>
        </FadeIn>
      </ImageBand>

      {/* Section 5: Experience strip */}
      <SectionWrapper background="white" className="py-20 md:py-[120px]">
        <FadeIn>
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-4">
            Where We Work
          </p>
          <h2 className="mb-10 text-[var(--color-graphite)]">Commercial expertise</h2>
        </FadeIn>
        <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 md:-mx-0 md:px-0 md:grid md:grid-cols-3 lg:grid-cols-5 md:overflow-x-visible">
          {COM_EXPERIENCE.map((item, i) => (
            <FadeIn key={i} delay={i * 60} className="min-w-[260px] md:min-w-0">
              <div className="flex flex-col h-full">
                <div className="overflow-hidden mb-4">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[4/3] object-cover hover-image-zoom transition-transform duration-500"
                  />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2 text-[var(--color-graphite)]">{item.title}</h4>
                <p className="text-sm text-[var(--color-graphite)]/75 leading-relaxed">{item.descriptor}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Section 6: Related Insights */}
      <SectionWrapper background="stone" className="py-20 md:py-[120px]">
        <FadeIn>
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-4">
            Thinking
          </p>
          <h2 className="mb-10 text-[var(--color-graphite)]">Related insights</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COM_INSIGHTS.map((insight, i) => (
            <FadeIn key={i} delay={i * 100}>
              <InsightCard {...insight} />
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Section 7: CTA */}
      <CtaBand />
    </main>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Residential
───────────────────────────────────────────────────────────────────────── */

const RES_DEV_CHECKLIST = [
  "Urban and suburban apartment schemes",
  "Mixed-tenure development",
  "Later living and supported housing",
  "Estate regeneration",
  "Placemaking and public realm",
];

const RES_DEV_INSIGHTS = [
  { imageSrc: "/images/insight-1.png", category: "Residential", title: "Making the case for quality in volume housing", summary: "Why the false economy of cost-cutting in residential development always comes back to bite.", href: "/insights" },
  { imageSrc: "/images/insight-2.png", category: "Residential", title: "Later living design: what residents actually want", summary: "A review of post-occupancy research on design in the later living sector.", href: "/insights" },
];

const RES_PH_CHECKLIST = [
  "New-build private houses",
  "Extensions and alterations",
  "Barn conversions and heritage buildings",
  "Energy retrofit and fabric-first upgrades",
  "Listed building consent",
];

const RES_PH_INSIGHTS = [
  { imageSrc: "/images/insight-3.png", category: "Residential", title: "Extensions that add value without adding bulk", summary: "How the best residential extensions respect and enhance what already exists.", href: "/insights" },
  { imageSrc: "/images/insight-1.png", category: "Residential", title: "Planning a fabric-first retrofit", summary: "Reducing energy demand before adding renewables — the correct order of operations.", href: "/insights" },
];

function ResidentialPage() {
  return (
    <main className="flex-grow">
      <HeroSection
        imageSrc="/images/residential-hero.png"
        h1="Residential Design"
        subtitle="From urban apartment schemes to bespoke private homes, we bring the same rigour and care to every residential project — delivering lasting quality that respects its context."
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            variant="ghost"
            size="lg"
            asChild
            className="border-[var(--color-white)] text-[var(--color-white)] hover:bg-[var(--color-white)] hover:text-[var(--color-graphite)]"
          >
            <a href="#residential-development">Residential Development</a>
          </Button>
          <Button
            variant="ghost"
            size="lg"
            asChild
            className="border-[var(--color-white)] text-[var(--color-white)] hover:bg-[var(--color-white)] hover:text-[var(--color-graphite)]"
          >
            <a href="#private-homes">Private Homes</a>
          </Button>
        </div>
      </HeroSection>

      {/* Section 2: Intro */}
      <SectionWrapper background="white" className="py-20 md:py-[120px]">
        <FadeIn>
          <BackLink />
          <div className="max-w-[800px] mx-auto text-center">
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-6">
              Residential at WDM
            </p>
            <h2 className="mb-6 text-[var(--color-graphite)]">
              Homes that work for the people in them
            </h2>
            <p className="lead text-[var(--color-graphite)]/80 mb-4">
              Residential design is the most personal form of architecture. Whether we are delivering 200 homes in a new urban quarter or a single private house in a rural landscape, we bring the same commitment to the quality of lived experience.
            </p>
            <p className="body text-[var(--color-graphite)]/70">
              We work across the full residential spectrum — from volume residential development with complex planning requirements to one-off private commissions where the brief evolves through a long-term client relationship.
            </p>
          </div>
        </FadeIn>
      </SectionWrapper>

      {/* Section 3: Residential Development */}
      <SectionWrapper background="stone" className="py-20 md:py-[120px]" id="residential-development">
        <FadeIn>
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-4">
            Development
          </p>
          <h2 className="mb-6 text-[var(--color-graphite)]">Residential development</h2>
          <p className="lead text-[var(--color-graphite)]/80 mb-8 max-w-2xl">
            Apartment and housing schemes that achieve planning success, deliver on viability, and create the kind of places people genuinely want to live in.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 items-start">
          <FadeIn>
            <ul className="space-y-3">
              {RES_DEV_CHECKLIST.map((item, i) => (
                <CheckItem key={i} text={item} />
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={100}>
            <img
              src="/images/sector-residential.png"
              alt="Residential development"
              loading="lazy"
              decoding="async"
              className="w-full aspect-[4/3] object-cover"
            />
          </FadeIn>
        </div>
        <FadeIn delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RES_DEV_INSIGHTS.map((insight, i) => (
              <InsightCard key={i} {...insight} />
            ))}
          </div>
        </FadeIn>
      </SectionWrapper>

      {/* Section 4: Private Homes */}
      <SectionWrapper background="white" className="py-20 md:py-[120px]" id="private-homes">
        <FadeIn>
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-4">
            Private Clients
          </p>
          <h2 className="mb-6 text-[var(--color-graphite)]">Private homes</h2>
          <p className="lead text-[var(--color-graphite)]/80 mb-8 max-w-2xl">
            Bespoke commissions for private clients who want architecture that reflects how they actually live — and holds its quality for decades.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 items-start">
          <FadeIn delay={100}>
            <img
              src="/images/interior-1.png"
              alt="Private home interior"
              loading="lazy"
              decoding="async"
              className="w-full aspect-[4/3] object-cover"
            />
          </FadeIn>
          <FadeIn>
            <ul className="space-y-3">
              {RES_PH_CHECKLIST.map((item, i) => (
                <CheckItem key={i} text={item} />
              ))}
            </ul>
          </FadeIn>
        </div>
        <FadeIn delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RES_PH_INSIGHTS.map((insight, i) => (
              <InsightCard key={i} {...insight} />
            ))}
          </div>
        </FadeIn>
      </SectionWrapper>

      {/* Section 5: CTA */}
      <CtaBand />
    </main>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Hospitality
───────────────────────────────────────────────────────────────────────── */

const GUEST_JOURNEY_STAGES = [
  {
    stage: "Discovery",
    icon: <Globe className="w-7 h-7" />,
    descriptor: "First impressions are made before the guest arrives. Brand, digital presence, and neighbourhood context all prime the expectation.",
  },
  {
    stage: "Arrival",
    icon: <MapPin className="w-7 h-7" />,
    descriptor: "Threshold design — entrance, lobby, and reception — sets the tone for everything that follows. We design it as the opening line of the guest's story.",
  },
  {
    stage: "Experience",
    icon: <Star className="w-7 h-7" />,
    descriptor: "Rooms, restaurants, and amenity spaces are designed as a unified experience, not a collection of separate briefs.",
  },
  {
    stage: "Comfort",
    icon: <Coffee className="w-7 h-7" />,
    descriptor: "Acoustic performance, natural light, and material quality shape how guests feel at rest. These are technical decisions with experiential consequences.",
  },
  {
    stage: "Return",
    icon: <RotateCcw className="w-7 h-7" />,
    descriptor: "The best hospitality environments earn return visits not through novelty but through the quality of the experience they reliably deliver.",
  },
];

const HOSP_PRINCIPLES = [
  "Hotels and branded residences",
  "Boutique and independent hotels",
  "Restaurant and bar design",
  "Spa and wellness facilities",
  "Members' clubs and private dining",
  "Cultural and visitor centres",
];

const HOSP_EXPERTISE = [
  { imageSrc: "/images/sector-hospitality.png", title: "Hotel Design", descriptor: "Full-service hotels and boutique properties from feasibility to FF&E coordination." },
  { imageSrc: "/images/interior-1.png", title: "Restaurant & Bar", descriptor: "Food and beverage environments designed around the pace and character of service." },
  { imageSrc: "/images/architecture-1.png", title: "Spa & Wellness", descriptor: "Calm, sequenced environments that earn their premium positioning." },
  { imageSrc: "/images/band.png", title: "Members' Clubs", descriptor: "Private spaces that reward membership with architecture that cannot be replicated online." },
];

const HOSP_BEYOND = [
  "Operator briefing and feasibility",
  "Revenue-per-square-metre analysis",
  "Brand standards compliance",
  "Pre-opening planning and phasing",
  "Refurbishment with live operations",
];

const HOSP_INSIGHTS = [
  { imageSrc: "/images/insight-1.png", category: "Hospitality", title: "The lobby as brand statement", summary: "Why the first 30 seconds of a guest's arrival are the most important design challenge in hotel architecture.", href: "/insights" },
  { imageSrc: "/images/insight-3.png", category: "Hospitality", title: "Designing for operational efficiency", summary: "How back-of-house design affects front-of-house experience — and why it is always the first thing cut from the brief.", href: "/insights" },
];

function HospitalityPage() {
  return (
    <main className="flex-grow">
      <HeroSection
        imageSrc="/images/hospitality-hero.png"
        h1="Hospitality & Leisure"
        subtitle="Hotels, restaurants, and leisure venues where every architectural decision is mapped to the guest experience — and the operational reality of running them."
      />

      {/* Section 2: A Different Kind of Brief */}
      <SectionWrapper background="white" className="py-20 md:py-[120px]">
        <FadeIn>
          <BackLink />
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-6">
              Our Perspective
            </p>
            <h2 className="text-[var(--color-graphite)]">A different kind of brief</h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="lead text-[var(--color-graphite)]/80 mb-6">
              Hospitality architecture serves two masters simultaneously: the guest experience and the operational model. A beautiful hotel that is expensive to run or difficult to service is not good hospitality design. A hotel that operates efficiently but fails to move guests is not worth building.
            </p>
            <p className="body text-[var(--color-graphite)]/70">
              We hold both in view throughout the design process, working closely with operators, brand consultants, and FF&amp;E specialists to deliver environments that genuinely perform.
            </p>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* Section 3: Guest Journey */}
      <SectionWrapper background="stone" className="py-20 md:py-[120px]">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-4">
              Design Framework
            </p>
            <h2 className="text-[var(--color-graphite)]">Designing the guest journey</h2>
            <p className="lead text-[var(--color-graphite)]/70 mt-4 max-w-2xl mx-auto">
              We map every major design decision against five stages of the guest experience.
            </p>
          </div>
        </FadeIn>
        {/* Desktop: horizontal row | Mobile: vertical stack */}
        <div className="flex flex-col md:flex-row">
          {GUEST_JOURNEY_STAGES.map((stage, i) => (
            <FadeIn key={i} delay={i * 80} className="flex-1">
              <div
                className={[
                  "flex flex-col h-full p-6 lg:p-8",
                  i % 2 === 0
                    ? "bg-[var(--color-yellow)] text-[var(--color-graphite)]"
                    : "bg-[var(--color-graphite)] text-[var(--color-white)]",
                ].join(" ")}
              >
                <div
                  className={[
                    "w-14 h-14 flex items-center justify-center mb-4 shrink-0",
                    i % 2 === 0 ? "bg-[var(--color-graphite)] text-[var(--color-yellow)]" : "bg-[var(--color-yellow)] text-[var(--color-graphite)]",
                  ].join(" ")}
                >
                  {stage.icon}
                </div>
                <span
                  className={[
                    "text-xs font-semibold tracking-widest uppercase mb-2",
                    i % 2 === 0 ? "text-[var(--color-graphite)]/60" : "text-[var(--color-stone)]",
                  ].join(" ")}
                >
                  Stage {i + 1}
                </span>
                <h4
                  className={[
                    "font-heading font-bold text-xl mb-3",
                    i % 2 === 0 ? "text-[var(--color-graphite)]" : "text-[var(--color-white)]",
                  ].join(" ")}
                >
                  {stage.stage}
                </h4>
                <p
                  className={[
                    "text-sm leading-relaxed flex-grow",
                    i % 2 === 0 ? "text-[var(--color-graphite)]/80" : "text-[var(--color-stone)]",
                  ].join(" ")}
                >
                  {stage.descriptor}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Section 4: Different Environments. Shared Principles. */}
      <SectionWrapper background="white" className="py-20 md:py-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-6">
              Our Scope
            </p>
            <h2 className="text-[var(--color-graphite)]">Different environments. Shared principles.</h2>
          </FadeIn>
          <FadeIn delay={100}>
            <ul className="space-y-3">
              {HOSP_PRINCIPLES.map((item, i) => (
                <CheckItem key={i} text={item} />
              ))}
            </ul>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* Section 5: Expertise strip */}
      <SectionWrapper background="stone" className="py-20 md:py-[120px]">
        <FadeIn>
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-4">
            Where We Work
          </p>
          <h2 className="mb-10 text-[var(--color-graphite)]">Hospitality expertise</h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOSP_EXPERTISE.map((item, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div className="flex flex-col h-full">
                <div className="overflow-hidden mb-4">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[4/3] object-cover hover-image-zoom transition-transform duration-500"
                  />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2 text-[var(--color-graphite)]">{item.title}</h4>
                <p className="text-sm text-[var(--color-graphite)]/75 leading-relaxed">{item.descriptor}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Section 6: Beyond the Building */}
      <SectionWrapper background="white" className="py-20 md:py-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-6">
              Full Service
            </p>
            <h2 className="mb-6 text-[var(--color-graphite)]">Beyond the building</h2>
            <p className="lead text-[var(--color-graphite)]/80">
              We support hospitality clients through the full project lifecycle — from initial operator briefing and feasibility modelling, through planning and construction, to pre-opening commissioning.
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <ul className="space-y-3">
              {HOSP_BEYOND.map((item, i) => (
                <CheckItem key={i} text={item} />
              ))}
            </ul>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* Section 7: Related Insights */}
      <SectionWrapper background="stone" className="py-20 md:py-[120px]">
        <FadeIn>
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-4">
            Thinking
          </p>
          <h2 className="mb-10 text-[var(--color-graphite)]">Related insights</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HOSP_INSIGHTS.map((insight, i) => (
            <FadeIn key={i} delay={i * 100}>
              <InsightCard {...insight} />
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Section 8: CTA */}
      <CtaBand />
    </main>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   404 fallback
───────────────────────────────────────────────────────────────────────── */

function NotFoundSector({ id }: { id: string }) {
  return (
    <main className="flex-grow">
      <SectionWrapper className="min-h-[60vh] flex items-center py-20 md:py-[120px]">
        <div className="max-w-2xl">
          <BackLink />
          <h1 className="mb-6 text-[var(--color-graphite)]">Sector not found</h1>
          <p className="lead text-[var(--color-graphite)]/80 mb-8">
            There is no sector page for <span className="font-semibold">"{id}"</span>. Use the link above to return to all sectors.
          </p>
          <Button variant="primary" asChild>
            <Link href="/sector-expertise">View All Sectors</Link>
          </Button>
        </div>
      </SectionWrapper>
    </main>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Router
───────────────────────────────────────────────────────────────────────── */

export default function SectorDetail() {
  const [, params] = useRoute("/sector/:id");
  const id = params?.id ?? "";

  let content: React.ReactNode;
  switch (id) {
    case "education":
      content = <EducationPage />;
      break;
    case "commercial":
      content = <CommercialPage />;
      break;
    case "residential":
      content = <ResidentialPage />;
      break;
    case "hospitality":
      content = <HospitalityPage />;
      break;
    default:
      content = <NotFoundSector id={id} />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      {content}
      <Footer />
    </div>
  );
}
