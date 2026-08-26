import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AppContent } from "@/App";

describe("Coming soon mode", () => {
  it("gates the public experience and shows the holding-page content", () => {
    const { unmount } = render(<AppContent siteMode="coming-soon" />);

    expect(screen.getByRole("heading", { level: 1, name: "Welcome." })).toBeInTheDocument();
    expect(screen.getByText(/We're designing this digital space/)).toBeInTheDocument();
    expect(screen.getByText("© 2026 Why Design Matters")).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "About" })).not.toBeInTheDocument();
    expect(document.title).toBe("Welcome | Why Design Matters");
    expect(document.querySelector('meta[name="robots"]')).toHaveAttribute(
      "content",
      "noindex, nofollow",
    );

    unmount();
  });

  it("keeps the existing site available when live mode is selected", () => {
    const { unmount } = render(<AppContent siteMode="live" />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Design matters because places shape people.",
      }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("heading", { level: 1, name: "Welcome." })).not.toBeInTheDocument();

    unmount();
  });

  it("provides the approved social destinations", () => {
    render(<AppContent siteMode="coming-soon" />);

    expect(screen.getByRole("link", { name: "Connect with Simon on LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/simon-jesson-623b5024/",
    );
    expect(screen.getByRole("link", { name: "Connect with Martin on LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/martin-beaumont-4216a24b/",
    );
    expect(
      screen.getByRole("link", { name: "Connect with Parminder on LinkedIn" }),
    ).toHaveAttribute("href", "https://www.linkedin.com/in/parminder-degan-1b3bbb16/");
    expect(screen.getByRole("link", { name: "Follow WDM on LinkedIn" })).toHaveAttribute(
      "href",
      "https://uk.linkedin.com/company/wdm-group-ltd",
    );
  });
});