import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { TeamCard } from "../team-card"

const defaultProps = {
  imageSrc: "/images/team/alice.jpg",
  name: "Alice Mbeki",
  role: "Principal Architect",
  bioExcerpt: "Alice leads our residential portfolio with a focus on human-centred design.",
}

describe("TeamCard — structure", () => {
  it("renders with base layout classes", () => {
    const { container } = render(<TeamCard {...defaultProps} />)
    const root = container.firstElementChild!
    expect(root.className).toMatchSnapshot()
  })

  it("root element has group and flex-col classes", () => {
    const { container } = render(<TeamCard {...defaultProps} />)
    const root = container.firstElementChild!
    expect(root.className).toContain("group")
    expect(root.className).toContain("flex")
    expect(root.className).toContain("flex-col")
  })

  it("merges extra className onto root element", () => {
    const { container } = render(
      <TeamCard {...defaultProps} className="col-span-2" />
    )
    const root = container.firstElementChild!
    expect(root.className).toContain("col-span-2")
    expect(root.className).toContain("flex-col")
  })
})

describe("TeamCard — image", () => {
  it("renders image with the provided src", () => {
    render(<TeamCard {...defaultProps} />)
    const img = screen.getByRole("img")
    expect(img).toHaveAttribute("src", "/images/team/alice.jpg")
  })

  it("renders image with name as alt text", () => {
    render(<TeamCard {...defaultProps} />)
    const img = screen.getByRole("img")
    expect(img).toHaveAttribute("alt", "Alice Mbeki")
  })

  it("defaults to lazy loading", () => {
    render(<TeamCard {...defaultProps} />)
    const img = screen.getByRole("img")
    expect(img).toHaveAttribute("loading", "lazy")
    expect(img).toHaveAttribute("decoding", "async")
  })

  it("accepts eager loading for above-the-fold use", () => {
    render(<TeamCard {...defaultProps} loading="eager" />)
    const img = screen.getByRole("img")
    expect(img).toHaveAttribute("loading", "eager")
  })

  it("image has object-cover class", () => {
    render(<TeamCard {...defaultProps} />)
    const img = screen.getByRole("img")
    expect(img.className).toContain("object-cover")
  })

  it("image wrapper has portrait aspect ratio", () => {
    render(<TeamCard {...defaultProps} />)
    const img = screen.getByRole("img")
    expect(img.parentElement!.className).toContain("aspect-[3/4]")
  })

  it("image wrapper clips overflow", () => {
    render(<TeamCard {...defaultProps} />)
    const img = screen.getByRole("img")
    expect(img.parentElement!.className).toContain("overflow-hidden")
  })
})

describe("TeamCard — content", () => {
  it("renders name in an h4 heading", () => {
    render(<TeamCard {...defaultProps} />)
    const heading = screen.getByRole("heading", { level: 4 })
    expect(heading).toHaveTextContent("Alice Mbeki")
  })

  it("renders role with uppercase tracking classes", () => {
    render(<TeamCard {...defaultProps} />)
    const role = screen.getByText("Principal Architect")
    expect(role.className).toContain("uppercase")
    expect(role.className).toContain("tracking-wider")
  })

  it("renders bio excerpt text", () => {
    render(<TeamCard {...defaultProps} />)
    expect(screen.getByText(defaultProps.bioExcerpt)).toBeInTheDocument()
  })

  it("bio excerpt has line-clamp-3 class", () => {
    render(<TeamCard {...defaultProps} />)
    const bio = screen.getByText(defaultProps.bioExcerpt)
    expect(bio.className).toContain("line-clamp-3")
  })
})

describe("TeamCard — View Profile button", () => {
  it("does not render the button when onViewProfile is omitted", () => {
    render(<TeamCard {...defaultProps} />)
    expect(screen.queryByRole("button", { name: /view profile/i })).toBeNull()
  })

  it("renders the View Profile button when onViewProfile is provided", () => {
    render(<TeamCard {...defaultProps} onViewProfile={() => {}} />)
    expect(screen.getByRole("button", { name: /view profile/i })).toBeInTheDocument()
  })

  it("calls onViewProfile when the button is clicked", async () => {
    const handler = vi.fn()
    render(<TeamCard {...defaultProps} onViewProfile={handler} />)
    await userEvent.click(screen.getByRole("button", { name: /view profile/i }))
    expect(handler).toHaveBeenCalledTimes(1)
  })
})
