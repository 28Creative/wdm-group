import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { ImageBand } from "../image-band"

const defaultProps = {
  imageSrc: "/images/hero.jpg",
  imageAlt: "A wide architecture shot",
}

describe("ImageBand — structure", () => {
  it("renders with base layout classes", () => {
    const { container } = render(<ImageBand {...defaultProps} />)
    const root = container.firstElementChild!
    expect(root.className).toMatchSnapshot()
  })

  it("root element has relative, w-full, overflow-hidden classes", () => {
    const { container } = render(<ImageBand {...defaultProps} />)
    const root = container.firstElementChild!
    expect(root.className).toContain("relative")
    expect(root.className).toContain("w-full")
    expect(root.className).toContain("overflow-hidden")
  })

  it("includes min-h constraint class", () => {
    const { container } = render(<ImageBand {...defaultProps} />)
    const root = container.firstElementChild!
    expect(root.className).toContain("min-h-[400px]")
  })

  it("merges extra className onto root element", () => {
    const { container } = render(
      <ImageBand {...defaultProps} className="mt-16 mb-8" />
    )
    const root = container.firstElementChild!
    expect(root.className).toContain("mt-16")
    expect(root.className).toContain("mb-8")
    expect(root.className).toContain("relative")
  })
})

describe("ImageBand — image", () => {
  it("renders image with the provided src", () => {
    render(<ImageBand {...defaultProps} />)
    const img = screen.getByRole("img")
    expect(img).toHaveAttribute("src", "/images/hero.jpg")
  })

  it("renders image with the provided alt text", () => {
    render(<ImageBand {...defaultProps} />)
    const img = screen.getByRole("img")
    expect(img).toHaveAttribute("alt", "A wide architecture shot")
  })

  it("defaults imageAlt to empty string when omitted", () => {
    const { container } = render(<ImageBand imageSrc="/images/hero.jpg" />)
    const img = container.querySelector("img")!
    expect(img).toHaveAttribute("alt", "")
  })

  it("defaults to lazy loading", () => {
    render(<ImageBand {...defaultProps} />)
    const img = screen.getByRole("img")
    expect(img).toHaveAttribute("loading", "lazy")
    expect(img).toHaveAttribute("decoding", "async")
  })

  it("accepts eager loading for above-the-fold use", () => {
    render(<ImageBand {...defaultProps} loading="eager" />)
    const img = screen.getByRole("img")
    expect(img).toHaveAttribute("loading", "eager")
  })

  it("image has object-cover and absolute positioning classes", () => {
    render(<ImageBand {...defaultProps} />)
    const img = screen.getByRole("img")
    expect(img.className).toContain("object-cover")
    expect(img.className).toContain("absolute")
    expect(img.className).toContain("inset-0")
  })

  it("image fills full width and height", () => {
    render(<ImageBand {...defaultProps} />)
    const img = screen.getByRole("img")
    expect(img.className).toContain("w-full")
    expect(img.className).toContain("h-full")
  })
})

describe("ImageBand — overlay", () => {
  it("renders a semi-transparent overlay div", () => {
    const { container } = render(<ImageBand {...defaultProps} />)
    const root = container.firstElementChild!
    const overlay = root.querySelector("div")
    expect(overlay).not.toBeNull()
    expect(overlay!.className).toContain("bg-black/40")
  })

  it("overlay has absolute positioning covering the band", () => {
    const { container } = render(<ImageBand {...defaultProps} />)
    const root = container.firstElementChild!
    const overlay = root.querySelector("div")!
    expect(overlay.className).toContain("absolute")
    expect(overlay.className).toContain("inset-0")
  })
})

describe("ImageBand — children", () => {
  it("renders children when provided", () => {
    render(
      <ImageBand {...defaultProps}>
        <h1>Hero headline</h1>
      </ImageBand>
    )
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Hero headline")
  })

  it("does not render a children wrapper when no children are provided", () => {
    const { container } = render(<ImageBand {...defaultProps} />)
    const root = container.firstElementChild!
    const divs = root.querySelectorAll("div")
    expect(divs.length).toBe(1)
  })

  it("children wrapper has centering flex classes", () => {
    const { container } = render(
      <ImageBand {...defaultProps}>
        <span>content</span>
      </ImageBand>
    )
    const root = container.firstElementChild!
    const wrappers = root.querySelectorAll("div")
    const contentWrapper = wrappers[1]
    expect(contentWrapper.className).toContain("flex")
    expect(contentWrapper.className).toContain("items-center")
    expect(contentWrapper.className).toContain("justify-center")
  })
})
