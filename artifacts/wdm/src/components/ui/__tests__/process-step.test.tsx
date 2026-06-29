import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { CircleCheck } from "lucide-react"
import { ProcessStep } from "../process-step"

const defaultProps = {
  number: "01",
  title: "Discovery",
  descriptor: "We listen carefully to understand your goals, site, and constraints.",
  icon: <CircleCheck data-testid="step-icon" />,
}

describe("ProcessStep — structure", () => {
  it("renders with base layout classes", () => {
    const { container } = render(<ProcessStep {...defaultProps} />)
    const root = container.firstElementChild!
    expect(root.className).toMatchSnapshot()
  })

  it("root element has group, flex, and flex-col classes", () => {
    const { container } = render(<ProcessStep {...defaultProps} />)
    const root = container.firstElementChild!
    expect(root.className).toContain("group")
    expect(root.className).toContain("flex")
    expect(root.className).toContain("flex-col")
  })

  it("root element has gap-4 class", () => {
    const { container } = render(<ProcessStep {...defaultProps} />)
    const root = container.firstElementChild!
    expect(root.className).toContain("gap-4")
  })

  it("merges extra className onto root element", () => {
    const { container } = render(
      <ProcessStep {...defaultProps} className="col-span-2 mt-8" />
    )
    const root = container.firstElementChild!
    expect(root.className).toContain("col-span-2")
    expect(root.className).toContain("mt-8")
    expect(root.className).toContain("flex-col")
  })
})

describe("ProcessStep — icon box", () => {
  it("renders the icon element", () => {
    render(<ProcessStep {...defaultProps} />)
    expect(screen.getByTestId("step-icon")).toBeInTheDocument()
  })

  it("icon wrapper has fixed w-12 h-12 dimensions", () => {
    render(<ProcessStep {...defaultProps} />)
    const iconWrapper = screen.getByTestId("step-icon").parentElement!
    expect(iconWrapper.className).toContain("w-12")
    expect(iconWrapper.className).toContain("h-12")
  })

  it("icon wrapper has stone background class", () => {
    render(<ProcessStep {...defaultProps} />)
    const iconWrapper = screen.getByTestId("step-icon").parentElement!
    expect(iconWrapper.className).toContain("bg-[var(--color-stone)]")
  })

  it("icon wrapper transitions background on group hover", () => {
    render(<ProcessStep {...defaultProps} />)
    const iconWrapper = screen.getByTestId("step-icon").parentElement!
    expect(iconWrapper.className).toContain("group-hover:bg-[var(--color-yellow)]")
    expect(iconWrapper.className).toContain("transition-colors")
  })

  it("icon wrapper centers its content", () => {
    render(<ProcessStep {...defaultProps} />)
    const iconWrapper = screen.getByTestId("step-icon").parentElement!
    expect(iconWrapper.className).toContain("flex")
    expect(iconWrapper.className).toContain("items-center")
    expect(iconWrapper.className).toContain("justify-center")
  })
})

describe("ProcessStep — number", () => {
  it("renders the step number", () => {
    render(<ProcessStep {...defaultProps} />)
    expect(screen.getByText("01")).toBeInTheDocument()
  })

  it("number has large heading typography classes", () => {
    render(<ProcessStep {...defaultProps} />)
    const num = screen.getByText("01")
    expect(num.className).toContain("font-heading")
    expect(num.className).toContain("font-bold")
    expect(num.className).toContain("text-3xl")
  })

  it("number has muted graphite colour class", () => {
    render(<ProcessStep {...defaultProps} />)
    const num = screen.getByText("01")
    expect(num.className).toContain("text-[var(--color-graphite)]")
  })
})

describe("ProcessStep — content", () => {
  it("renders title in an h4 heading", () => {
    render(<ProcessStep {...defaultProps} />)
    const heading = screen.getByRole("heading", { level: 4 })
    expect(heading).toHaveTextContent("Discovery")
  })

  it("title heading has semibold heading classes", () => {
    render(<ProcessStep {...defaultProps} />)
    const heading = screen.getByRole("heading", { level: 4 })
    expect(heading.className).toContain("font-heading")
    expect(heading.className).toContain("font-semibold")
    expect(heading.className).toContain("text-xl")
  })

  it("renders descriptor text", () => {
    render(<ProcessStep {...defaultProps} />)
    expect(screen.getByText(defaultProps.descriptor)).toBeInTheDocument()
  })

  it("descriptor has small relaxed text classes", () => {
    render(<ProcessStep {...defaultProps} />)
    const desc = screen.getByText(defaultProps.descriptor)
    expect(desc.tagName).toBe("P")
    expect(desc.className).toContain("text-sm")
    expect(desc.className).toContain("leading-relaxed")
  })

  it("descriptor has muted graphite colour class", () => {
    render(<ProcessStep {...defaultProps} />)
    const desc = screen.getByText(defaultProps.descriptor)
    expect(desc.className).toContain("text-[var(--color-graphite)]")
  })
})

describe("ProcessStep — prop variants", () => {
  it("renders a different number correctly", () => {
    render(<ProcessStep {...defaultProps} number="03" />)
    expect(screen.getByText("03")).toBeInTheDocument()
  })

  it("renders a different title correctly", () => {
    render(<ProcessStep {...defaultProps} title="Delivery" />)
    expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent("Delivery")
  })

  it("renders a different descriptor correctly", () => {
    render(<ProcessStep {...defaultProps} descriptor="We hand over the final build." />)
    expect(screen.getByText("We hand over the final build.")).toBeInTheDocument()
  })

  it("renders a different icon node", () => {
    const icon = <svg data-testid="custom-icon" />
    render(<ProcessStep {...defaultProps} icon={icon} />)
    expect(screen.getByTestId("custom-icon")).toBeInTheDocument()
  })
})
