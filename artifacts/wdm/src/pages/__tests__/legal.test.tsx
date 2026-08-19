import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import PrivacyPolicy from "../privacy";
import CookiePolicy from "../cookies";
import TermsOfService from "../terms";

vi.mock("wouter", () => ({
  Link: ({ href, children, className }: any) => <a href={href} className={className}>{children}</a>,
  useLocation: () => ["/"],
}));

describe("Legal Pages", () => {
  describe("Privacy Policy", () => {
    it("renders heading and effective date", () => {
      render(<PrivacyPolicy />);
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Privacy Policy");
      expect(screen.getByText(/Effective Date: 19 August 2026/i)).toBeInTheDocument();
    });

    it("contains relevant contact email", () => {
      render(<PrivacyPolicy />);
      const emails = screen.getAllByText("Hello@wdm-group.co.uk");
      expect(emails.length).toBeGreaterThan(0);
    });
  });

  describe("Cookie Policy", () => {
    it("renders heading and effective date", () => {
      render(<CookiePolicy />);
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Cookie Policy");
      expect(screen.getByText(/Effective Date: 19 August 2026/i)).toBeInTheDocument();
    });

    it("states that the site does not intentionally set analytics cookies", () => {
      render(<CookiePolicy />);
      expect(screen.getByText(/does not intentionally set analytics/i)).toBeInTheDocument();
    });
  });

  describe("Terms of Service", () => {
    it("renders heading and effective date", () => {
      render(<TermsOfService />);
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Terms of Service");
      expect(screen.getByText(/Effective Date: 19 August 2026/i)).toBeInTheDocument();
    });

    it("includes company and VAT numbers", () => {
      render(<TermsOfService />);
      expect(screen.getAllByText(/16337075/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/490295766/i).length).toBeGreaterThan(0);
    });
  });

  it("does not use em dashes or en dashes in visible legal-page copy", () => {
    for (const Page of [PrivacyPolicy, CookiePolicy, TermsOfService]) {
      const { unmount } = render(<Page />);
      expect(document.body.textContent).not.toMatch(/[—–]/);
      unmount();
    }
  });
});
