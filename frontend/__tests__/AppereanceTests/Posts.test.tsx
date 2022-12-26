import * as React from "react"
import {render, screen} from "@testing-library/react";
import Posts from "../../src/components/profile/Posts/Posts";
import {MemoryRouter} from "react-router-dom";

describe("posts tests", () => {
    beforeEach(() => {
        render(
            <Posts />
        )
    })
    test("does each post has avatar", () => {
        expect(screen.getAllByTestId("post").length).toBe(screen.getAllByAltText("Avatar").length)
    })
    test("does each post has username", () => {
        expect(screen.getAllByTestId("post").length).toBe(screen.getAllByTestId("username").length)
    })
    test("does each post has upload date", () => {
        expect(screen.getAllByTestId("post").length).toBe(screen.getAllByTestId("date").length)
    })
})