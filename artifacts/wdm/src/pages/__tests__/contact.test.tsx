import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import Contact from "../contact"

vi.mock("wouter", () => ({
  Link: ({ href, children, className }: {
    href: string
    children: React.ReactNode
    className?: string
  }) => <a href={href} className={className}>{children}</a>,
  useLocation: () => ["/contact"],
}))

describe("Contact page — smoke render", () => {
  it("mounts without throwing", () => {
    expect(() => render(<Contact />)).not.toThrow()
  })

  it("renders the page heading", () => {
    render(<Contact />)
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Let's start a conversation.")
  })

  it("renders the Navigation component", () => {
    render(<Contact />)
    expect(screen.getByText("Why Design Matters")).toBeInTheDocument()
  })

  it("renders the Footer component", () => {
    render(<Contact />)
    expect(screen.getByRole("contentinfo")).toBeInTheDocument()
  })

  it("has a main content area", () => {
    render(<Contact />)
    expect(screen.getByRole("main")).toBeInTheDocument()
  })
})

describe("Contact page — form fields", () => {
  it("renders the Name field", () => {
    render(<Contact />)
    expect(screen.getByLabelText(/name \*/i)).toBeInTheDocument()
  })

  it("renders the Organisation field", () => {
    render(<Contact />)
    expect(screen.getByLabelText(/organisation/i)).toBeInTheDocument()
  })

  it("renders the Email field", () => {
    render(<Contact />)
    expect(screen.getByLabelText(/email \*/i)).toBeInTheDocument()
  })

  it("renders the Phone field", () => {
    render(<Contact />)
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument()
  })

  it("renders the Project Type select", () => {
    render(<Contact />)
    expect(screen.getByLabelText(/project type/i)).toBeInTheDocument()
  })

  it("renders the Sector select", () => {
    render(<Contact />)
    expect(screen.getByLabelText(/sector/i)).toBeInTheDocument()
  })

  it("renders the Message textarea", () => {
    render(<Contact />)
    expect(screen.getByLabelText(/message \*/i)).toBeInTheDocument()
  })

  it("renders the Send Message submit button", () => {
    render(<Contact />)
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument()
  })
})

describe("Contact page — validation", () => {
  it("shows error messages when submitted with empty required fields", () => {
    render(<Contact />)
    fireEvent.click(screen.getByRole("button", { name: /send message/i }))
    expect(screen.getByText("Name is required.")).toBeInTheDocument()
    expect(screen.getByText("Email address is required.")).toBeInTheDocument()
    expect(screen.getByText("Message is required.")).toBeInTheDocument()
  })

  it("shows email format error when invalid email is submitted", () => {
    render(<Contact />)
    fireEvent.change(screen.getByLabelText(/name \*/i), { target: { value: "Alice" } })
    fireEvent.change(screen.getByLabelText(/email \*/i), { target: { value: "not-an-email" } })
    fireEvent.change(screen.getByLabelText(/message \*/i), { target: { value: "Hello" } })
    fireEvent.click(screen.getByRole("button", { name: /send message/i }))
    expect(screen.getByText("Please enter a valid email address.")).toBeInTheDocument()
  })

  it("does not show success state when validation fails", () => {
    render(<Contact />)
    fireEvent.click(screen.getByRole("button", { name: /send message/i }))
    expect(screen.queryByText(/thank you/i)).not.toBeInTheDocument()
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument()
  })
})

describe("Contact page — success state", () => {
  it("shows success message after valid form submission", () => {
    render(<Contact />)
    fireEvent.change(screen.getByLabelText(/name \*/i), { target: { value: "Alice Smith" } })
    fireEvent.change(screen.getByLabelText(/email \*/i), { target: { value: "alice@example.com" } })
    fireEvent.change(screen.getByLabelText(/message \*/i), { target: { value: "I have a project to discuss." } })
    fireEvent.click(screen.getByRole("button", { name: /send message/i }))
    expect(screen.getByText("Thank you — we'll be in touch.")).toBeInTheDocument()
    expect(screen.queryByRole("button", { name: /send message/i })).not.toBeInTheDocument()
  })
})

describe("Contact page — studio details", () => {
  it("renders the studio address", () => {
    render(<Contact />)
    const matches = screen.getAllByText(/Lichfield/)
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })

  it("renders the phone number", () => {
    render(<Contact />)
    expect(screen.getByText("01543 886175")).toBeInTheDocument()
  })
})

describe("Contact page — alternative CTAs", () => {
  it("renders 'Explore Our Work' link to /projects", () => {
    render(<Contact />)
    const link = screen.getByRole("link", { name: /explore our work/i })
    expect(link).toHaveAttribute("href", "/projects")
  })

  it("renders 'Read Our Insights' link to /insights", () => {
    render(<Contact />)
    const link = screen.getByRole("link", { name: /read our insights/i })
    expect(link).toHaveAttribute("href", "/insights")
  })

  it("renders 'Learn About Us' link to /about", () => {
    render(<Contact />)
    const link = screen.getByRole("link", { name: /learn about us/i })
    expect(link).toHaveAttribute("href", "/about")
  })
})
