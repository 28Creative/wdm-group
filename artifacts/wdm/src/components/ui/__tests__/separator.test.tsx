import { describe, it, expect } from "vitest"
import { render } from "@testing-library/react"
import { Separator } from "../separator"

describe("Separator classes", () => {
  it("horizontal orientation snapshot", () => {
    const { container } = render(<Separator orientation="horizontal" />)
    const el = container.firstElementChild!
    expect(el.className).toMatchSnapshot()
  })

  it("vertical orientation snapshot", () => {
    const { container } = render(<Separator orientation="vertical" />)
    const el = container.firstElementChild!
    expect(el.className).toMatchSnapshot()
  })

  it("defaults to horizontal", () => {
    const { container } = render(<Separator />)
    const el = container.firstElementChild!
    expect(el.className).toContain("h-[1px]")
    expect(el.className).toContain("w-full")
  })

  it("vertical uses correct dimension classes", () => {
    const { container } = render(<Separator orientation="vertical" />)
    const el = container.firstElementChild!
    expect(el.className).toContain("h-full")
    expect(el.className).toContain("w-[1px]")
  })

  it("always contains shrink-0 and bg-border", () => {
    const { container: hContainer } = render(<Separator orientation="horizontal" />)
    const { container: vContainer } = render(<Separator orientation="vertical" />)
    for (const el of [hContainer.firstElementChild!, vContainer.firstElementChild!]) {
      expect(el.className).toContain("shrink-0")
      expect(el.className).toContain("bg-border")
    }
  })

  it("extra className is merged into output", () => {
    const { container } = render(<Separator className="my-4" />)
    const el = container.firstElementChild!
    expect(el.className).toContain("my-4")
  })
})
