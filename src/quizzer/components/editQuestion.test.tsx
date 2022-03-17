import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "../Quizzer";
import userEvent from "@testing-library/user-event";

describe("editQuestion Component tests", () => {
    beforeEach(() => render(<Quizzer />));
    //Short Answer tests
    test("There is an edit button", () => {
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[0].click(); //click first "view" button
        const editButton = screen.queryAllByRole("button", { name: /Edit/i });
        expect(editButton[0]).toBeInTheDocument();
    });
    test("Pressing the edit button renders 2 text boxes", () => {
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[0].click(); //click first "view" button
        const editButton = screen.getAllByRole("button", { name: /Edit/i });
        editButton[0].click();
        const inputBox = screen.getAllByRole("textbox");
        expect(inputBox[0]).toBeInTheDocument();
        expect(inputBox[1]).toBeInTheDocument();
    });
    test("Pressing edit remders save, cancel, and delete buttons", () => {
        //check number of checks before and after deleting Q1
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[0].click(); //click first "view" button
        const editButton = screen.getAllByRole("button", { name: /Edit/i });
        editButton[0].click();
        expect(screen.getByText("Save")).toBeInTheDocument();
        expect(screen.getByText("Cancel")).toBeInTheDocument();
        expect(screen.getByText("Delete")).toBeInTheDocument();
    });
    test("Editing the descritpion of second question works", () => {
        //check number of checks before and after deleting Q1
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[1].click(); //click first "view" button
        const editButton = screen.getAllByRole("button", { name: /Edit/i });
        editButton[1].click();
        const inputBox = screen.getByTestId("D2");
        userEvent.type(inputBox, "edited question");
        const saveButton = screen.getByRole("button", { name: /Save/i });
        saveButton.click();
        expect(screen.getByText(/edited question/i)).toBeInTheDocument();
    });
    test("Editing the description of a different question works", () => {
        //check number of checks before and after deleting Q1
        const viewButton = screen.getAllByRole("button", { name: /View/i }); //need to view quiz to see questions
        viewButton[3].click(); //click first "view" button
        const editButton = screen.getAllByRole("button", { name: /Edit/i });
        editButton[3].click();
        const inputBox = screen.getByTestId("D4");
        userEvent.type(inputBox, "change was made");
        const saveButton = screen.getByRole("button", { name: /Save/i });
        saveButton.click();
        expect(screen.getByText(/change was made/i)).toBeInTheDocument();
    });
});
