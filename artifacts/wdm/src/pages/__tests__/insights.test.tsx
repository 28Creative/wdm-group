import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import Insights from "../insights"

vi.mock("wouter", () => ({
  Link: ({ href, children, className }: {
    href: string
    children: React.ReactNode
    className?: string
  }) => <a href={href} className={className}>{children}</a>,
  useLocation: () => ["/insights"],
}))

describe("Insights page — smoke render", () => {
  it("mounts without throwing", () => {
    expect(() => render(<Insights />)).not.toThrow()
  })

  it("renders the page heading", () => {
    render(<Insights />)
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Thinking beyond the building.")
  })

  it("renders the Navigation component", () => {
    render(<Insights />)
    expect(screen.getAllByRole("img", { name: "Why Design Matters" }).length).toBeGreaterThan(0)
  })

  it("renders the Footer component", () => {
    render(<Insights />)
    expect(screen.getByRole("contentinfo")).toBeInTheDocument()
  })

  it("has a main content area", () => {
    render(<Insights />)
    expect(screen.getByRole("main")).toBeInTheDocument()
  })
})

describe("Insights page — featured article", () => {
  it("renders the Featured label", () => {
    render(<Insights />)
    expect(screen.getByText("Featured Article")).toBeInTheDocument()
  })

  it("renders the featured article 'Read More' link", () => {
    render(<Insights />)
    const readMoreLinks = screen.getAllByText(/read more/i)
    expect(readMoreLinks.length).toBeGreaterThanOrEqual(1)
  })
})

describe("Insights page — filter tabs", () => {
  it("renders all filter tabs without a Podcast tab", () => {
    render(<Insights />)
    expect(screen.getByRole("button", { name: "All" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Education" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Commercial" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Residential" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Hospitality" })).toBeInTheDocument()
    expect(screen.queryByRole("button", { name: "Podcast" })).not.toBeInTheDocument()
  })

  it("shows all 6 articles by default", () => {
    render(<Insights />)
    const cards = screen.getAllByText(/how classroom acoustics|case for bringing|making the case for quality|what guests notice|post-pandemic school|embodied carbon/i)
    expect(cards.length).toBeGreaterThanOrEqual(6)
  })

  it("filters to Education articles when Education tab is clicked", () => {
    render(<Insights />)
    fireEvent.click(screen.getByRole("button", { name: "Education" }))
    expect(screen.getByText("How classroom acoustics affect learning outcomes")).toBeInTheDocument()
    expect(screen.queryByText("Embodied carbon in commercial buildings")).not.toBeInTheDocument()
  })

  it("filters to Commercial articles when Commercial tab is clicked", () => {
    render(<Insights />)
    fireEvent.click(screen.getByRole("button", { name: "Commercial" }))
    expect(screen.getByText("Embodied carbon in commercial buildings")).toBeInTheDocument()
    expect(screen.queryByText("How classroom acoustics affect learning outcomes")).not.toBeInTheDocument()
  })
})

describe("Insights page — podcast callout", () => {
  it("renders 'Explore All Episodes' link to /podcasts", () => {
    render(<Insights />)
    const link = screen.getByRole("link", { name: /explore all episodes/i })
    expect(link).toHaveAttribute("href", "/podcasts")
  })
})

describe("Insights page — CTA band", () => {
  it("renders 'Get in Touch' link to /contact", () => {
    render(<Insights />)
    const link = screen.getByRole("link", { name: /get in touch/i })
    expect(link).toHaveAttribute("href", "/contact")
  })
})
