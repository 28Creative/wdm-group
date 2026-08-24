import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const documentHead = readFileSync(path.resolve(process.cwd(), "index.html"), "utf8");

describe("document branding", () => {
  it("references the WDM favicon for browser and touch icons", () => {
    expect(documentHead).toContain('<link rel="icon" type="image/svg+xml" href="/favicon.svg" />');
    expect(documentHead).toContain('<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />');
  });
});