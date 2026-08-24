export type SiteMode = "coming-soon" | "live";

export const SITE_MODE: SiteMode =
  import.meta.env.VITE_SITE_MODE === "live" ? "live" : "coming-soon";