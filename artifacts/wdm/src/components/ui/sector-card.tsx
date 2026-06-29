import { Link } from "wouter";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SectorCardProps {
  imageSrc: string;
  title: string;
  descriptor: string;
  features?: string[];
  ctaHref: string;
  ctaLabel?: string;
  loading?: "lazy" | "eager";
  stacked?: boolean;
  className?: string;
}

export function SectorCard({
  imageSrc,
  title,
  descriptor,
  features = [],
  ctaHref,
  ctaLabel = "Explore Sector",
  loading = "lazy",
  stacked = false,
  className,
}: SectorCardProps) {
  return (
    <div className={cn(stacked ? "flex flex-col gap-6" : "flex flex-col lg:flex-row gap-8 lg:gap-16 items-center", className)}>
      <div className={cn("overflow-hidden", stacked ? "w-full" : "w-full lg:w-1/2 order-1 lg:order-none")}>
        <img
          src={imageSrc}
          alt={title}
          loading={loading}
          decoding="async"
          className="w-full aspect-[4/3] object-cover hover-image-zoom transition-transform duration-700"
        />
      </div>

      <div className={cn("space-y-4", stacked ? "w-full" : "w-full lg:w-1/2")}>
        <h3 className="font-heading font-bold text-2xl">{title}</h3>
        <p className="text-[var(--color-graphite)]/80 leading-relaxed">{descriptor}</p>

        {features.length > 0 && (
          <ul className="space-y-3 mt-4 mb-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5 text-[var(--color-gold)] shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <Button variant="primary" asChild>
          <Link href={ctaHref}>{ctaLabel}</Link>
        </Button>
      </div>
    </div>
  );
}
