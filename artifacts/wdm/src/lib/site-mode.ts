export type SiteMode = "coming-soon" | "live";

export function resolveSiteMode({
  isDevelopment,
  requestedMode,
}: {
  isDevelopment: boolean;
  requestedMode?: string;
}): SiteMode {
  return isDevelopment || requestedMode === "live" ? "live" : "coming-soon";
}

export const SITE_MODE: SiteMode = resolveSiteMode({
  isDevelopment: import.meta.env.DEV,
  requestedMode: import.meta.env.VITE_SITE_MODE,
});