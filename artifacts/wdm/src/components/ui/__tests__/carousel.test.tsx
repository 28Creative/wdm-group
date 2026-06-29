import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi, beforeEach } from "vitest"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../carousel"

const mockScrollPrev = vi.fn()
const mockScrollNext = vi.fn()
const mockCanScrollPrev = vi.fn()
const mockCanScrollNext = vi.fn()
const mockOn = vi.fn()
const mockOff = vi.fn()

vi.mock("embla-carousel-react", () => ({
  default: vi.fn(() => [
    vi.fn(),
    {
      canScrollPrev: mockCanScrollPrev,
      canScrollNext: mockCanScrollNext,
      scrollPrev: mockScrollPrev,
      scrollNext: mockScrollNext,
      on: mockOn,
      off: mockOff,
    },
  ]),
}))

describe("Carousel", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockCanScrollPrev.mockReturnValue(false)
    mockCanScrollNext.mockReturnValue(true)
  })

  it("renders previous and next slide buttons", () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )

    expect(screen.getByText("Previous slide")).toBeInTheDocument()
    expect(screen.getByText("Next slide")).toBeInTheDocument()
  })

  it("disables previous button when canScrollPrev is false", () => {
    mockCanScrollPrev.mockReturnValue(false)

    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )

    const prevButton = screen.getByText("Previous slide").closest("button")
    expect(prevButton).toBeDisabled()
  })

  it("enables previous button when canScrollPrev is true", () => {
    mockCanScrollPrev.mockReturnValue(true)

    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )

    const prevButton = screen.getByText("Previous slide").closest("button")
    expect(prevButton).not.toBeDisabled()
  })

  it("calls scrollNext when next button is clicked", async () => {
    mockCanScrollNext.mockReturnValue(true)
    const user = userEvent.setup()

    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )

    const nextButton = screen.getByText("Next slide").closest("button")!
    await user.click(nextButton)
    expect(mockScrollNext).toHaveBeenCalledOnce()
  })

  it("calls scrollPrev when previous button is clicked and enabled", async () => {
    mockCanScrollPrev.mockReturnValue(true)
    const user = userEvent.setup()

    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )

    const prevButton = screen.getByText("Previous slide").closest("button")!
    await user.click(prevButton)
    expect(mockScrollPrev).toHaveBeenCalledOnce()
  })
})
