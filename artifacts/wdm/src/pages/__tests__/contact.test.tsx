import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import Contact from "../contact"

vi.mock("wouter", () => ({
  Link: ({ href, children, className }: {
    href: string
    children: React.ReactNode
    className?: string
  }) => <a href={href} className={className}>{children}</a>,
  useLocation: () => ["/contact"],
}))

describe("Contact page — smoke render", () => {
  it("mounts without throwing", () => {
    expect(() => render(<Contact />)).not.toThrow()
  })

  it("renders the page heading", () => {
    render(<Contact />)
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Start a Conversation")
  })

  it("renders the Navigation component", () => {
    render(<Contact />)
    expect(screen.getByText("Why Design Matters")).toBeInTheDocument()
  })

  it("renders the Footer component", () => {
    render(<Contact />)
    expect(screen.getByRole("contentinfo")).toBeInTheDocument()
  })

  it("has a main content area", () => {
    render(<Contact />)
    expect(screen.getByRole("main")).toBeInTheDocument()
  })
})
