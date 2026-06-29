import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import { InsightCard } from "../insight-card"

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
  imageSrc: "/images/insight.jpg",
  category: "Architecture",
  title: "Why Space Shapes Behaviour",
  summary: "A look at how spatial design influences the people inside it.",
  href: "/insights/space-shapes-behaviour",
}

describe("InsightCard — structure", () => {
  it("renders with base layout classes", () => {
    const { container } = render(<InsightCard {...defaultProps} />)
    const root = container.firstElementChild!
    expect(root.className).toMatchSnapshot()
  })

  it("contains flex-col and h-full classes on root element", () => {
    const { container } = render(<InsightCard {...defaultProps} />)
    const root = container.firstElementChild!
    expect(root.className).toContain("flex")
    expect(root.className).toContain("flex-col")
    expect(root.className).toContain("h-full")
  })

  it("has a hover border class for yellow accent", () => {
    const { container } = render(<InsightCard {...defaultProps} />)
    const root = container.firstElementChild!
    expect(root.className).toContain("hover:border-[var(--color-yellow)]")
  })

  it("has stone background class", () => {
    const { container } = render(<InsightCard {...defaultProps} />)
    const root = container.firstElementChild!
    expect(root.className).toContain("bg-[var(--color-stone)]")
  })
})

describe("InsightCard — content", () => {
  it("renders category label with uppercase tracking classes", () => {
    render(<InsightCard {...defaultProps} />)
    const category = screen.getByText("Architecture")
    expect(category.className).toContain("uppercase")
    expect(category.className).toContain("tracking-widest")
    expect(category.className).toContain("text-[var(--color-gold)]")
  })

  it("renders title in h3", () => {
    render(<InsightCard {...defaultProps} />)
    const heading = screen.getByRole("heading", { level: 3 })
    expect(heading).toHaveTextContent("Why Space Shapes Behaviour")
  })

  it("renders summary text", () => {
    render(<InsightCard {...defaultProps} />)
    expect(screen.getByText(defaultProps.summary)).toBeInTheDocument()
  })

  it("renders a Read More link pointing to the correct href", () => {
    render(<InsightCard {...defaultProps} />)
    const link = screen.getByRole("link", { name: /read more/i })
    expect(link).toHaveAttribute("href", "/insights/space-shapes-behaviour")
  })
})

describe("InsightCard — image", () => {
  it("renders image with the provided src and alt", () => {
    render(<InsightCard {...defaultProps} />)
    const img = screen.getByRole("img")
    expect(img).toHaveAttribute("src", "/images/insight.jpg")
    expect(img).toHaveAttribute("alt", "Why Space Shapes Behaviour")
  })

  it("defaults to lazy loading", () => {
    render(<InsightCard {...defaultProps} />)
    const img = screen.getByRole("img")
    expect(img).toHaveAttribute("loading", "lazy")
    expect(img).toHaveAttribute("decoding", "async")
  })

  it("accepts eager loading for above-the-fold use", () => {
    render(<InsightCard {...defaultProps} loading="eager" />)
    const img = screen.getByRole("img")
    expect(img).toHaveAttribute("loading", "eager")
  })

  it("image has aspect-ratio and object-cover classes", () => {
    render(<InsightCard {...defaultProps} />)
    const img = screen.getByRole("img")
    expect(img.className).toContain("aspect-[16/9]")
    expect(img.className).toContain("object-cover")
  })
})

describe("InsightCard — className prop", () => {
  it("merges extra className onto root element", () => {
    const { container } = render(
      <InsightCard {...defaultProps} className="col-span-2" />
    )
    const root = container.firstElementChild!
    expect(root.className).toContain("col-span-2")
    expect(root.className).toContain("flex-col")
  })
})
