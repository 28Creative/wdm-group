import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import { SectorCard } from "../sector-card"

vi.mock("wouter", () => ({
  Link: ({ href, children, className }: {
    href: string
    children: React.ReactNode
    className?: string
  }) => (
    <a href={href} className={className}>{children}</a>
  ),
}))

const defaultProps = {
  imageSrc: "/images/sector.jpg",
  title: "Hospitality",
  descriptor: "Spaces that welcome guests and create memorable experiences.",
  features: ["Lobby design", "Restaurant interiors", "Hotel suites"],
  ctaHref: "/sector/hospitality",
}

describe("SectorCard — layout", () => {
  it("renders with base layout classes", () => {
    const { container } = render(<SectorCard {...defaultProps} />)
    const root = container.firstElementChild!
    expect(root.className).toMatchSnapshot()
  })

  it("contains flex and lg:flex-row classes on root", () => {
    const { container } = render(<SectorCard {...defaultProps} />)
    const root = container.firstElementChild!
    expect(root.className).toContain("flex")
    expect(root.className).toContain("lg:flex-row")
  })

  it("image column has lg:w-1/2 class", () => {
    render(<SectorCard {...defaultProps} />)
    const img = screen.getByRole("img")
    expect(img.parentElement!.className).toContain("lg:w-1/2")
  })

  it("content column has lg:w-1/2 class", () => {
    render(<SectorCard {...defaultProps} />)
    const heading = screen.getByRole("heading", { level: 2 })
    expect(heading.parentElement!.className).toContain("lg:w-1/2")
  })

  it("merges extra className onto root element", () => {
    const { container } = render(
      <SectorCard {...defaultProps} className="mt-16" />
    )
    const root = container.firstElementChild!
    expect(root.className).toContain("mt-16")
    expect(root.className).toContain("flex")
  })
})

describe("SectorCard — content", () => {
  it("renders title in h2", () => {
    render(<SectorCard {...defaultProps} />)
    const heading = screen.getByRole("heading", { level: 2 })
    expect(heading).toHaveTextContent("Hospitality")
  })

  it("renders descriptor text", () => {
    render(<SectorCard {...defaultProps} />)
    expect(screen.getByText(defaultProps.descriptor)).toBeInTheDocument()
  })

  it("renders every feature in the list", () => {
    render(<SectorCard {...defaultProps} />)
    for (const feature of defaultProps.features) {
      expect(screen.getByText(feature)).toBeInTheDocument()
    }
  })

  it("renders one list item per feature", () => {
    render(<SectorCard {...defaultProps} />)
    const items = screen.getAllByRole("listitem")
    expect(items).toHaveLength(defaultProps.features.length)
  })

  it("renders a CTA link pointing to ctaHref", () => {
    render(<SectorCard {...defaultProps} />)
    const link = screen.getByRole("link", { name: /explore sector/i })
    expect(link).toHaveAttribute("href", "/sector/hospitality")
  })
})

describe("SectorCard — image", () => {
  it("renders image with the provided src and alt", () => {
    render(<SectorCard {...defaultProps} />)
    const img = screen.getByRole("img")
    expect(img).toHaveAttribute("src", "/images/sector.jpg")
    expect(img).toHaveAttribute("alt", "Hospitality")
  })

  it("defaults to lazy loading", () => {
    render(<SectorCard {...defaultProps} />)
    const img = screen.getByRole("img")
    expect(img).toHaveAttribute("loading", "lazy")
    expect(img).toHaveAttribute("decoding", "async")
  })

  it("accepts eager loading for above-the-fold use", () => {
    render(<SectorCard {...defaultProps} loading="eager" />)
    const img = screen.getByRole("img")
    expect(img).toHaveAttribute("loading", "eager")
  })

  it("image has aspect-ratio and object-cover classes", () => {
    render(<SectorCard {...defaultProps} />)
    const img = screen.getByRole("img")
    expect(img.className).toContain("aspect-[4/3]")
    expect(img.className).toContain("object-cover")
  })
})

describe("SectorCard — feature list check icons", () => {
  it("renders a check icon for each feature", () => {
    render(<SectorCard {...defaultProps} />)
    const svgs = document.querySelectorAll("li svg")
    expect(svgs.length).toBe(defaultProps.features.length)
  })

  it("check icons have gold color class", () => {
    render(<SectorCard {...defaultProps} />)
    const svgs = document.querySelectorAll("li svg")
    for (const svg of Array.from(svgs)) {
      expect(svg.getAttribute("class")).toContain("text-[var(--color-gold)]")
    }
  })
})
