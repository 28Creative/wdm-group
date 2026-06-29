import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TeamCardProps {
  imageSrc: string;
  name: string;
  role: string;
  bioExcerpt: string;
  onViewProfile?: () => void;
  ctaLabel?: string;
  loading?: "lazy" | "eager";
  className?: string;
}

export function TeamCard({
  imageSrc,
  name,
  role,
  bioExcerpt,
  onViewProfile,
  ctaLabel = "View Profile",
  loading = "lazy",
  className,
}: TeamCardProps) {
  return (
    <div className={cn("group flex flex-col", className)}>
      <div className="overflow-hidden mb-6 bg-[var(--color-stone)] aspect-[3/4]">
        <img
          src={imageSrc}
          alt={name}
          loading={loading}
          decoding="async"
          className="w-full h-full object-cover grayscale-transition"
        />
      </div>
      <div>
        <h4 className="font-heading font-semibold text-xl mb-1">{name}</h4>
        <p className="text-sm uppercase tracking-wider text-[var(--color-graphite)]/60 mb-4">{role}</p>
        <p className="text-sm leading-relaxed mb-6 line-clamp-3">{bioExcerpt}</p>
        
        {onViewProfile && (
          <Button variant="ghost" onClick={onViewProfile} className="w-full justify-start px-0 border-none hover:bg-transparent hover:text-[var(--color-gold)] text-[var(--color-graphite)] transition-colors">
            {ctaLabel}
          </Button>
        )}
      </div>
    </div>
  );
}
