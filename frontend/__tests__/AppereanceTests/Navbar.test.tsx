import * as React from 'react'
import Navbar from "../../src/components/navbar/Navbar";
import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";

describe("navbar tests", () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>)
    })
    test("main page __tests__", () => {
        expect(screen.queryByText("home")).not.toBeNull()
    })
    test("users page __tests__", () => {
        expect(screen.queryByText("people")).not.toBeNull()
    })
    test("single user page __tests__", () => {
        expect(screen.queryByText("account_circle")).not.toBeNull()
    })
    test("count of pages", () => {
        expect(screen.getAllByTestId("i")).toHaveLength(3)
    })
})