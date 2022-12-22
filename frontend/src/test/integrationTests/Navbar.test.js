import * as React from 'react'
import Navbar from "../../components/navbar/Navbar";
import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";

describe("navbar tests", () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>)
    })
    test("main page test", () => {
        expect(screen.queryByText("home")).not.toBeNull()
    })
    test("users page test", () => {
        expect(screen.queryByText("people")).not.toBeNull()
    })
    test("single user page test", () => {
        expect(screen.queryByText("account_circle")).not.toBeNull()
    })
    test("count of pages", () => {
        expect(screen.getAllByTestId("i")).toHaveLength(3)
    })
})