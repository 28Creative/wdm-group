import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import { Card } from "../card-custom"

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
  title: "Civic Centre Renewal",
  body: "A landmark public building restored for a new generation of civic life.",
}

const withImageProps = {
  ...defaultProps,
  imageSrc: "/images/projects/civic-centre.jpg",
  imageAlt: "Civic Centre exterior at dusk",
}

const withCtaProps = {
  ...defaultProps,
  ctaText: "View Project",
  ctaHref: "/projects/civic-centre",
}

describe("Card — structure", () => {
  it("renders with base layout classes", () => {
    const { container } = render(<Card {...defaultProps} />)
    const root = container.firstElementChild!
    expect(root.className).toMatchSnapshot()
  })

  it("root element has group, flex, flex-col, and h-full classes", () => {
    const { container } = render(<Card {...defaultProps} />)
    const root = container.firstElementChild!
    expect(root.className).toContain("group")
    expect(root.className).toContain("flex")
    expect(root.className).toContain("flex-col")
    expect(root.className).toContain("h-full")
  })

  it("root element has white background class", () => {
    const { container } = render(<Card {...defaultProps} />)
    const root = container.firstElementChild!
    expect(root.className).toContain("bg-[var(--color-white)]")
  })

  it("merges extra className onto root element", () => {
    const { container } = render(
      <Card {...defaultProps} className="border col-span-2" />
    )
    const root = container.firstElementChild!
    expect(root.className).toContain("border")
    expect(root.className).toContain("col-span-2")
    expect(root.className).toContain("flex-col")
  })
})

describe("Card — image (present)", () => {
  it("renders image with the provided src", () => {
    render(<Card {...withImageProps} />)
    const img = screen.getByRole("img")
    expect(img).toHaveAttribute("src", "/images/projects/civic-centre.jpg")
  })

  it("renders image with the provided alt text", () => {
    render(<Card {...withImageProps} />)
    const img = screen.getByRole("img")
    expect(img).toHaveAttribute("alt", "Civic Centre exterior at dusk")
  })

  it("defaults image alt to empty string when not provided", () => {
    const { container } = render(<Card {...defaultProps} imageSrc="/images/projects/civic-centre.jpg" />)
    const img = container.querySelector("img")!
    expect(img).toHaveAttribute("alt", "")
  })

  it("defaults to lazy loading", () => {
    render(<Card {...withImageProps} />)
    const img = screen.getByRole("img")
    expect(img).toHaveAttribute("loading", "lazy")
    expect(img).toHaveAttribute("decoding", "async")
  })

  it("accepts eager loading for above-the-fold use", () => {
    render(<Card {...withImageProps} loading="eager" />)
    const img = screen.getByRole("img")
    expect(img).toHaveAttribute("loading", "eager")
  })

  it("image has object-cover and h-64 classes", () => {
    render(<Card {...withImageProps} />)
    const img = screen.getByRole("img")
    expect(img.className).toContain("object-cover")
    expect(img.className).toContain("h-64")
  })

  it("image wrapper clips overflow", () => {
    render(<Card {...withImageProps} />)
    const img = screen.getByRole("img")
    expect(img.parentElement!.className).toContain("overflow-hidden")
  })

  it("image wrapper has bottom margin", () => {
    render(<Card {...withImageProps} />)
    const img = screen.getByRole("img")
    expect(img.parentElement!.className).toContain("mb-6")
  })
})

describe("Card — image (absent)", () => {
  it("does not render an img element when imageSrc is omitted", () => {
    render(<Card {...defaultProps} />)
    expect(screen.queryByRole("img")).toBeNull()
  })
})

describe("Card — rhombus clip", () => {
  it("does not apply clip-path-rhombus by default", () => {
    render(<Card {...withImageProps} />)
    const img = screen.getByRole("img")
    expect(img.className).not.toContain("clip-path-rhombus")
  })

  it("applies clip-path-rhombus when useRhombusClip is true", () => {
    render(<Card {...withImageProps} useRhombusClip />)
    const img = screen.getByRole("img")
    expect(img.className).toContain("clip-path-rhombus")
  })
})

describe("Card — content", () => {
  it("renders title in an h3 heading", () => {
    render(<Card {...defaultProps} />)
    const heading = screen.getByRole("heading", { level: 3 })
    expect(heading).toHaveTextContent("Civic Centre Renewal")
  })

  it("title has heading typography classes", () => {
    render(<Card {...defaultProps} />)
    const heading = screen.getByRole("heading", { level: 3 })
    expect(heading.className).toContain("font-heading")
    expect(heading.className).toContain("font-semibold")
    expect(heading.className).toContain("text-2xl")
  })

  it("title has graphite colour class", () => {
    render(<Card {...defaultProps} />)
    const heading = screen.getByRole("heading", { level: 3 })
    expect(heading.className).toContain("text-[var(--color-graphite)]")
  })

  it("renders body text", () => {
    render(<Card {...defaultProps} />)
    expect(screen.getByText(defaultProps.body)).toBeInTheDocument()
  })

  it("body paragraph has flex-grow class", () => {
    render(<Card {...defaultProps} />)
    const body = screen.getByText(defaultProps.body)
    expect(body.className).toContain("flex-grow")
  })
})

describe("Card — CTA link (present)", () => {
  it("renders a link with the correct href when both ctaText and ctaHref are provided", () => {
    render(<Card {...withCtaProps} />)
    const link = screen.getByRole("link", { name: /view project/i })
    expect(link).toHaveAttribute("href", "/projects/civic-centre")
  })

  it("CTA link has gold colour class", () => {
    render(<Card {...withCtaProps} />)
    const link = screen.getByRole("link", { name: /view project/i })
    expect(link.className).toContain("text-[var(--color-gold)]")
  })

  it("renders an ArrowRight icon inside the CTA link", () => {
    render(<Card {...withCtaProps} />)
    const link = screen.getByRole("link", { name: /view project/i })
    expect(link.querySelector("svg")).toBeTruthy()
  })
})

describe("Card — CTA link (absent)", () => {
  it("does not render a link when ctaHref is omitted", () => {
    render(<Card {...defaultProps} ctaText="View Project" />)
    expect(screen.queryByRole("link")).toBeNull()
  })

  it("does not render a link when ctaText is omitted", () => {
    render(<Card {...defaultProps} ctaHref="/projects/civic-centre" />)
    expect(screen.queryByRole("link")).toBeNull()
  })

  it("does not render a link when both ctaText and ctaHref are omitted", () => {
    render(<Card {...defaultProps} />)
    expect(screen.queryByRole("link")).toBeNull()
  })
})

describe("Card — prop variants", () => {
  it("renders a different title", () => {
    render(<Card {...defaultProps} title="Library Extension" />)
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent("Library Extension")
  })

  it("renders different body text", () => {
    render(<Card {...defaultProps} body="A quiet extension to an urban library." />)
    expect(screen.getByText("A quiet extension to an urban library.")).toBeInTheDocument()
  })

  it("renders different CTA text", () => {
    render(<Card {...withCtaProps} ctaText="See More" />)
    expect(screen.getByRole("link", { name: /see more/i })).toBeInTheDocument()
  })
})
