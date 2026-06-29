import { describe, it, expect } from "vitest"
import { badgeVariants } from "../badge"

const variants = ["default", "secondary", "destructive", "outline"] as const

describe("badgeVariants snapshots", () => {
  for (const variant of variants) {
    it(`variant="${variant}"`, () => {
      expect(badgeVariants({ variant })).toMatchSnapshot()
    })
  }

  it("no arguments uses defaultVariants", () => {
    expect(badgeVariants()).toMatchSnapshot()
  })

  it("extra className is merged into output", () => {
    expect(badgeVariants({ variant: "default", className: "uppercase" })).toMatchSnapshot()
  })
})
