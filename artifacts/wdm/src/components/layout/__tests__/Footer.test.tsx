import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Footer } from "../Footer";

vi.mock("wouter", () => ({
  Link: ({ href, children, className }: any) => <a href={href} className={className}>{children}</a>,
}));

describe("Footer", () => {
  it("renders correct contact email", () => {
    render(<Footer />);
    const emailLink = screen.getByRole("link", { name: /hello@wdm-group\.co\.uk/i });
    expect(emailLink).toHaveAttribute("href", "mailto:hello@wdm-group.co.uk");
  });

  it("renders legal links", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /privacy policy/i })).toHaveAttribute("href", "/privacy");
    expect(screen.getByRole("link", { name: /cookie policy/i })).toHaveAttribute("href", "/cookies");
    expect(screen.getByRole("link", { name: /terms of service/i })).toHaveAttribute("href", "/terms");
  });

  it("renders the official RIBA Chartered Practice logo", () => {
    render(<Footer />);
    const ribaLogo = screen.getByRole("img", { name: "RIBA Chartered Practice" });

    expect(ribaLogo).toHaveAttribute("src", "/images/riba-chartered-practice.png");
    expect(screen.queryByText("RIBA Chartered Practice")).not.toBeInTheDocument();
  });
});
