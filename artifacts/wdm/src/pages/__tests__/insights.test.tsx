import { render, screen } from "@testing-library/react"
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
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Insights & Thinking")
  })

  it("renders the Navigation component", () => {
    render(<Insights />)
    expect(screen.getByText("Why Design Matters")).toBeInTheDocument()
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
