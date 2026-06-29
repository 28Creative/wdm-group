import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import WhatWeDo from "../what-we-do"

vi.mock("wouter", () => ({
  Link: ({ href, children, className }: {
    href: string
    children: React.ReactNode
    className?: string
  }) => <a href={href} className={className}>{children}</a>,
  useLocation: () => ["/what-we-do"],
}))

describe("What We Do page — smoke render", () => {
  it("mounts without throwing", () => {
    expect(() => render(<WhatWeDo />)).not.toThrow()
  })

  it("renders the page heading", () => {
    render(<WhatWeDo />)
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("What We Do")
  })

  it("renders the Navigation component", () => {
    render(<WhatWeDo />)
    expect(screen.getByText("Why Design Matters")).toBeInTheDocument()
  })

  it("renders the Footer component", () => {
    render(<WhatWeDo />)
    expect(screen.getByRole("contentinfo")).toBeInTheDocument()
  })

  it("has a main content area", () => {
    render(<WhatWeDo />)
    expect(screen.getByRole("main")).toBeInTheDocument()
  })
})
