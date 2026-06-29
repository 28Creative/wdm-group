import { render, screen, fireEvent } from "@testing-library/react"
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
    expect(screen.getByText("Why Design Matters")).toBeInTheDocument()
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

describe("Projects page — filter tabs", () => {
  it("renders all filter tabs", () => {
    render(<Projects />)
    expect(screen.getByRole("button", { name: "All" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Education" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Commercial" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Residential" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Hospitality" })).toBeInTheDocument()
  })

  it("shows all 6 projects by default", () => {
    render(<Projects />)
    const links = screen.getAllByText("View Project →")
    expect(links).toHaveLength(6)
  })

  it("filters to only Education projects when Education tab is clicked", () => {
    render(<Projects />)
    fireEvent.click(screen.getByRole("button", { name: "Education" }))
    expect(screen.getByText("Ashfield Academy")).toBeInTheDocument()
    expect(screen.getByText("Redwood Primary School")).toBeInTheDocument()
    expect(screen.queryByText("One Meridian Square")).not.toBeInTheDocument()
    expect(screen.queryByText("Riverside Quarter")).not.toBeInTheDocument()
  })

  it("filters to only Commercial projects when Commercial tab is clicked", () => {
    render(<Projects />)
    fireEvent.click(screen.getByRole("button", { name: "Commercial" }))
    expect(screen.getByText("One Meridian Square")).toBeInTheDocument()
    expect(screen.getByText("Highfield Business Park")).toBeInTheDocument()
    expect(screen.queryByText("Ashfield Academy")).not.toBeInTheDocument()
  })

  it("shows all projects again when All tab is clicked after filtering", () => {
    render(<Projects />)
    fireEvent.click(screen.getByRole("button", { name: "Education" }))
    fireEvent.click(screen.getByRole("button", { name: "All" }))
    const links = screen.getAllByText("View Project →")
    expect(links).toHaveLength(6)
  })
})

describe("Projects page — CTA band", () => {
  it("renders CTA link to /contact", () => {
    render(<Projects />)
    const links = screen.getAllByRole("link", { name: /start a conversation/i })
    expect(links.some((l) => l.getAttribute("href") === "/contact")).toBe(true)
  })
})
