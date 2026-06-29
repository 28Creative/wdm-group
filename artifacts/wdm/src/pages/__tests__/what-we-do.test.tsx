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

  it("renders the hero h1", () => {
    render(<WhatWeDo />)
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Creating places that perform for people."
    )
  })

  it("renders the hero primary CTA linking to /contact", () => {
    render(<WhatWeDo />)
    const contactLinks = screen.getAllByRole("link").filter(
      (a) => a.getAttribute("href") === "/contact"
    )
    expect(contactLinks.length).toBeGreaterThan(0)
  })

  it("renders the hero ghost CTA linking to /sector-expertise", () => {
    render(<WhatWeDo />)
    expect(
      screen.getByRole("link", { name: /Explore Our Sectors/i })
    ).toHaveAttribute("href", "/sector-expertise")
  })

  it("renders the Our Approach label", () => {
    render(<WhatWeDo />)
    expect(screen.getByText("Our Approach")).toBeInTheDocument()
  })

  it("renders the RIBA Plan of Work section heading", () => {
    render(<WhatWeDo />)
    expect(screen.getByText("How We Work Through a Project")).toBeInTheDocument()
  })

  it("renders all 8 RIBA stages", () => {
    render(<WhatWeDo />)
    expect(screen.getByText("Strategic Definition")).toBeInTheDocument()
    expect(screen.getByText("Preparation & Briefing")).toBeInTheDocument()
    expect(screen.getByText("Concept Design")).toBeInTheDocument()
    expect(screen.getByText("Spatial Coordination")).toBeInTheDocument()
    expect(screen.getByText("Technical Design")).toBeInTheDocument()
    expect(screen.getByText("Manufacturing & Construction")).toBeInTheDocument()
    expect(screen.getByText("Handover")).toBeInTheDocument()
    expect(screen.getByText("Use")).toBeInTheDocument()
  })

  it("renders all four service block labels", () => {
    render(<WhatWeDo />)
    expect(screen.getByText("Architecture & Design")).toBeInTheDocument()
    expect(screen.getByText("Feasibility & Development Insight")).toBeInTheDocument()
    expect(screen.getByText("Planning & Project Navigation")).toBeInTheDocument()
    expect(screen.getByText("Sustainable & Responsible Design")).toBeInTheDocument()
  })

  it("renders all four service block titles", () => {
    render(<WhatWeDo />)
    expect(screen.getByText(/From concept to completion/i)).toBeInTheDocument()
    expect(screen.getByText(/Understanding what's possible/i)).toBeInTheDocument()
    expect(screen.getByText(/Navigating complexity with clarity/i)).toBeInTheDocument()
    expect(screen.getByText(/Design that considers its impact/i)).toBeInTheDocument()
  })

  it("renders the Credentials section heading", () => {
    render(<WhatWeDo />)
    expect(screen.getByText("Expertise You Can Trust.")).toBeInTheDocument()
  })

  it("renders all five process step titles", () => {
    render(<WhatWeDo />)
    expect(screen.getAllByText("Listen").length).toBeGreaterThan(0)
    expect(screen.getAllByText("Explore").length).toBeGreaterThan(0)
    expect(screen.getAllByText("Design").length).toBeGreaterThan(0)
    expect(screen.getAllByText("Deliver").length).toBeGreaterThan(0)
    expect(screen.getAllByText("Evolve").length).toBeGreaterThan(0)
  })

  it("renders the CTA band heading", () => {
    render(<WhatWeDo />)
    expect(
      screen.getByText("Creative Thinking. Technical Expertise. Trusted Delivery.")
    ).toBeInTheDocument()
  })

  it("renders the #faq section with id attribute", () => {
    render(<WhatWeDo />)
    const faqSection = document.getElementById("faq")
    expect(faqSection).toBeInTheDocument()
  })

  it("renders all FAQ questions", () => {
    render(<WhatWeDo />)
    expect(screen.getByText("Do I need an architect?")).toBeInTheDocument()
    expect(screen.getByText("How much does an architect cost?")).toBeInTheDocument()
    expect(screen.getByText("How long does the process take?")).toBeInTheDocument()
    expect(screen.getByText("What is the RIBA Plan of Work?")).toBeInTheDocument()
    expect(screen.getByText("Do you handle planning applications?")).toBeInTheDocument()
    expect(screen.getByText("Can you help if I already have planning permission?")).toBeInTheDocument()
    expect(screen.getByText("Do you work with residential clients?")).toBeInTheDocument()
    expect(screen.getByText("What areas do you cover?")).toBeInTheDocument()
    expect(screen.getByText("How do I get started?")).toBeInTheDocument()
  })

  it("renders the Frequently Asked Questions heading", () => {
    render(<WhatWeDo />)
    expect(screen.getByText("Frequently Asked Questions.")).toBeInTheDocument()
  })

  it("renders Navigation component", () => {
    render(<WhatWeDo />)
    expect(screen.getByText("Why Design Matters")).toBeInTheDocument()
  })

  it("renders Footer component", () => {
    render(<WhatWeDo />)
    expect(screen.getByRole("contentinfo")).toBeInTheDocument()
  })

  it("has a main content area", () => {
    render(<WhatWeDo />)
    expect(screen.getByRole("main")).toBeInTheDocument()
  })
})
