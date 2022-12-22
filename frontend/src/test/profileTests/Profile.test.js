import * as React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserInfo from "../../components/profile/userInfo/UserInfo";

describe("profile tests", () => {
    beforeEach(() => {
        render(<UserInfo />)
    })
    test("i tags checker", () =>
        expect(screen.getAllByTestId("i")).toHaveLength(2)
    )
    test("place test", () => {
        expect(screen.getByTestId("placeInfo")).toBeInTheDocument()
    })
    test("'More info' test", () => {
        expect(screen.getByTestId("moreInfoBtn")).toBeInTheDocument()
    })
    test("open/close user's info", () => {
        expect(screen.queryByTestId("detailedInfo")).toBeNull()
        userEvent.click(screen.getByTestId("moreInfoBtn"))
        expect(screen.queryByTestId("detailedInfo")).toBeInTheDocument()
        userEvent.click(screen.getByTestId("moreInfoBtn"))
        expect(screen.queryByTestId("detailedInfo")).toBeNull()
    })
    test("profile picture in document", () => {
        expect(screen.getByAltText("Profile")).toBeInTheDocument()
    })
    test("background picture in document", () => {
        expect(screen.getByAltText("Background")).toBeInTheDocument()
    })

})