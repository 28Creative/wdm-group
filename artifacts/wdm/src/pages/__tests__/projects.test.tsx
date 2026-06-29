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
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Selected Projects")
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
