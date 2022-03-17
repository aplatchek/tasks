import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "../Quizzer";

describe("quizHasQuestions Component tests", () => {
    beforeEach(() => render(<Quizzer />));
    //Short Answer tests
    test("Initially, there are no questions (no textboxes or drop boxes present)", () => {
        const inputBox = screen.queryByRole("textbox");
        const dropBox = screen.queryByRole("combobox");
        expect(inputBox).not.toBeInTheDocument();
        expect(dropBox).not.toBeInTheDocument();
    });
    test("After hitting view button, there are input boxes", () => {
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[0].click(); //click first "view" button
        const inputBox = screen.queryAllByRole("textbox");
        expect(inputBox[0]).toBeInTheDocument();
    });
    test("A specific question is shown on the screen", () => {
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[0].click(); //click first "view" button
        expect(
            screen.getByText(
                /How many students are taking CISC275 this semester?/i
            )
        ).toBeInTheDocument();
    });
    test("There are point values displayed on the screen", () => {
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[0].click(); //click first "view" button
        expect(screen.queryAllByText(/points/i)[0]).toBeInTheDocument();
    });
});
