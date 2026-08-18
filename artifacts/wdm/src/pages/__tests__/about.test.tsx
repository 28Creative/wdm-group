import { render, screen, within } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import About, { DIRECTORS } from "../about"

vi.mock("wouter", () => ({
  Link: ({ href, children, className }: {
    href: string
    children: React.ReactNode
    className?: string
  }) => <a href={href} className={className}>{children}</a>,
  useLocation: () => ["/about"],
}))

// Radix UI Dialog uses portals — stub it so content renders inline in tests
vi.mock("@radix-ui/react-dialog", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@radix-ui/react-dialog")>()
  return {
    ...actual,
    Portal: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  }
})

describe("About page — full build", () => {
  it("mounts without throwing", () => {
    expect(() => render(<About />)).not.toThrow()
  })

  it("renders the hero heading", () => {
    render(<About />)
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Design that starts with people."
    )
  })

  it("renders the team section heading", () => {
    render(<About />)
    expect(
      screen.getByText(/Behind every project is a team that genuinely cares/)
    ).toBeInTheDocument()
  })

  it("renders one TeamCard per director", () => {
    render(<About />)
    const grid = screen.getByTestId("team-grid")
    const cards = within(grid).getAllByRole("heading", { level: 4 })
    expect(cards).toHaveLength(DIRECTORS.length)
  })

  it("renders each director's name", () => {
    render(<About />)
    for (const director of DIRECTORS) {
      expect(screen.getByText(director.name)).toBeInTheDocument()
    }
  })

  it("renders each director's role", () => {
    render(<About />)
    for (const director of DIRECTORS) {
      expect(screen.getAllByText(director.role).length).toBeGreaterThan(0)
    }
  })

  it("renders each director's bio excerpt in the card", () => {
    render(<About />)
    for (const director of DIRECTORS) {
      expect(screen.getByText(director.bioExcerpt)).toBeInTheDocument()
    }
  })

  it("renders director images with correct alt text", () => {
    render(<About />)
    for (const director of DIRECTORS) {
      expect(screen.getAllByAltText(director.name).length).toBeGreaterThan(0)
    }
  })

  it("first director image loads eagerly, rest lazily", () => {
    render(<About />)
    const images = screen.getAllByRole("img").filter(
      (img) => DIRECTORS.some((d) => d.name === img.getAttribute("alt"))
    )
    expect(images[0]).toHaveAttribute("loading", "eager")
    for (const img of images.slice(1)) {
      expect(img).toHaveAttribute("loading", "lazy")
    }
  })

  it("renders a 'Read [Name]'s Story' button for each director", () => {
    render(<About />)
    for (const director of DIRECTORS) {
      const firstName = director.name.split(" ")[0]
      expect(
        screen.getByRole("button", { name: new RegExp(`Read ${firstName}'s Story`, "i") })
      ).toBeInTheDocument()
    }
  })

  it("team grid still renders correctly", () => {
    render(<About />)
    const grid = screen.getByTestId("team-grid")
    expect(grid).toBeInTheDocument()
    expect(within(grid).getAllByRole("heading", { level: 4 }).length).toBeGreaterThan(0)
  })

  it("renders the Navigation component", () => {
    render(<About />)
    expect(screen.getAllByRole("img", { name: "Why Design Matters" }).length).toBeGreaterThan(0)
  })

  it("renders the Footer component", () => {
    render(<About />)
    expect(screen.getByRole("contentinfo")).toBeInTheDocument()
  })

  it("has a main content area", () => {
    render(<About />)
    expect(screen.getByRole("main")).toBeInTheDocument()
  })

  it("renders the Our Story label", () => {
    render(<About />)
    expect(screen.getByText("Our Story")).toBeInTheDocument()
  })

  it("renders the WDM Difference section title", () => {
    render(<About />)
    expect(screen.getByText("What Makes Us Different")).toBeInTheDocument()
  })

  it("renders the CTA box heading", () => {
    render(<About />)
    expect(screen.getByText("Ready to discuss your project?")).toBeInTheDocument()
  })

  it("renders a primary CTA linking to /contact", () => {
    render(<About />)
    const contactLinks = screen.getAllByRole("link").filter(
      (a) => a.getAttribute("href") === "/contact"
    )
    expect(contactLinks.length).toBeGreaterThan(0)
  })
})
