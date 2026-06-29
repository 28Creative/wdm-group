import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InsightCardProps {
  imageSrc: string;
  category: string;
  title: string;
  summary: string;
  href: string;
  className?: string;
}

export function InsightCard({
  imageSrc,
  category,
  title,
  summary,
  href,
  className,
}: InsightCardProps) {
  return (
    <div className={cn("group flex flex-col h-full bg-[var(--color-stone)] border border-transparent hover:border-[var(--color-yellow)] transition-colors", className)}>
      <div className="overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full aspect-[16/9] object-cover hover-image-zoom transition-transform duration-500"
        />
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)] mb-3 block">
          {category}
        </span>
        <h3 className="font-heading font-bold text-2xl mb-4 group-hover:text-[var(--color-gold)] transition-colors">{title}</h3>
        <p className="text-sm leading-relaxed text-[var(--color-graphite)]/80 mb-8 flex-grow">{summary}</p>
        
        <Link href={href} className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider mt-auto w-fit hover:text-[var(--color-gold)] transition-colors">
          Read More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
