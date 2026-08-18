import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi, beforeEach } from "vitest"
import { Navigation } from "../Navigation"

const mockUseLocation = vi.fn()

vi.mock("wouter", () => ({
  Link: ({ href, children, className, onClick }: {
    href: string
    children: React.ReactNode
    className?: string
    onClick?: () => void
  }) => (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  ),
  useLocation: () => mockUseLocation(),
}))

const EXPECTED_NAV_LABELS = [
  "Home",
  "About",
  "What We Do",
  "Sector Expertise",
  "Projects",
  "Insights",
  "Podcasts",
  "Contact Us",
]

beforeEach(() => {
  mockUseLocation.mockReturnValue(["/"])
})

describe("Navigation — desktop nav links", () => {
  it("renders all expected nav link labels", () => {
    render(<Navigation />)

    for (const label of EXPECTED_NAV_LABELS) {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0)
    }
  })

  it("renders a link to every defined route", () => {
    render(<Navigation />)

    const hrefs = ["/", "/about", "/what-we-do", "/sector-expertise", "/projects", "/insights", "/podcasts", "/contact"]
    const anchors = screen.getAllByRole("link")
    const renderedHrefs = anchors.map((a) => a.getAttribute("href"))

    for (const href of hrefs) {
      expect(renderedHrefs).toContain(href)
    }
  })

  it("renders the brand name link pointing to /", () => {
    render(<Navigation />)

    const brandLink = screen.getByRole("img", { name: "Why Design Matters" }).closest("a")
    expect(brandLink).toHaveAttribute("href", "/")
  })

  it("renders a CTA link to /contact", () => {
    render(<Navigation />)

    const ctaLinks = screen.getAllByText("Start a Conversation")
    expect(ctaLinks.length).toBeGreaterThan(0)
    for (const cta of ctaLinks) {
      expect(cta.closest("a")).toHaveAttribute("href", "/contact")
    }
  })
})

describe("Navigation — active route styling", () => {
  it("applies gold color class to the active link", () => {
    mockUseLocation.mockReturnValue(["/about"])
    render(<Navigation />)

    const aboutLinks = screen.getAllByText("About")
    for (const link of aboutLinks) {
      expect(link.className).toContain("text-[var(--color-gold)]")
    }
  })

  it("applies graphite color class to inactive links", () => {
    mockUseLocation.mockReturnValue(["/about"])
    render(<Navigation />)

    const homeLinks = screen.getAllByText("Home")
    for (const link of homeLinks) {
      expect(link.className).toContain("text-[var(--color-graphite)]")
    }
  })

  it("active and inactive links have different color classes", () => {
    mockUseLocation.mockReturnValue(["/projects"])
    render(<Navigation />)

    const activeLinks = screen.getAllByText("Projects")
    const inactiveLinks = screen.getAllByText("Insights")

    expect(activeLinks[0].className).toContain("text-[var(--color-gold)]")
    expect(inactiveLinks[0].className).toContain("text-[var(--color-graphite)]")
  })

  it("active link does not have graphite class", () => {
    mockUseLocation.mockReturnValue(["/insights"])
    render(<Navigation />)

    const activeLinks = screen.getAllByText("Insights")
    for (const link of activeLinks) {
      expect(link.className).not.toContain("text-[var(--color-graphite)]")
    }
  })
})

describe("Navigation — mobile menu", () => {
  it("mobile menu is hidden on initial render", () => {
    render(<Navigation />)

    expect(screen.queryByRole("link", { name: "Home" })).toBeInTheDocument()
    const mobileNav = screen.queryByText("Podcasts")
    expect(mobileNav).toBeInTheDocument()
    const allLinks = screen.getAllByRole("link")
    const mobileMenuContainer = document.querySelector(".lg\\:hidden.absolute")
    expect(mobileMenuContainer).not.toBeInTheDocument()
  })

  it("clicking the toggle button opens the mobile menu", async () => {
    const user = userEvent.setup()
    render(<Navigation />)

    const toggleBtn = screen.getByRole("button", { name: /toggle menu/i })
    await user.click(toggleBtn)

    const mobileMenuContainer = document.querySelector(".absolute.top-full")
    expect(mobileMenuContainer).toBeInTheDocument()
  })

  it("mobile menu shows all nav links when open", async () => {
    const user = userEvent.setup()
    render(<Navigation />)

    const toggleBtn = screen.getByRole("button", { name: /toggle menu/i })
    await user.click(toggleBtn)

    const mobileMenuContainer = document.querySelector(".absolute.top-full")
    expect(mobileMenuContainer).toBeInTheDocument()

    for (const label of EXPECTED_NAV_LABELS) {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0)
    }
  })

  it("clicking the toggle button again closes the mobile menu", async () => {
    const user = userEvent.setup()
    render(<Navigation />)

    const toggleBtn = screen.getByRole("button", { name: /toggle menu/i })
    await user.click(toggleBtn)

    expect(document.querySelector(".absolute.top-full")).toBeInTheDocument()

    await user.click(toggleBtn)

    expect(document.querySelector(".absolute.top-full")).not.toBeInTheDocument()
  })

  it("clicking a mobile nav link closes the menu", async () => {
    const user = userEvent.setup()
    render(<Navigation />)

    const toggleBtn = screen.getByRole("button", { name: /toggle menu/i })
    await user.click(toggleBtn)

    expect(document.querySelector(".absolute.top-full")).toBeInTheDocument()

    const mobileAboutLinks = screen.getAllByText("About")
    await user.click(mobileAboutLinks[mobileAboutLinks.length - 1])

    expect(document.querySelector(".absolute.top-full")).not.toBeInTheDocument()
  })
})
