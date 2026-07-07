import { useState } from "react";
import { Link } from "wouter";
import { Check, ChevronDown, Ear, Lightbulb, PenLine, Truck, RefreshCw } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { ProcessStep } from "@/components/ui/process-step";
import { Rhombus } from "@/components/brand/Rhombus";

const RIBA_STAGES = [
  { number: 0, name: "Strategic Definition" },
  { number: 1, name: "Preparation & Briefing" },
  { number: 2, name: "Concept Design" },
  { number: 3, name: "Spatial Coordination" },
  { number: 4, name: "Technical Design" },
  { number: 5, name: "Manufacturing & Construction" },
  { number: 6, name: "Handover" },
  { number: 7, name: "Use" },
];

const SERVICES = [
  {
    id: "architecture",
    imageLeft: true,
    imageSrc: "/images/service-architecture.png",
    imageAlt: "Architecture and design project",
    label: "Architecture & Design",
    title: "From concept to completion — architecture that works.",
    body: "Our architecture and design service covers the full journey from initial concept through to completed building. We bring together spatial thinking, technical expertise and an understanding of how people use space to create environments that are inspiring, practical and built to last.",
    checklist: [
      "Full RIBA stage delivery",
      "Concept and schematic design",
      "Detailed technical design",
      "Specification and procurement support",
      "Construction monitoring and contract administration",
      "Post-occupancy review",
    ],
    closingLine: "Every line we draw begins with a question: will this work for the people who use it?",
  },
  {
    id: "feasibility",
    imageLeft: false,
    imageSrc: "/images/service-feasibility.png",
    imageAlt: "Feasibility study and site appraisal",
    label: "Feasibility & Development Insight",
    title: "Understanding what's possible before committing to what's next.",
    body: "Before committing to a project, organisations and developers need confidence that their ambitions are achievable. Our feasibility work explores what a site or brief can realistically deliver — testing assumptions, identifying constraints and revealing opportunities that may not be immediately obvious.",
    checklist: [
      "Site appraisal and capacity studies",
      "Use and massing options",
      "Planning risk assessment",
      "Development viability input",
      "Programme and phasing advice",
      "Brief development and refinement",
    ],
    closingLine: "Good feasibility work doesn't just test whether something is possible. It shapes what becomes possible.",
  },
  {
    id: "planning",
    imageLeft: true,
    imageSrc: "/images/service-planning.png",
    imageAlt: "Planning application and project navigation",
    label: "Planning & Project Navigation",
    title: "Navigating complexity with clarity and confidence.",
    body: "Planning is one of the most complex and consequential stages of any project. We guide clients through the process with clarity — managing applications, coordinating consultants and communicating with planning authorities to keep projects moving and ambitions intact.",
    checklist: [
      "Pre-application engagement",
      "Planning application preparation and submission",
      "Design and access statements",
      "Listed building and conservation area applications",
      "Consultant coordination",
      "Appeal support where required",
    ],
    closingLine: "We don't just submit applications. We build the case for great design.",
  },
  {
    id: "sustainable",
    imageLeft: false,
    imageSrc: "/images/service-sustainable.png",
    imageAlt: "Sustainable and responsible design",
    label: "Sustainable & Responsible Design",
    title: "Design that considers its impact — on people, place and planet.",
    body: "Sustainability is not a feature to be added at the end of a project. It is a principle that should shape every decision from the earliest stages. We integrate environmental thinking into our design process — considering energy, materials, ecology and long-term performance alongside function, form and experience.",
    checklist: [
      "Passive design strategies",
      "Natural light and ventilation",
      "Biophilic design principles",
      "Material selection and embodied carbon",
      "Energy performance and compliance",
      "Ecology and landscape integration",
    ],
    closingLine: "The most sustainable building is one that people love enough to look after.",
  },
];

const CREDENTIALS = {
  professional: [
    "RIBA Chartered Practice",
    "ARB Registered Architects",
    "Martin Beaumont RIBA",
    "Simon Jesson RIBA",
    "Parminder Degan RIBA",
    "RIBA Plan of Work practitioners",
    "Professional indemnity insured",
  ],
  sectors: [
    "Education",
    "Commercial & Workplace",
    "Residential",
    "Hospitality",
    "Community & Public Realm",
    "Mixed-use Development",
  ],
};

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Listen",
    descriptor: "We start by understanding — your organisation, your users, your ambitions and your constraints.",
    icon: <Ear className="w-5 h-5" />,
  },
  {
    number: "02",
    title: "Explore",
    descriptor: "We test ideas, challenge assumptions and explore what's genuinely possible within your context.",
    icon: <Lightbulb className="w-5 h-5" />,
  },
  {
    number: "03",
    title: "Design",
    descriptor: "We develop a design that is creative, considered and grounded in everything we've learned.",
    icon: <PenLine className="w-5 h-5" />,
  },
  {
    number: "04",
    title: "Deliver",
    descriptor: "We guide the project through planning, procurement and construction with clarity and care.",
    icon: <Truck className="w-5 h-5" />,
  },
  {
    number: "05",
    title: "Evolve",
    descriptor: "We review how the completed space performs and remain available as your needs change over time.",
    icon: <RefreshCw className="w-5 h-5" />,
  },
];

const FAQ_ITEMS = [
  {
    question: "Do I need an architect?",
    answer: "Not every project legally requires one — but most benefit from one. An architect brings design thinking, technical knowledge and project management together in a way that typically adds more value than it costs. We're happy to have an honest conversation about whether appointment is right for your project.",
  },
  {
    question: "How much does an architect cost?",
    answer: "Fees vary depending on the scope, scale and complexity of the project. We typically work on a percentage of construction cost for full-service appointments, or a fixed fee for defined pieces of work such as feasibility studies or planning applications. We're transparent about fees from the first conversation.",
  },
  {
    question: "How long does the process take?",
    answer: "It depends on the project. A straightforward planning application might take three to six months. A larger project from initial briefing to completion could take two to four years. We'll give you a realistic programme from the outset and keep you informed as it evolves.",
  },
  {
    question: "What is the RIBA Plan of Work?",
    answer: "The RIBA Plan of Work is the industry-standard framework for organising and managing the design and construction process. It runs from Stage 0 (Strategic Definition) through to Stage 7 (Use). It gives clients a clear map of the journey ahead and helps everyone understand what decisions need to be made and when.",
  },
  {
    question: "Do you handle planning applications?",
    answer: "Yes. Planning is a core part of our service. We prepare and submit applications, write design and access statements, engage with planning officers and coordinate with any specialist consultants required. We also support clients through appeals where necessary.",
  },
  {
    question: "Can you help if I already have planning permission?",
    answer: "Yes. Some clients come to us after planning has been granted — perhaps to develop the technical design, manage the tender process or administer the construction contract. We're happy to join a project at whatever stage makes sense.",
  },
  {
    question: "Do you work with residential clients?",
    answer: "Yes. We work across residential, commercial, education and hospitality sectors. Whether you're extending your home, developing a site or creating a new building, we bring the same thoughtful, listening-led approach to every project.",
  },
  {
    question: "What areas do you cover?",
    answer: "Our studio is based in Lichfield, Staffordshire, and we work across the Midlands and beyond. We're happy to discuss projects further afield where the fit is right.",
  },
  {
    question: "How do I get started?",
    answer: "The simplest way is to get in touch and tell us what you're working on. We'll have an initial conversation — no obligation, no jargon — to understand your project and whether we're the right fit. From there we can outline next steps and how we might work together.",
  },
];

export default function WhatWeDo() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-grow">

        {/* ── Section 1: Hero ───────────────────────────────────────── */}
        <section className="relative h-screen min-h-[640px] bg-[var(--color-graphite)] flex items-center overflow-hidden">
          <img
            src="/images/wwd-hero.png"
            alt=""
            loading="eager"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-graphite)]/70" />
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
                Creating places that perform for people.
              </h1>
              <p className="lead text-[var(--color-stone)] mb-10 max-w-2xl hero-fade-3">
                Architecture is more than buildings. It is about understanding what people need from a place — and designing environments that deliver it.
              </p>
              <div className="hero-fade-4 flex flex-wrap gap-4 items-center sm:items-start">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/contact">Start a Conversation</Link>
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  asChild
                  className="border-[var(--color-white)] text-[var(--color-white)] hover:bg-[var(--color-white)] hover:text-[var(--color-graphite)]"
                >
                  <Link href="/sector-expertise">Explore Our Sectors</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2: More Than Architecture ────────────────────── */}
        <SectionWrapper background="white" className="py-20 md:py-[120px]">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)] mb-6">
                  Our Approach
                </p>
                <p className="lead leading-relaxed text-[var(--color-graphite)]">
                  Architecture is often understood as the design of buildings. At Why Design Matters, we see it differently. Our role is to understand what a place needs to achieve — for the people who use it, the organisation that runs it, and the community it serves — and to create environments that deliver on that purpose with clarity, creativity and confidence.
                </p>
              </div>
              <div className="leading-relaxed text-[var(--color-graphite)]/80">
                <p>
                  Every project begins with questions. What is this place for? Who will use it? What does success look like in five years? What constraints exist and how can they become opportunities? The answers shape a design process that is grounded in evidence, guided by empathy and delivered with technical precision.
                </p>
              </div>
            </div>
          </FadeIn>
        </SectionWrapper>

        {/* ── Section 3: RIBA Plan of Work ─────────────────────────── */}
        <SectionWrapper background="stone" className="py-20 md:py-[120px]">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

              {/* Left: RIBA Stage Timeline */}
              <div>
                <div className="relative">
                  {RIBA_STAGES.map((stage, idx) => (
                    <div key={stage.number} className="flex items-start gap-5">
                      {/* Connector column */}
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-9 h-9 rounded-full bg-[var(--color-graphite)] flex items-center justify-center text-[var(--color-white)] text-xs font-bold font-heading z-10">
                          {stage.number}
                        </div>
                        {idx < RIBA_STAGES.length - 1 && (
                          <div className="w-0.5 h-8 bg-[var(--color-yellow)] my-1" />
                        )}
                      </div>
                      {/* Stage name */}
                      <div className="pt-1.5 pb-8">
                        <p className="font-heading font-semibold text-sm text-[var(--color-graphite)]">
                          {stage.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Explanation */}
              <div className="space-y-6">
                <h2 className="font-heading font-semibold text-[var(--color-graphite)]">
                  How We Work Through a Project
                </h2>
                <p className="leading-relaxed text-[var(--color-graphite)]/80">
                  We follow the RIBA Plan of Work — the industry-standard framework for delivering architecture projects. It gives our clients a clear understanding of what happens at each stage, what decisions need to be made, and what to expect as the project progresses.
                </p>
                <div className="flex flex-col gap-3 pt-2">
                  <a
                    href="#"
                    className="text-sm font-medium text-[var(--color-graphite)] underline underline-offset-4 hover:text-[var(--color-gold)] transition-colors"
                  >
                    Explore our guide to the RIBA Plan of Work
                  </a>
                  <a
                    href="#faq"
                    className="text-sm font-medium text-[var(--color-graphite)] underline underline-offset-4 hover:text-[var(--color-gold)] transition-colors"
                  >
                    View our FAQs
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </SectionWrapper>

        {/* ── Section 4: Services (Four Alternating Blocks) ────────── */}
        <SectionWrapper background="white" className="py-20 md:py-[120px]">
          <div className="space-y-24 md:space-y-32">
            {SERVICES.map((service) => (
              <FadeIn key={service.id}>
                <div
                  className={`flex flex-col gap-10 lg:gap-16 lg:items-center ${
                    service.imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Image — always first in DOM for mobile (image above text) */}
                  <div className="w-full lg:w-1/2 overflow-hidden">
                    <img
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-[4/3] object-cover hover-image-zoom transition-transform duration-700"
                    />
                  </div>

                  {/* Text */}
                  <div className="w-full lg:w-1/2 space-y-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">
                      {service.label}
                    </p>
                    <h3 className="font-heading font-semibold text-[var(--color-graphite)]">
                      {service.title}
                    </h3>
                    <p className="leading-relaxed text-[var(--color-graphite)]/80">
                      {service.body}
                    </p>
                    <ul className="space-y-3 pt-2">
                      {service.checklist.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check
                            className="w-5 h-5 mt-0.5 text-[var(--color-gold)] shrink-0"
                            aria-hidden="true"
                          />
                          <span className="text-sm text-[var(--color-graphite)]">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="italic text-sm text-[var(--color-graphite)]/60 pt-2">
                      {service.closingLine}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </SectionWrapper>

        {/* ── Section 5: Credentials Strip ─────────────────────────── */}
        <SectionWrapper background="stone" className="py-20 md:py-[120px]">
          <FadeIn>
            <div className="max-w-[960px] mx-auto">
              <h2 className="font-heading font-semibold text-[var(--color-graphite)] mb-4">
                Expertise You Can Trust.
              </h2>
              <p className="lead leading-relaxed text-[var(--color-graphite)]/80 mb-12 max-w-2xl">
                Our work is underpinned by professional accreditation, sector experience and a track record of delivering projects that perform.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-heading font-semibold text-[var(--color-graphite)] mb-6">
                    Professional Credentials
                  </h4>
                  <ul className="space-y-3">
                    {CREDENTIALS.professional.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check
                          className="w-5 h-5 mt-0.5 text-[var(--color-gold)] shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-[var(--color-graphite)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-[var(--color-graphite)] mb-6">
                    Sectors We Serve
                  </h4>
                  <ul className="space-y-3">
                    {CREDENTIALS.sectors.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check
                          className="w-5 h-5 mt-0.5 text-[var(--color-gold)] shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-[var(--color-graphite)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </SectionWrapper>

        {/* ── Section 6: How We Work Process Bar ───────────────────── */}
        <SectionWrapper background="white" className="py-20 md:py-[120px]">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-heading font-semibold text-[var(--color-graphite)] mb-4">
                How We Work
              </h2>
              <p className="lead text-[var(--color-graphite)]/80 max-w-2xl mx-auto">
                Every project is different. Our process is designed to adapt — while keeping people, purpose and place at the centre of every decision.
              </p>
            </div>

            {/* Desktop: horizontal with connector line */}
            <div className="hidden lg:block relative">
              {/* Connecting yellow line */}
              <div className="absolute top-6 left-[calc(10%+24px)] right-[calc(10%+24px)] h-0.5 bg-[var(--color-yellow)]" />
              <div className="grid grid-cols-5 gap-6">
                {PROCESS_STEPS.map((step) => (
                  <ProcessStep
                    key={step.number}
                    number={step.number}
                    title={step.title}
                    descriptor={step.descriptor}
                    icon={step.icon}
                  />
                ))}
              </div>
            </div>

            {/* Mobile: vertical stack */}
            <div className="lg:hidden relative pl-6">
              <div className="absolute top-6 left-[29px] bottom-6 w-0.5 bg-[var(--color-yellow)]" />
              <div className="space-y-10">
                {PROCESS_STEPS.map((step) => (
                  <ProcessStep
                    key={step.number}
                    number={step.number}
                    title={step.title}
                    descriptor={step.descriptor}
                    icon={step.icon}
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        </SectionWrapper>

        {/* ── Section 7: CTA Band ───────────────────────────────────── */}
        <section className="relative w-full py-20 md:py-[120px] bg-[var(--color-graphite)] overflow-hidden">
          <Rhombus
            aria-hidden="true"
            className="absolute -right-12 top-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] text-[var(--color-yellow)] opacity-[0.06] pointer-events-none"
          />
          <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12 lg:px-16 text-center">
            <FadeIn>
              <h2 className="text-[var(--color-white)] font-heading font-semibold mb-6">
                Creative Thinking. Technical Expertise. Trusted Delivery.
              </h2>
              <p className="lead text-[var(--color-stone)] mb-10 max-w-2xl mx-auto">
                Whatever stage your project is at — from early idea to planning application — we're ready to listen and help you move forward with confidence.
              </p>
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact">Start a Conversation</Link>
              </Button>
            </FadeIn>
          </div>
        </section>

        {/* ── Section 8: FAQ Accordion ──────────────────────────────── */}
        <SectionWrapper background="stone" className="py-20 md:py-[120px]" id="faq">
          <FadeIn>
            <div className="max-w-[800px] mx-auto">
              <h2 className="font-heading font-semibold text-[var(--color-graphite)] mb-4">
                Frequently Asked Questions.
              </h2>
              <p className="lead text-[var(--color-graphite)]/80 mb-12">
                Some of the questions we're asked most often — answered honestly.
              </p>

              <div className="space-y-0 border-t border-[var(--color-graphite)]/20">
                {FAQ_ITEMS.map((item, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="border-b border-[var(--color-graphite)]/20"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                        aria-expanded={isOpen}
                      >
                        <span className="font-heading font-semibold text-base text-[var(--color-graphite)] group-hover:text-[var(--color-gold)] transition-colors">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 shrink-0 text-[var(--color-gold)] transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                      {isOpen && (
                        <div className="pb-6 text-sm leading-relaxed text-[var(--color-graphite)]/80">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </SectionWrapper>

      </main>

      <Footer />
    </div>
  );
}
