import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { SectionWrapper } from "./SectionWrapper";
import { FadeIn } from "@/components/ui/fade-in";
import { DocumentMeta } from "./DocumentMeta";

interface LegalLayoutProps {
  title: string;
  description?: string;
  effectiveDate: string;
  children: ReactNode;
}

export function LegalLayout({ title, description, effectiveDate, children }: LegalLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <DocumentMeta title={title} description={description} />
      <Navigation />
      <main className="flex-grow">
        <SectionWrapper background="stone" className="pt-40 pb-16 md:pt-48 md:pb-20">
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="text-[var(--color-graphite)] mb-4">{title}</h1>
              <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-graphite)]/60">
                Effective Date: {effectiveDate}
              </p>
            </div>
          </FadeIn>
        </SectionWrapper>
        <SectionWrapper background="white" className="py-16 md:py-24">
          <FadeIn>
            <div className="max-w-3xl mx-auto space-y-6 text-[var(--color-graphite)]/80 leading-relaxed
              [&>h2]:font-heading [&>h2]:font-semibold [&>h2]:text-[var(--color-graphite)] [&>h2]:text-2xl [&>h2]:mt-14 [&>h2]:mb-6
              [&>h3]:font-heading [&>h3]:font-semibold [&>h3]:text-[var(--color-graphite)] [&>h3]:text-xl [&>h3]:mt-10 [&>h3]:mb-4
              [&>p]:mb-6
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-3 [&>ul>li>strong]:text-[var(--color-graphite)] [&>ul>li>strong]:font-semibold
              [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol>li]:mb-3
              [&_a]:text-[var(--color-gold)] [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-[var(--color-graphite)] [&_a]:transition-colors"
            >
              {children}
            </div>
          </FadeIn>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
