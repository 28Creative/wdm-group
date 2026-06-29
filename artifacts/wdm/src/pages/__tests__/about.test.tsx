import { render, screen, within } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import About, { TEAM_MEMBERS } from "../about"

vi.mock("wouter", () => ({
  Link: ({ href, children, className }: {
    href: string
    children: React.ReactNode
    className?: string
  }) => <a href={href} className={className}>{children}</a>,
  useLocation: () => ["/about"],
}))

describe("About page — team grid", () => {
  it("mounts without throwing", () => {
    expect(() => render(<About />)).not.toThrow()
  })

  it("renders the page heading", () => {
    render(<About />)
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("About Us")
  })

  it("renders the team section heading", () => {
    render(<About />)
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("The Team")
  })

  it("renders one TeamCard per team member", () => {
    render(<About />)
    const grid = screen.getByTestId("team-grid")
    const cards = within(grid).getAllByRole("heading", { level: 4 })
    expect(cards).toHaveLength(TEAM_MEMBERS.length)
  })

  it("renders each member's name", () => {
    render(<About />)
    for (const member of TEAM_MEMBERS) {
      expect(screen.getByText(member.name)).toBeInTheDocument()
    }
  })

  it("renders each member's role", () => {
    render(<About />)
    for (const member of TEAM_MEMBERS) {
      expect(screen.getByText(member.role)).toBeInTheDocument()
    }
  })

  it("renders each member's bio excerpt", () => {
    render(<About />)
    for (const member of TEAM_MEMBERS) {
      expect(screen.getByText(member.bioExcerpt)).toBeInTheDocument()
    }
  })

  it("renders member images with correct alt text", () => {
    render(<About />)
    for (const member of TEAM_MEMBERS) {
      expect(screen.getByAltText(member.name)).toBeInTheDocument()
    }
  })

  it("first member image loads eagerly, rest lazily", () => {
    render(<About />)
    const images = screen.getAllByRole("img").filter(
      (img) => TEAM_MEMBERS.some((m) => m.name === img.getAttribute("alt"))
    )
    expect(images[0]).toHaveAttribute("loading", "eager")
    for (const img of images.slice(1)) {
      expect(img).toHaveAttribute("loading", "lazy")
    }
  })

  it("grid still renders correctly when TEAM_MEMBERS has content", () => {
    render(<About />)
    const grid = screen.getByTestId("team-grid")
    expect(grid).toBeInTheDocument()
    expect(within(grid).getAllByRole("heading", { level: 4 }).length).toBeGreaterThan(0)
  })

  it("renders the Navigation component", () => {
    render(<About />)
    expect(screen.getByText("Why Design Matters")).toBeInTheDocument()
  })

  it("renders the Footer component", () => {
    render(<About />)
    expect(screen.getByRole("contentinfo")).toBeInTheDocument()
  })

  it("has a main content area", () => {
    render(<About />)
    expect(screen.getByRole("main")).toBeInTheDocument()
  })
})
