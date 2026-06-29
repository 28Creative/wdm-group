import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

export default function SectorExpertise() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow pt-24">
        <SectionWrapper className="min-h-[60vh] flex items-center">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-[var(--color-graphite)]">Sector Expertise</h1>
            <p className="lead text-[var(--color-graphite)]/80">
              Page stub. Content to be populated in future phases.
            </p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
