import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import Podcasts from "../podcasts"

vi.mock("wouter", () => ({
  Link: ({ href, children, className }: {
    href: string
    children: React.ReactNode
    className?: string
  }) => <a href={href} className={className}>{children}</a>,
  useLocation: () => ["/podcasts"],
}))

describe("Podcasts page — smoke render", () => {
  it("mounts without throwing", () => {
    expect(() => render(<Podcasts />)).not.toThrow()
  })

  it("renders the page heading", () => {
    render(<Podcasts />)
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Conversations that matter.")
  })

  it("renders the Navigation component", () => {
    render(<Podcasts />)
    expect(screen.getByText("Why Design Matters")).toBeInTheDocument()
  })

  it("renders the Footer component", () => {
    render(<Podcasts />)
    expect(screen.getByRole("contentinfo")).toBeInTheDocument()
  })

  it("has a main content area", () => {
    render(<Podcasts />)
    expect(screen.getByRole("main")).toBeInTheDocument()
  })
})

describe("Podcasts page — hero CTAs", () => {
  it("renders 'Listen on Spotify' link", () => {
    render(<Podcasts />)
    expect(screen.getByRole("link", { name: /listen on spotify/i })).toBeInTheDocument()
  })

  it("renders 'Listen on Apple Podcasts' link", () => {
    render(<Podcasts />)
    expect(screen.getByRole("link", { name: /listen on apple podcasts/i })).toBeInTheDocument()
  })
})

describe("Podcasts page — about section", () => {
  it("renders 'About the Show' label", () => {
    render(<Podcasts />)
    expect(screen.getByText("About the Show")).toBeInTheDocument()
  })

  it("renders platform links in the about section", () => {
    render(<Podcasts />)
    expect(screen.getAllByText("Spotify").length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText("Apple Podcasts").length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText("Google Podcasts")).toBeInTheDocument()
    expect(screen.getByText("Amazon Music")).toBeInTheDocument()
  })
})

describe("Podcasts page — coming soon", () => {
  it("renders the Coming Soon label", () => {
    render(<Podcasts />)
    expect(screen.getByText("Coming Soon")).toBeInTheDocument()
  })

  it("renders the coming soon heading", () => {
    render(<Podcasts />)
    expect(screen.getByText("The podcast is coming soon.")).toBeInTheDocument()
  })

  it("renders the subscribe body copy", () => {
    render(<Podcasts />)
    expect(screen.getByText(/finishing touches to our first episodes/i)).toBeInTheDocument()
  })

  it("renders the 'Links coming soon' note", () => {
    render(<Podcasts />)
    expect(screen.getByText(/links coming soon/i)).toBeInTheDocument()
  })

  it("renders no episode cards", () => {
    render(<Podcasts />)
    expect(screen.queryAllByText(/ep\. \d+/i)).toHaveLength(0)
    expect(screen.queryByText("Listen Now →")).not.toBeInTheDocument()
  })
})

describe("Podcasts page — CTA band", () => {
  it("renders 'Get in Touch' link to /contact", () => {
    render(<Podcasts />)
    const link = screen.getByRole("link", { name: /get in touch/i })
    expect(link).toHaveAttribute("href", "/contact")
  })
})
