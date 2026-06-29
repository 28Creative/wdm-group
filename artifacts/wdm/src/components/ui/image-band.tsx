import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ImageBandProps {
  imageSrc: string;
  imageAlt?: string;
  className?: string;
  children?: ReactNode;
}

export function ImageBand({ imageSrc, imageAlt = "", className, children }: ImageBandProps) {
  return (
    <div className={cn("relative w-full h-[60vh] min-h-[400px] overflow-hidden group", className)}>
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover hover-image-zoom transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/50" />
      
      {children && (
        <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12">
          <div className="max-w-[1280px] w-full mx-auto relative z-10 text-center md:text-left">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
