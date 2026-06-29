import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { useRoute } from "wouter";

export default function SectorDetail() {
  const [match, params] = useRoute("/sector/:id");
  const sectorName = params?.id ? params.id.charAt(0).toUpperCase() + params.id.slice(1) : "Sector";

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow pt-24">
        <SectionWrapper className="min-h-[60vh] flex items-center">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-[var(--color-graphite)]">{sectorName} Expertise</h1>
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
