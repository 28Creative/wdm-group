import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi, beforeEach } from "vitest"

/* ── wouter mock helpers ───────────────────────────────────────────────── */

let mockSectorId = "education"

vi.mock("wouter", () => ({
  Link: ({ href, children, className }: {
    href: string
    children: React.ReactNode
    className?: string
  }) => <a href={href} className={className}>{children}</a>,
  useRoute: () => [true, { id: mockSectorId }],
  useLocation: () => [`/sector/${mockSectorId}`],
}))

import SectorDetail from "../sector-detail"

function renderSector(id: string) {
  mockSectorId = id
  return render(<SectorDetail />)
}

/* ── Shared smoke tests ────────────────────────────────────────────────── */

describe("SectorDetail — mounts", () => {
  it("mounts without throwing for education", () => {
    expect(() => renderSector("education")).not.toThrow()
  })
  it("mounts without throwing for commercial", () => {
    expect(() => renderSector("commercial")).not.toThrow()
  })
  it("mounts without throwing for residential", () => {
    expect(() => renderSector("residential")).not.toThrow()
  })
  it("mounts without throwing for hospitality", () => {
    expect(() => renderSector("hospitality")).not.toThrow()
  })
  it("renders a fallback for unknown sector id", () => {
    expect(() => renderSector("unknown")).not.toThrow()
  })
})

/* ── Education ─────────────────────────────────────────────────────────── */

describe("Education page", () => {
  beforeEach(() => { mockSectorId = "education" })

  it("renders h1 for education", () => {
    render(<SectorDetail />)
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Education & Learning Environments")
  })

  it("has a back link to /sector-expertise", () => {
    render(<SectorDetail />)
    const links = screen.getAllByRole("link", { name: /all sectors/i })
    expect(links.length).toBeGreaterThanOrEqual(1)
    expect(links[0]).toHaveAttribute("href", "/sector-expertise")
  })

  it("renders the Navigation", () => {
    render(<SectorDetail />)
    expect(screen.getByRole("img", { name: "Why Design Matters" })).toBeInTheDocument()
  })

  it("renders the Footer", () => {
    render(<SectorDetail />)
    expect(screen.getByRole("contentinfo")).toBeInTheDocument()
  })

  it("renders 'Why the learning environment matters' heading", () => {
    render(<SectorDetail />)
    expect(screen.getByText("Why the learning environment matters")).toBeInTheDocument()
  })

  it("renders process steps", () => {
    render(<SectorDetail />)
    expect(screen.getByText("Evidence Review")).toBeInTheDocument()
    expect(screen.getByText("Stakeholder Engagement")).toBeInTheDocument()
  })
})

/* ── Commercial ────────────────────────────────────────────────────────── */

describe("Commercial page", () => {
  beforeEach(() => { mockSectorId = "commercial" })

  it("renders h1 for commercial", () => {
    render(<SectorDetail />)
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Commercial & Workplace")
  })

  it("has a back link to /sector-expertise", () => {
    render(<SectorDetail />)
    const links = screen.getAllByRole("link", { name: /all sectors/i })
    expect(links[0]).toHaveAttribute("href", "/sector-expertise")
  })

  it("renders 'Looking beyond the brief' heading", () => {
    render(<SectorDetail />)
    expect(screen.getByText("Looking beyond the brief")).toBeInTheDocument()
  })

  it("renders 'Supporting performance through design' heading", () => {
    render(<SectorDetail />)
    expect(screen.getByText("Supporting performance through design")).toBeInTheDocument()
  })
})

/* ── Residential ───────────────────────────────────────────────────────── */

describe("Residential page", () => {
  beforeEach(() => { mockSectorId = "residential" })

  it("renders h1 for residential", () => {
    render(<SectorDetail />)
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Residential Design")
  })

  it("has a back link to /sector-expertise", () => {
    render(<SectorDetail />)
    const links = screen.getAllByRole("link", { name: /all sectors/i })
    expect(links[0]).toHaveAttribute("href", "/sector-expertise")
  })

  it("has section with id residential-development", () => {
    const { container } = render(<SectorDetail />)
    expect(container.querySelector("#residential-development")).toBeInTheDocument()
  })

  it("has section with id private-homes", () => {
    const { container } = render(<SectorDetail />)
    expect(container.querySelector("#private-homes")).toBeInTheDocument()
  })

  it("renders anchor CTAs in the hero", () => {
    render(<SectorDetail />)
    const resDevLink = screen.getByRole("link", { name: /residential development/i })
    expect(resDevLink).toHaveAttribute("href", "#residential-development")
    const phLink = screen.getByRole("link", { name: /private homes/i })
    expect(phLink).toHaveAttribute("href", "#private-homes")
  })
})

/* ── Hospitality ───────────────────────────────────────────────────────── */

describe("Hospitality page", () => {
  beforeEach(() => { mockSectorId = "hospitality" })

  it("renders h1 for hospitality", () => {
    render(<SectorDetail />)
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Hospitality & Leisure")
  })

  it("has a back link to /sector-expertise", () => {
    render(<SectorDetail />)
    const links = screen.getAllByRole("link", { name: /all sectors/i })
    expect(links[0]).toHaveAttribute("href", "/sector-expertise")
  })

  it("renders Guest Journey stage names", () => {
    render(<SectorDetail />)
    expect(screen.getByText("Discovery")).toBeInTheDocument()
    expect(screen.getByText("Arrival")).toBeInTheDocument()
    expect(screen.getByText("Experience")).toBeInTheDocument()
    expect(screen.getByText("Comfort")).toBeInTheDocument()
    expect(screen.getByText("Return")).toBeInTheDocument()
  })

  it("renders 'Designing the guest journey' heading", () => {
    render(<SectorDetail />)
    expect(screen.getByText("Designing the guest journey")).toBeInTheDocument()
  })

  it("renders 'Different environments. Shared principles.' heading", () => {
    render(<SectorDetail />)
    expect(screen.getByText("Different environments. Shared principles.")).toBeInTheDocument()
  })

  it("renders 'Beyond the building' heading", () => {
    render(<SectorDetail />)
    expect(screen.getByText("Beyond the building")).toBeInTheDocument()
  })
})

/* ── 404 fallback ──────────────────────────────────────────────────────── */

describe("SectorDetail — unknown sector", () => {
  it("renders a not-found message for unknown id", () => {
    renderSector("unknown-sector")
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Sector not found")
  })

  it("has a link back to /sector-expertise in the 404", () => {
    renderSector("unknown-sector")
    const links = screen.getAllByRole("link", { name: /view all sectors/i })
    expect(links[0]).toHaveAttribute("href", "/sector-expertise")
  })
})
