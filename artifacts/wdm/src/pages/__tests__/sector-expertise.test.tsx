import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import SectorExpertise from "../sector-expertise"

vi.mock("wouter", () => ({
  Link: ({ href, children, className }: {
    href: string
    children: React.ReactNode
    className?: string
  }) => <a href={href} className={className}>{children}</a>,
  useLocation: () => ["/sector-expertise"],
}))

describe("Sector Expertise hub — smoke render", () => {
  it("mounts without throwing", () => {
    expect(() => render(<SectorExpertise />)).not.toThrow()
  })

  it("renders the page heading", () => {
    render(<SectorExpertise />)
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Sector Expertise")
  })

  it("renders the Navigation component", () => {
    render(<SectorExpertise />)
    expect(screen.getByRole("img", { name: "Why Design Matters" })).toBeInTheDocument()
  })

  it("renders the Footer component", () => {
    render(<SectorExpertise />)
    expect(screen.getByRole("contentinfo")).toBeInTheDocument()
  })

  it("has a main content area", () => {
    render(<SectorExpertise />)
    expect(screen.getByRole("main")).toBeInTheDocument()
  })
})

describe("Sector Expertise hub — sector cards", () => {
  it("renders all four sector headings", () => {
    render(<SectorExpertise />)
    expect(screen.getByText("Education & Learning")).toBeInTheDocument()
    expect(screen.getByText("Commercial & Workplace")).toBeInTheDocument()
    expect(screen.getByText("Residential")).toBeInTheDocument()
    expect(screen.getByText("Hospitality & Leisure")).toBeInTheDocument()
  })

  it("renders the Community card", () => {
    render(<SectorExpertise />)
    expect(screen.getByText("Community & Public Spaces")).toBeInTheDocument()
  })

  it("Education card links to /sector/education", () => {
    render(<SectorExpertise />)
    const link = screen.getByRole("link", { name: /explore education/i })
    expect(link).toHaveAttribute("href", "/sector/education")
  })

  it("Commercial card links to /sector/commercial", () => {
    render(<SectorExpertise />)
    const link = screen.getByRole("link", { name: /explore commercial/i })
    expect(link).toHaveAttribute("href", "/sector/commercial")
  })

  it("Residential card links to /sector/residential", () => {
    render(<SectorExpertise />)
    const link = screen.getByRole("link", { name: /explore residential/i })
    expect(link).toHaveAttribute("href", "/sector/residential")
  })

  it("Hospitality card links to /sector/hospitality", () => {
    render(<SectorExpertise />)
    const link = screen.getByRole("link", { name: /explore hospitality/i })
    expect(link).toHaveAttribute("href", "/sector/hospitality")
  })

  it("Community card links to /contact", () => {
    render(<SectorExpertise />)
    const links = screen.getAllByRole("link", { name: /start a conversation/i })
    expect(links.length).toBeGreaterThanOrEqual(1)
    expect(links.every((l) => l.getAttribute("href") === "/contact")).toBe(true)
  })
})

describe("Sector Expertise hub — CTA band", () => {
  it("renders CTA band with link to /contact", () => {
    render(<SectorExpertise />)
    const ctaLinks = screen.getAllByRole("link", { name: /start a conversation/i })
    expect(ctaLinks.length).toBeGreaterThanOrEqual(1)
  })
})

describe("Sector Expertise hub — sector-grid anchor", () => {
  it("has a section with id sector-grid", () => {
    const { container } = render(<SectorExpertise />)
    const section = container.querySelector("#sector-grid")
    expect(section).toBeInTheDocument()
  })
})
