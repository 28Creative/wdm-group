import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import Projects from "../projects"

vi.mock("wouter", () => ({
  Link: ({ href, children, className }: {
    href: string
    children: React.ReactNode
    className?: string
  }) => <a href={href} className={className}>{children}</a>,
  useLocation: () => ["/projects"],
}))

describe("Projects page — smoke render", () => {
  it("mounts without throwing", () => {
    expect(() => render(<Projects />)).not.toThrow()
  })

  it("renders the page heading", () => {
    render(<Projects />)
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("From vision to reality.")
  })

  it("renders the Navigation component", () => {
    render(<Projects />)
    expect(screen.getAllByRole("img", { name: "Why Design Matters" }).length).toBeGreaterThan(0)
  })

  it("renders the Footer component", () => {
    render(<Projects />)
    expect(screen.getByRole("contentinfo")).toBeInTheDocument()
  })

  it("has a main content area", () => {
    render(<Projects />)
    expect(screen.getByRole("main")).toBeInTheDocument()
  })
})

describe("Projects page — holding state", () => {
  it("renders no filter tab buttons", () => {
    render(<Projects />)
    expect(screen.queryByRole("button", { name: "All" })).not.toBeInTheDocument()
    expect(screen.queryByRole("button", { name: "Education" })).not.toBeInTheDocument()
    expect(screen.queryByRole("button", { name: "Commercial" })).not.toBeInTheDocument()
  })

  it("renders the Coming Soon label", () => {
    render(<Projects />)
    expect(screen.getByText("Coming Soon")).toBeInTheDocument()
  })

  it("renders the holding state heading", () => {
    render(<Projects />)
    expect(screen.getByText("Our project portfolio is on its way.")).toBeInTheDocument()
  })

  it("renders the holding state body copy", () => {
    render(<Projects />)
    expect(screen.getByText(/compiling our project case studies/i)).toBeInTheDocument()
  })

  it("renders no project cards", () => {
    render(<Projects />)
    expect(screen.queryByText("View Project →")).not.toBeInTheDocument()
  })
})

describe("Projects page — CTA band", () => {
  it("renders CTA link to /contact", () => {
    render(<Projects />)
    const links = screen.getAllByRole("link", { name: /start a conversation/i })
    expect(links.some((l) => l.getAttribute("href") === "/contact")).toBe(true)
  })
})
