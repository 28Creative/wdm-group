import { describe, it, expect } from "vitest"
import { render } from "@testing-library/react"
import { Input } from "../input"

describe("Input classes", () => {
  it("renders with expected base classes", () => {
    const { container } = render(<Input />)
    const input = container.querySelector("input")!
    expect(input.className).toMatchSnapshot()
  })

  it("extra className is merged into output", () => {
    const { container } = render(<Input className="w-full" />)
    const input = container.querySelector("input")!
    expect(input.className).toMatchSnapshot()
  })

  it("contains sizing classes", () => {
    const { container } = render(<Input />)
    const input = container.querySelector("input")!
    expect(input.className).toContain("h-9")
    expect(input.className).toContain("px-3")
    expect(input.className).toContain("py-1")
  })

  it("contains border and shape classes", () => {
    const { container } = render(<Input />)
    const input = container.querySelector("input")!
    expect(input.className).toContain("rounded-md")
    expect(input.className).toContain("border")
  })
})
