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

describe("Sector Expertise page — smoke render", () => {
  it("mounts without throwing", () => {
    expect(() => render(<SectorExpertise />)).not.toThrow()
  })

  it("renders the page heading", () => {
    render(<SectorExpertise />)
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Sector Expertise")
  })

  it("renders the Navigation component", () => {
    render(<SectorExpertise />)
    expect(screen.getByText("Why Design Matters")).toBeInTheDocument()
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
