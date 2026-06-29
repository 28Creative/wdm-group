import { Link } from "wouter";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SectorCardProps {
  imageSrc: string;
  title: string;
  descriptor: string;
  features: string[];
  ctaHref: string;
  className?: string;
}

export function SectorCard({
  imageSrc,
  title,
  descriptor,
  features,
  ctaHref,
  className,
}: SectorCardProps) {
  return (
    <div className={cn("flex flex-col lg:flex-row gap-8 lg:gap-16 items-center", className)}>
      <div className="w-full lg:w-1/2 overflow-hidden order-1 lg:order-none">
        <img
          src={imageSrc}
          alt={title}
          className="w-full aspect-[4/3] object-cover hover-image-zoom transition-transform duration-700"
        />
      </div>
      
      <div className="w-full lg:w-1/2 space-y-6">
        <h2 className="font-heading font-bold text-4xl">{title}</h2>
        <p className="lead text-[var(--color-graphite)]/80">{descriptor}</p>
        
        <ul className="space-y-3 mt-8 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 mt-0.5 text-[var(--color-gold)] shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button variant="primary" asChild>
          <Link href={ctaHref}>Explore Sector</Link>
        </Button>
      </div>
    </div>
  );
}
