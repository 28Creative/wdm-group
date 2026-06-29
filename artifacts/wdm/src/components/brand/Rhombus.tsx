import { SVGProps } from "react";
import { cn } from "@/lib/utils";

export function Rhombus({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-6 h-6", className)}
      {...props}
    >
      <path d="M15 0 L100 0 L85 100 L0 100 Z" />
    </svg>
  );
}
