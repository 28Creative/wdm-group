import { describe, it, expect } from "vitest"
import { labelVariants } from "../label"

describe("labelVariants snapshots", () => {
  it("default classes", () => {
    expect(labelVariants()).toMatchSnapshot()
  })

  it("extra className is merged into output", () => {
    expect(labelVariants({ className: "text-red-500" })).toMatchSnapshot()
  })
})
