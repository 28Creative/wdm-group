import { ReactNode } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CardProps {
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  body: string;
  ctaText?: string;
  ctaHref?: string;
  useRhombusClip?: boolean;
  loading?: "lazy" | "eager";
  className?: string;
}

export function Card({
  imageSrc,
  imageAlt = "",
  title,
  body,
  ctaText,
  ctaHref,
  useRhombusClip,
  loading = "lazy",
  className,
}: CardProps) {
  return (
    <div className={cn("group flex flex-col h-full bg-[var(--color-white)]", className)}>
      {imageSrc && (
        <div className="overflow-hidden mb-6">
          <img
            src={imageSrc}
            alt={imageAlt}
            loading={loading}
            decoding="async"
            className={cn(
              "w-full h-64 object-cover hover-image-zoom transition-transform duration-500 ease-out",
              useRhombusClip && "clip-path-rhombus"
            )}
          />
        </div>
      )}
      <div className="flex flex-col flex-grow px-2">
        <h3 className="font-heading font-semibold text-2xl mb-3 text-[var(--color-graphite)]">{title}</h3>
        <p className="body text-[var(--color-graphite)]/80 mb-6 flex-grow">{body}</p>
        
        {ctaHref && ctaText && (
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 font-medium text-[var(--color-gold)] hover:text-[var(--color-graphite)] transition-colors mt-auto w-fit"
          >
            {ctaText} <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
