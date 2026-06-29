import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import React from "react"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "../field"

describe("Field", () => {
  it("renders with data-slot=field and role=group", () => {
    const { container } = render(<Field>content</Field>)
    const el = container.querySelector("[data-slot=field]")
    expect(el).not.toBeNull()
    expect(el).toHaveAttribute("role", "group")
  })

  it("defaults to vertical orientation", () => {
    const { container } = render(<Field>content</Field>)
    const el = container.querySelector("[data-slot=field]")
    expect(el).toHaveAttribute("data-orientation", "vertical")
    expect(el?.className).toContain("flex-col")
  })

  it("applies horizontal orientation classes", () => {
    const { container } = render(<Field orientation="horizontal">content</Field>)
    const el = container.querySelector("[data-slot=field]")
    expect(el).toHaveAttribute("data-orientation", "horizontal")
    expect(el?.className).toContain("flex-row")
    expect(el?.className).toContain("items-center")
  })

  it("applies responsive orientation classes", () => {
    const { container } = render(<Field orientation="responsive">content</Field>)
    const el = container.querySelector("[data-slot=field]")
    expect(el).toHaveAttribute("data-orientation", "responsive")
    expect(el?.className).toContain("flex-col")
  })

  it("merges extra className", () => {
    const { container } = render(<Field className="custom-class">content</Field>)
    const el = container.querySelector("[data-slot=field]")
    expect(el?.className).toContain("custom-class")
  })

  it("always includes base layout classes", () => {
    const { container } = render(<Field>content</Field>)
    const el = container.querySelector("[data-slot=field]")
    expect(el?.className).toContain("flex")
    expect(el?.className).toContain("w-full")
    expect(el?.className).toContain("gap-3")
  })
})

describe("FieldError", () => {
  it("returns null when no children and no errors", () => {
    const { container } = render(<FieldError />)
    expect(container.firstChild).toBeNull()
  })

  it("renders with role=alert and data-slot=field-error", () => {
    const { container } = render(<FieldError>Something went wrong</FieldError>)
    const el = container.querySelector("[data-slot=field-error]")
    expect(el).not.toBeNull()
    expect(el).toHaveAttribute("role", "alert")
  })

  it("renders children text when provided", () => {
    render(<FieldError>This field is required</FieldError>)
    expect(screen.getByRole("alert")).toHaveTextContent("This field is required")
  })

  it("renders single error message from errors array", () => {
    render(<FieldError errors={[{ message: "Invalid email address" }]} />)
    expect(screen.getByRole("alert")).toHaveTextContent("Invalid email address")
  })

  it("renders multiple errors as a list", () => {
    const errors = [
      { message: "Too short" },
      { message: "Must contain a number" },
    ]
    const { container } = render(<FieldError errors={errors} />)
    const list = container.querySelector("ul")
    expect(list).not.toBeNull()
    const items = container.querySelectorAll("li")
    expect(items).toHaveLength(2)
    expect(items[0]).toHaveTextContent("Too short")
    expect(items[1]).toHaveTextContent("Must contain a number")
  })

  it("prefers children over errors when both are provided", () => {
    render(
      <FieldError errors={[{ message: "From errors array" }]}>
        From children
      </FieldError>
    )
    expect(screen.getByRole("alert")).toHaveTextContent("From children")
    expect(screen.queryByText("From errors array")).toBeNull()
  })

  it("renders an empty list when errors array is empty", () => {
    const { container } = render(<FieldError errors={[]} />)
    expect(container.querySelector("ul")).not.toBeNull()
    expect(container.querySelectorAll("li")).toHaveLength(0)
  })

  it("renders an empty list when errors have no messages", () => {
    const { container } = render(<FieldError errors={[undefined, {}]} />)
    expect(container.querySelector("ul")).not.toBeNull()
    expect(container.querySelectorAll("li")).toHaveLength(0)
  })

  it("applies destructive text class", () => {
    const { container } = render(<FieldError>Error</FieldError>)
    const el = container.querySelector("[data-slot=field-error]")
    expect(el?.className).toContain("text-destructive")
  })

  it("merges extra className", () => {
    const { container } = render(
      <FieldError className="mt-2">Error</FieldError>
    )
    const el = container.querySelector("[data-slot=field-error]")
    expect(el?.className).toContain("mt-2")
  })
})

describe("FieldGroup", () => {
  it("renders with data-slot=field-group", () => {
    const { container } = render(<FieldGroup>content</FieldGroup>)
    expect(container.querySelector("[data-slot=field-group]")).not.toBeNull()
  })

  it("applies flex column layout", () => {
    const { container } = render(<FieldGroup>content</FieldGroup>)
    const el = container.querySelector("[data-slot=field-group]")
    expect(el?.className).toContain("flex")
    expect(el?.className).toContain("flex-col")
    expect(el?.className).toContain("w-full")
  })

  it("merges extra className", () => {
    const { container } = render(<FieldGroup className="p-4">content</FieldGroup>)
    const el = container.querySelector("[data-slot=field-group]")
    expect(el?.className).toContain("p-4")
  })
})

describe("FieldDescription", () => {
  it("renders a <p> with data-slot=field-description", () => {
    const { container } = render(
      <FieldDescription>Helper text</FieldDescription>
    )
    const el = container.querySelector("p[data-slot=field-description]")
    expect(el).not.toBeNull()
    expect(el).toHaveTextContent("Helper text")
  })

  it("applies muted text and size classes", () => {
    const { container } = render(
      <FieldDescription>Helper text</FieldDescription>
    )
    const el = container.querySelector("[data-slot=field-description]")
    expect(el?.className).toContain("text-muted-foreground")
    expect(el?.className).toContain("text-sm")
  })
})

describe("FieldContent", () => {
  it("renders with data-slot=field-content", () => {
    const { container } = render(<FieldContent>content</FieldContent>)
    expect(container.querySelector("[data-slot=field-content]")).not.toBeNull()
  })

  it("applies flex column layout with gap", () => {
    const { container } = render(<FieldContent>content</FieldContent>)
    const el = container.querySelector("[data-slot=field-content]")
    expect(el?.className).toContain("flex")
    expect(el?.className).toContain("flex-col")
    expect(el?.className).toContain("gap-1.5")
  })
})

describe("FieldTitle", () => {
  it("renders with data-slot=field-label", () => {
    const { container } = render(<FieldTitle>Name</FieldTitle>)
    expect(container.querySelector("[data-slot=field-label]")).not.toBeNull()
  })

  it("applies font-medium and text-sm classes", () => {
    const { container } = render(<FieldTitle>Name</FieldTitle>)
    const el = container.querySelector("[data-slot=field-label]")
    expect(el?.className).toContain("font-medium")
    expect(el?.className).toContain("text-sm")
  })
})

describe("FieldSet", () => {
  it("renders a <fieldset> with data-slot=field-set", () => {
    const { container } = render(<FieldSet><legend>Group</legend></FieldSet>)
    const el = container.querySelector("fieldset[data-slot=field-set]")
    expect(el).not.toBeNull()
  })

  it("applies flex column gap layout", () => {
    const { container } = render(<FieldSet><legend>Group</legend></FieldSet>)
    const el = container.querySelector("[data-slot=field-set]")
    expect(el?.className).toContain("flex")
    expect(el?.className).toContain("flex-col")
    expect(el?.className).toContain("gap-6")
  })
})

describe("FieldLegend", () => {
  it("renders a <legend> with data-slot=field-legend", () => {
    const { container } = render(
      <fieldset>
        <FieldLegend>Contact Details</FieldLegend>
      </fieldset>
    )
    const el = container.querySelector("legend[data-slot=field-legend]")
    expect(el).not.toBeNull()
    expect(el).toHaveTextContent("Contact Details")
  })

  it("defaults to legend variant", () => {
    const { container } = render(
      <fieldset>
        <FieldLegend>Contact Details</FieldLegend>
      </fieldset>
    )
    const el = container.querySelector("[data-slot=field-legend]")
    expect(el).toHaveAttribute("data-variant", "legend")
  })

  it("accepts label variant", () => {
    const { container } = render(
      <fieldset>
        <FieldLegend variant="label">Contact Details</FieldLegend>
      </fieldset>
    )
    const el = container.querySelector("[data-slot=field-legend]")
    expect(el).toHaveAttribute("data-variant", "label")
  })

  it("applies font-medium class", () => {
    const { container } = render(
      <fieldset>
        <FieldLegend>Title</FieldLegend>
      </fieldset>
    )
    const el = container.querySelector("[data-slot=field-legend]")
    expect(el?.className).toContain("font-medium")
  })
})

describe("Field + FieldError slot composition", () => {
  it("renders Field containing FieldError without crashing", () => {
    const { container } = render(
      <Field>
        <FieldError errors={[{ message: "Required" }]} />
      </Field>
    )
    expect(container.querySelector("[data-slot=field]")).not.toBeNull()
    expect(screen.getByRole("alert")).toHaveTextContent("Required")
  })

  it("renders Field with FieldContent and FieldDescription without crashing", () => {
    const { container } = render(
      <Field>
        <FieldContent>
          <FieldDescription>Enter your name</FieldDescription>
        </FieldContent>
      </Field>
    )
    expect(container.querySelector("[data-slot=field-content]")).not.toBeNull()
    expect(container.querySelector("[data-slot=field-description]")).not.toBeNull()
  })

  it("renders a full vertical field stack without crashing", () => {
    const { container } = render(
      <FieldGroup>
        <Field>
          <FieldTitle>Email</FieldTitle>
          <FieldContent>
            <FieldDescription>We will never share your email.</FieldDescription>
            <FieldError errors={[{ message: "Invalid email" }]} />
          </FieldContent>
        </Field>
      </FieldGroup>
    )
    expect(container.querySelector("[data-slot=field-group]")).not.toBeNull()
    expect(container.querySelector("[data-slot=field]")).not.toBeNull()
    expect(container.querySelector("[data-slot=field-content]")).not.toBeNull()
    expect(container.querySelector("[data-slot=field-description]")).not.toBeNull()
    expect(screen.getByRole("alert")).toHaveTextContent("Invalid email")
  })
})
