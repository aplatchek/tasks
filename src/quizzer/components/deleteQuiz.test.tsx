import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "../Quizzer";

describe("deleteQuiz Component tests", () => {
    beforeEach(() => render(<Quizzer />));
    //Short Answer tests
    test("There is a delete quiz button", () => {
        const deleteButton = screen.getAllByRole("button", {
            name: /Delete Quiz/i
        });
        expect(deleteButton[0]).toBeInTheDocument();
    });
    test("Delete button is NOT on screen when the questions are visible", () => {
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[0].click(); //click first "view" button
        const deleteButton = screen.queryByRole("button", {
            name: /Delete Quiz/i
        });
        expect(deleteButton).not.toBeInTheDocument();
    });
    test("Deleting first quiz works", () => {
        const deleteButton = screen.getAllByRole("button", {
            name: /Delete Quiz/i
        });
        deleteButton[0].click(); //click first "view" button
        expect(screen.queryByText(/Q1/i)).not.toBeInTheDocument();
    });
    test("Deleting all quizzes causes all delete buttons to be gone", () => {
        const deleteButton = screen.getAllByRole("button", {
            name: /Delete Quiz/i
        });
        deleteButton[0].click();
        deleteButton[1].click();
        deleteButton[2].click();
        deleteButton[3].click();
        deleteButton[4].click();
        const deleteButtonAfter = screen.queryByRole("button", {
            name: /Delete Quiz/i
        });
        expect(deleteButtonAfter).not.toBeInTheDocument();
    });
});
