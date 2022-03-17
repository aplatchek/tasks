import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "../Quizzer";

describe("quizVisible Component tests", () => {
    beforeEach(() => render(<Quizzer />));
    //Short Answer tests
    test("'Q1', 'Q2', and 'Q3' are present on the screen", () => {
        expect(screen.getByText(/Q1/i)).toBeInTheDocument();
        expect(screen.getByText(/Q2/i)).toBeInTheDocument();
        expect(screen.getByText(/Q3/i)).toBeInTheDocument();
    });
    test("Number of questions in each quiz is displayed", () => {
        expect(screen.getAllByText(/3 questions/i)[0]).toBeInTheDocument();
        expect(screen.getAllByText(/4 questions/i)[0]).toBeInTheDocument();
        expect(screen.getAllByText(/5 questions/i)[0]).toBeInTheDocument();
    });
    test("Description of first two quizzes is visible", () => {
        expect(
            screen.getByText(/this is the first set of test questions/i)
        ).toBeInTheDocument();
        expect(
            screen.getByText(/this is the second set of test questions/i)
        ).toBeInTheDocument();
    });
    test("There is a button to view the contents of the quiz", () => {
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        expect(viewButton[0]).toBeInTheDocument();
    });
});
