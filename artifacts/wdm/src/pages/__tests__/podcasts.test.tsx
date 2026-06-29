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

  it("renders platform links", () => {
    render(<Podcasts />)
    expect(screen.getAllByText("Spotify").length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText("Apple Podcasts")).toBeInTheDocument()
    expect(screen.getByText("Google Podcasts")).toBeInTheDocument()
    expect(screen.getByText("Amazon Music")).toBeInTheDocument()
  })
})

describe("Podcasts page — episode list", () => {
  it("renders 4 episode cards", () => {
    render(<Podcasts />)
    const epLabels = screen.getAllByText(/ep\. \d+/i)
    expect(epLabels).toHaveLength(4)
  })

  it("renders 'Listen Now →' for each episode", () => {
    render(<Podcasts />)
    const listenLinks = screen.getAllByText("Listen Now →")
    expect(listenLinks).toHaveLength(4)
  })

  it("renders each episode title", () => {
    render(<Podcasts />)
    expect(screen.getByText("What does great school design actually look like?")).toBeInTheDocument()
    expect(screen.getByText("The lobby problem — first impressions in hospitality")).toBeInTheDocument()
    expect(screen.getByText("Embodied carbon: where do we actually start?")).toBeInTheDocument()
    expect(screen.getByText("Designing homes people actually want to live in")).toBeInTheDocument()
  })
})

describe("Podcasts page — CTA band", () => {
  it("renders 'Get in Touch' link to /contact", () => {
    render(<Podcasts />)
    const link = screen.getByRole("link", { name: /get in touch/i })
    expect(link).toHaveAttribute("href", "/contact")
  })
})
