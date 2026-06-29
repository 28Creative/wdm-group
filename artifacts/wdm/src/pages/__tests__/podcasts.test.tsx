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
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Podcasts")
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
