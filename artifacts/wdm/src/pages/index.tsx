import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/card-custom";
import { ImageBand } from "@/components/ui/image-band";
import { TeamCard } from "@/components/ui/team-card";
import { SectorCard } from "@/components/ui/sector-card";
import { ProcessStep } from "@/components/ui/process-step";
import { InsightCard } from "@/components/ui/insight-card";
import { Button } from "@/components/ui/button";
import { Rhombus } from "@/components/brand/Rhombus";
import { FadeIn } from "@/components/ui/fade-in";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { PencilRuler } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow pt-24">
        <SectionWrapper background="graphite">
          <FadeIn>
            <div className="py-20 md:py-32 max-w-4xl">
              <Rhombus className="text-[var(--color-yellow)] w-12 h-12 mb-8" />
              <h1 className="text-[var(--color-white)] mb-6">Design System & Component Library</h1>
              <p className="lead text-[var(--color-stone)]">
                Foundation phase for Why Design Matters (WDM). A preview of the typographic hierarchy, color palette, and reusable architectural components.
              </p>
            </div>
          </FadeIn>
        </SectionWrapper>

        <SectionWrapper background="white">
          <FadeIn>
            <div className="mb-16">
              <h2 className="mb-4">Colors & Typography</h2>
              <div className="w-20 h-1 bg-[var(--color-yellow)] mb-12"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
              <div>
                <h4 className="mb-6 border-b pb-2">Color Palette</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4"><div className="w-16 h-16 bg-[var(--color-graphite)] border"></div><div className="font-mono text-sm">--color-graphite</div></div>
                  <div className="flex items-center gap-4"><div className="w-16 h-16 bg-[var(--color-stone)] border"></div><div className="font-mono text-sm">--color-stone</div></div>
                  <div className="flex items-center gap-4"><div className="w-16 h-16 bg-[var(--color-yellow)] border"></div><div className="font-mono text-sm">--color-yellow</div></div>
                  <div className="flex items-center gap-4"><div className="w-16 h-16 bg-[var(--color-gold)] border"></div><div className="font-mono text-sm">--color-gold</div></div>
                </div>
              </div>
              
              <div>
                <h4 className="mb-6 border-b pb-2">Typography</h4>
                <div className="space-y-6">
                  <div><h1 className="text-4xl">Heading 1</h1><span className="font-mono text-xs text-gray-500">Montserrat Bold</span></div>
                  <div><h2 className="text-3xl">Heading 2</h2><span className="font-mono text-xs text-gray-500">Montserrat SemiBold</span></div>
                  <div><h3 className="text-2xl">Heading 3</h3><span className="font-mono text-xs text-gray-500">Montserrat SemiBold</span></div>
                  <div><p className="lead">Lead paragraph text. Roboto Regular 18px. Because architecture is fundamentally about the human impact of the spaces we inhabit.</p></div>
                  <div><p className="body">Body paragraph text. Roboto Regular 16px. We care about precise grids, generous whitespace, strong typographic hierarchy, and the restrained use of our signature yellow.</p></div>
                </div>
              </div>
            </div>
          </FadeIn>
        </SectionWrapper>

        <SectionWrapper background="stone">
          <FadeIn>
            <div className="mb-16">
              <h2 className="mb-4">Buttons</h2>
              <div className="w-20 h-1 bg-[var(--color-yellow)] mb-12"></div>
            </div>
            <div className="flex flex-wrap gap-6">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="ghost">Ghost Button</Button>
            </div>
          </FadeIn>
        </SectionWrapper>

        <SectionWrapper background="white">
          <FadeIn>
            <div className="mb-16">
              <h2 className="mb-4">Cards & Teasers</h2>
              <div className="w-20 h-1 bg-[var(--color-yellow)] mb-12"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card 
                imageSrc="/images/architecture-1.png"
                title="The Modern Library"
                body="An exploration of light and space in educational environments, focusing on the intersection of public gathering and quiet contemplation."
                ctaText="View Project"
                ctaHref="/projects"
              />
              <Card 
                imageSrc="/images/interior-1.png"
                title="Calm Interiors"
                body="Creating restorative spaces through intentional material selection and restrained detailing. A masterclass in acoustic dampening."
                ctaText="Read Case Study"
                ctaHref="/projects"
                useRhombusClip={true}
              />
              <InsightCard 
                imageSrc="/images/architecture-1.png"
                category="Design Thinking"
                title="Why Materials Matter"
                summary="A deep dive into our material selection process and how tactile experiences shape our perception of architectural volumes."
                href="/insights"
              />
            </div>
          </FadeIn>
        </SectionWrapper>

        <ImageBand imageSrc="/images/architecture-1.png">
          <FadeIn>
            <h2 className="text-[var(--color-white)] mb-6 max-w-2xl">Architecture that elevates the human experience.</h2>
            <Button variant="primary">Discover Our Approach</Button>
          </FadeIn>
        </ImageBand>

        <SectionWrapper background="stone">
          <FadeIn>
            <div className="mb-16">
              <h2 className="mb-4">Sector Profile</h2>
              <div className="w-20 h-1 bg-[var(--color-yellow)] mb-12"></div>
            </div>
            
            <SectorCard 
              imageSrc="/images/interior-1.png"
              title="Educational Spaces"
              descriptor="We design learning environments that foster curiosity, collaboration, and academic excellence through intentional spatial planning."
              features={[
                "Higher Education Facilities",
                "Research Laboratories",
                "Primary & Secondary Schools",
                "Campus Masterplanning"
              ]}
              ctaHref="/sector/education"
            />
          </FadeIn>
        </SectionWrapper>

        <SectionWrapper background="white">
          <FadeIn>
            <div className="mb-16">
              <h2 className="mb-4">Process & Team</h2>
              <div className="w-20 h-1 bg-[var(--color-yellow)] mb-12"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <ProcessStep 
                  number="01"
                  title="Contextual Analysis"
                  descriptor="Rigorous investigation of site, climate, history, and community needs before a single line is drawn."
                  icon={<PencilRuler className="w-6 h-6" />}
                />
                <ProcessStep 
                  number="02"
                  title="Conceptual Framework"
                  descriptor="Developing a strong, narrative-driven design concept that serves as the guiding principle for all subsequent decisions."
                  icon={<PencilRuler className="w-6 h-6" />}
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer">
                      <TeamCard 
                        imageSrc="/images/team-1.png"
                        name="James Sterling"
                        role="Founding Partner"
                        bioExcerpt="With over 25 years of experience in high-end commercial architecture."
                        onViewProfile={() => {}}
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl bg-[var(--color-white)] text-[var(--color-graphite)] rounded-none">
                    <DialogHeader>
                      <DialogTitle className="font-heading text-2xl font-bold">James Sterling</DialogTitle>
                      <DialogDescription className="text-sm uppercase tracking-wider text-[var(--color-graphite)]/60">
                        Founding Partner
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col md:flex-row gap-8 mt-6">
                      <img src="/images/team-1.png" alt="James Sterling" loading="lazy" decoding="async" className="w-full md:w-1/3 aspect-[3/4] object-cover grayscale-transition" />
                      <div className="w-full md:w-2/3 space-y-4 body">
                        <p>James founded WDM with a singular vision: to create architecture that fundamentally respects and elevates the human experience.</p>
                        <p>His award-winning work spans three continents, focusing primarily on civic and educational institutions where public gathering spaces are critical.</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer">
                      <TeamCard 
                        imageSrc="/images/team-2.png"
                        name="Elena Rostova"
                        role="Design Director"
                        bioExcerpt="Specializing in sustainable materials and restorative interior environments."
                        onViewProfile={() => {}}
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl bg-[var(--color-white)] text-[var(--color-graphite)] rounded-none">
                    <DialogHeader>
                      <DialogTitle className="font-heading text-2xl font-bold">Elena Rostova</DialogTitle>
                      <DialogDescription className="text-sm uppercase tracking-wider text-[var(--color-graphite)]/60">
                        Design Director
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col md:flex-row gap-8 mt-6">
                      <img src="/images/team-2.png" alt="Elena Rostova" loading="lazy" decoding="async" className="w-full md:w-1/3 aspect-[3/4] object-cover grayscale-transition" />
                      <div className="w-full md:w-2/3 space-y-4 body">
                        <p>Elena's meticulous approach to detailing and material selection defines the WDM interior aesthetic.</p>
                        <p>She leads the studio's research into acoustic properties of natural materials and their psychological impact on users.</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </FadeIn>
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}
