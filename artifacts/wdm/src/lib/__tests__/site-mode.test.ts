import { describe, expect, it } from "vitest";
import { resolveSiteMode } from "@/lib/site-mode";

describe("resolveSiteMode", () => {
  it("uses the full site in the development Preview by default", () => {
    expect(resolveSiteMode({ isDevelopment: true })).toBe("live");
  });

  it("keeps production builds on the coming-soon page by default", () => {
    expect(resolveSiteMode({ isDevelopment: false })).toBe("coming-soon");
  });

  it("allows an explicit live production build", () => {
    expect(resolveSiteMode({ isDevelopment: false, requestedMode: "live" })).toBe("live");
  });

  it("does not let a coming-soon override hide the development Preview", () => {
    expect(
      resolveSiteMode({ isDevelopment: true, requestedMode: "coming-soon" }),
    ).toBe("live");
  });
});