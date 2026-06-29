import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "stone" | "graphite";
  id?: string;
}

export function SectionWrapper({ children, className, background = "white", id }: SectionWrapperProps) {
  const bgColors = {
    white: "bg-[var(--color-white)] text-[var(--color-graphite)]",
    stone: "bg-[var(--color-stone)] text-[var(--color-graphite)]",
    graphite: "bg-[var(--color-graphite)] text-[var(--color-white)]",
  };

  return (
    <section id={id} className={cn("w-full py-16 md:py-24", bgColors[background], className)}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-16">
        {children}
      </div>
    </section>
  );
}
