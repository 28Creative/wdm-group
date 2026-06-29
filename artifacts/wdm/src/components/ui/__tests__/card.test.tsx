import { describe, it, expect } from "vitest"
import { render } from "@testing-library/react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../card"

describe("Card", () => {
  it("renders with base layout classes", () => {
    const { container } = render(<Card />)
    const el = container.firstElementChild!
    expect(el.className).toMatchSnapshot()
  })

  it("contains rounded, border, and shadow classes", () => {
    const { container } = render(<Card />)
    const el = container.firstElementChild!
    expect(el.className).toContain("rounded-xl")
    expect(el.className).toContain("border")
    expect(el.className).toContain("shadow")
  })

  it("merges extra className", () => {
    const { container } = render(<Card className="my-custom-class" />)
    const el = container.firstElementChild!
    expect(el.className).toContain("my-custom-class")
    expect(el.className).toContain("rounded-xl")
  })

  it("renders children", () => {
    const { getByText } = render(<Card>Hello card</Card>)
    expect(getByText("Hello card")).toBeInTheDocument()
  })
})

describe("CardHeader", () => {
  it("renders with base layout classes", () => {
    const { container } = render(<CardHeader />)
    const el = container.firstElementChild!
    expect(el.className).toMatchSnapshot()
  })

  it("contains flex-col and padding classes", () => {
    const { container } = render(<CardHeader />)
    const el = container.firstElementChild!
    expect(el.className).toContain("flex")
    expect(el.className).toContain("flex-col")
    expect(el.className).toContain("p-6")
  })

  it("merges extra className", () => {
    const { container } = render(<CardHeader className="extra" />)
    const el = container.firstElementChild!
    expect(el.className).toContain("extra")
    expect(el.className).toContain("p-6")
  })
})

describe("CardTitle", () => {
  it("renders with base typography classes", () => {
    const { container } = render(<CardTitle />)
    const el = container.firstElementChild!
    expect(el.className).toMatchSnapshot()
  })

  it("contains font-semibold and tracking classes", () => {
    const { container } = render(<CardTitle />)
    const el = container.firstElementChild!
    expect(el.className).toContain("font-semibold")
    expect(el.className).toContain("leading-none")
    expect(el.className).toContain("tracking-tight")
  })

  it("renders children", () => {
    const { getByText } = render(<CardTitle>Project Title</CardTitle>)
    expect(getByText("Project Title")).toBeInTheDocument()
  })
})

describe("CardDescription", () => {
  it("renders with base typography classes", () => {
    const { container } = render(<CardDescription />)
    const el = container.firstElementChild!
    expect(el.className).toMatchSnapshot()
  })

  it("contains text-sm and muted-foreground classes", () => {
    const { container } = render(<CardDescription />)
    const el = container.firstElementChild!
    expect(el.className).toContain("text-sm")
    expect(el.className).toContain("text-muted-foreground")
  })
})

describe("CardContent", () => {
  it("renders with base padding classes", () => {
    const { container } = render(<CardContent />)
    const el = container.firstElementChild!
    expect(el.className).toMatchSnapshot()
  })

  it("contains p-6 and pt-0 classes", () => {
    const { container } = render(<CardContent />)
    const el = container.firstElementChild!
    expect(el.className).toContain("p-6")
    expect(el.className).toContain("pt-0")
  })

  it("merges extra className", () => {
    const { container } = render(<CardContent className="overflow-hidden" />)
    const el = container.firstElementChild!
    expect(el.className).toContain("overflow-hidden")
    expect(el.className).toContain("p-6")
  })
})

describe("CardFooter", () => {
  it("renders with base layout classes", () => {
    const { container } = render(<CardFooter />)
    const el = container.firstElementChild!
    expect(el.className).toMatchSnapshot()
  })

  it("contains flex, items-center, padding classes", () => {
    const { container } = render(<CardFooter />)
    const el = container.firstElementChild!
    expect(el.className).toContain("flex")
    expect(el.className).toContain("items-center")
    expect(el.className).toContain("p-6")
    expect(el.className).toContain("pt-0")
  })

  it("merges extra className", () => {
    const { container } = render(<CardFooter className="justify-end" />)
    const el = container.firstElementChild!
    expect(el.className).toContain("justify-end")
  })
})
