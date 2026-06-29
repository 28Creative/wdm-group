import { describe, it, expect } from "vitest"
import { buttonVariants } from "../button"

const variants = ["default", "primary", "secondary", "ghost", "link"] as const
const sizes = ["default", "sm", "lg", "icon"] as const

describe("buttonVariants snapshots", () => {
  for (const variant of variants) {
    for (const size of sizes) {
      it(`variant="${variant}" size="${size}"`, () => {
        expect(buttonVariants({ variant, size })).toMatchSnapshot()
      })
    }
  }

  it("no arguments uses defaultVariants", () => {
    expect(buttonVariants()).toMatchSnapshot()
  })

  it("extra className is merged into output", () => {
    expect(buttonVariants({ variant: "default", size: "default", className: "w-full" })).toMatchSnapshot()
  })
})
