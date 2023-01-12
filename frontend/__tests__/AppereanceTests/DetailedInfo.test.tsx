import * as React from "react"
import { render, screen } from "@testing-library/react"
import DetailedUserInfo from "../../src/components/profile/userInfo/detailedUserInfo/DetailedUserInfo"
import { config } from "react-transition-group"

config.disabled = true

describe("Detailed info in profile", () => {
  beforeEach(() => {
    render(<DetailedUserInfo />)
  })

  test("at least 1 additional info", () => {
    expect(screen.getAllByTestId("i").length).toBeGreaterThanOrEqual(1)
  })
})
