import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "../Quizzer";

describe("deleteQuestion Component tests", () => {
    beforeEach(() => render(<Quizzer />));
    //Short Answer tests
    test("There is an input box", () => {
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[0].click(); //click first "view" button
        const inputBox = screen.getAllByRole("textbox");
        expect(inputBox[0]).toBeInTheDocument();
    });
    test("Delete button is NOT on screen if edit button is not pressed", () => {
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[0].click(); //click first "view" button
        const deleteButton = screen.queryByRole("button", { name: /Delete/i });
        expect(deleteButton).not.toBeInTheDocument();
    });
    test("There is an delete button", () => {
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[0].click(); //click first "view" button
        const editButton = screen.getAllByRole("button", { name: /Edit/i });
        editButton[0].click(); //click first "view" button
        const deleteButton = screen.getAllByRole("button", { name: /Delete/i });
        expect(deleteButton[0]).toBeInTheDocument();
    });
    test("Deleting first question works", () => {
        //check number of checks before and after deleting Q1
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[0].click(); //click first "view" button
        const before = screen.queryAllByText(/✔️/i);
        const editButton = screen.getAllByRole("button", { name: /Edit/i });
        editButton[0].click(); //click first "edit" button
        const deleteButton = screen.getAllByRole("button", { name: /Delete/i });
        deleteButton[0].click(); //click first "view" button
        const after = screen.queryAllByText(/✔️/i);
        expect(after.length).toEqual(before.length - 1); //there is 1 less check
    });
    test("Deleting a different question works", () => {
        //check number of checks before and after deleting Q1
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[0].click(); //click first "view" button
        const before = screen.queryAllByText(/❌/i);
        const editButton = screen.getAllByRole("button", { name: /Edit/i });
        editButton[3].click(); //click first "edit" button
        const deleteButton = screen.getByRole("button", { name: /Delete/i });
        deleteButton.click(); //click first "view" button
        const after = screen.queryAllByText(/❌/i);
        expect(after.length).toEqual(before.length - 1); //there is 1 less X since it was deleted
    });
});
