import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ProcessStepProps {
  number: string;
  title: string;
  descriptor: string;
  icon: ReactNode;
  className?: string;
}

export function ProcessStep({
  number,
  title,
  descriptor,
  icon,
  className,
}: ProcessStepProps) {
  return (
    <div className={cn("flex flex-col gap-4 group", className)}>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center bg-[var(--color-stone)] rounded-none text-[var(--color-graphite)] group-hover:bg-[var(--color-yellow)] transition-colors">
          {icon}
        </div>
        <span className="font-heading font-bold text-[var(--color-graphite)]/30 text-3xl">{number}</span>
      </div>
      <div>
        <h4 className="font-heading font-semibold text-xl mb-2">{title}</h4>
        <p className="text-sm leading-relaxed text-[var(--color-graphite)]/80">{descriptor}</p>
      </div>
    </div>
  );
}
