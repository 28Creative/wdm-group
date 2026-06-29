import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "../pagination"

describe("PaginationLink", () => {
  it("applies secondary variant classes when isActive is true", () => {
    render(<PaginationLink isActive href="#">2</PaginationLink>)

    const link = screen.getByText("2")
    expect(link.className).toContain("bg-[var(--color-graphite)]")
  })

  it("applies ghost variant classes when isActive is false", () => {
    render(<PaginationLink href="#">3</PaginationLink>)

    const link = screen.getByText("3")
    expect(link.className).toContain("bg-transparent")
  })

  it("sets aria-current='page' when isActive", () => {
    render(<PaginationLink isActive href="#">2</PaginationLink>)

    const link = screen.getByText("2")
    expect(link).toHaveAttribute("aria-current", "page")
  })

  it("omits aria-current when not active", () => {
    render(<PaginationLink href="#">3</PaginationLink>)

    const link = screen.getByText("3")
    expect(link).not.toHaveAttribute("aria-current")
  })

  it("active and inactive links have different variant classes", () => {
    render(
      <>
        <PaginationLink isActive href="#" data-testid="active">
          2
        </PaginationLink>
        <PaginationLink href="#" data-testid="inactive">
          3
        </PaginationLink>
      </>
    )

    const activeLink = screen.getByText("2")
    const inactiveLink = screen.getByText("3")
    expect(activeLink.className).not.toEqual(inactiveLink.className)
  })
})

describe("Pagination", () => {
  it("renders with navigation role and label", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )

    const nav = screen.getByRole("navigation")
    expect(nav).toBeInTheDocument()
    expect(nav).toHaveAttribute("aria-label", "pagination")
  })

  it("renders previous and next links with correct labels", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )

    expect(screen.getByText("Previous")).toBeInTheDocument()
    expect(screen.getByText("Next")).toBeInTheDocument()
  })
})
