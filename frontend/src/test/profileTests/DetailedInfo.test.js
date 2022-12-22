import * as React from "react"
import {render, screen} from "@testing-library/react";
import DetailedUserInfo from "../../components/profile/userInfo/detailedUserInfo/DetailedUserInfo";

describe("Detailed info in profile", () => {
    beforeEach(() => {
        render(<DetailedUserInfo />)
    })

    test('at least 1 additional info', () => {
        expect(screen.getAllByTestId("i").length).toBeGreaterThanOrEqual(1)
    })
})